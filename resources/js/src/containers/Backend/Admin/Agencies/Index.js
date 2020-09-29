import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck, faBuilding, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import WithTooltip from '../../../../components/UI/WithTooltip/WithTooltip';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../components/Backend/UI/View/View';
import Counter from '../../../../components/Backend/UI/Counter/Counter';

import Edit from './Actions/Edit';
import Add from './Actions/Add';
import RawView from './Actions/View';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate, convertTime } from '../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { agencies: { loading, error, message, agencies } } } = this.props;

        let content;
        let errors;
        let feedback;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (agencies) {
                feedback = <Feedback message={message} />;

                const data = agencies.map(agency => {
                    const colors = ['orange', 'pink', 'green'];
                    const texts = ['Pending', 'Unachieved', 'Achieved'];
                    const icons = [faSpinner, faTimesCircle, faCheckCircle];

                    const viewContent = <RawView agency={agency} />;

                    const editContent = <Edit agency={agency} />;

                    return updateObject(agency, {
                        created_at: convertDate(agency.created_at),
                        lat: agency.position.lat,
                        lng: agency.position.lng,
                        action: <div className="text-center">
                            <View title={'Branch details: ' + agency.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Branch edit: ' + agency.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(agency.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(agencies)} bordered add="Add Branch" content={<Add />} icon={faCodeBranch} title="Branches" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'City', key: 'city' },
                                    { name: 'Country', key: 'country' },
                                    { name: 'Company', key: 'company' },
                                    { name: 'Representative', key: 'representative' },
                                    { name: 'Name', key: 'name' },
                                    { name: 'Latitude', key: 'lat' },
                                    { name: 'Longitude', key: 'lng' },
                                    { name: 'Radius', key: 'radius' },
                                    { name: 'Creation Date', key: 'created_at' },
                                    { name: 'Action', key: 'action', fixed: true }
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Branches" icon={faCodeBranch} />
                    <SpecialTitle user icon={faCodeBranch}>Admin panel</SpecialTitle>
                    <Subtitle user>Branches</Subtitle>
                </div>
                <div className="Agencies p-4 pb-0">
                    {errors}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(actions.getAgencies()),
    delete: id => dispatch(actions.deleteAgencies(id)),
    patch: (id, data) => dispatch(actions.patchAgencies(id, data)),
    reset: () => dispatch(actions.agenciesReset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));