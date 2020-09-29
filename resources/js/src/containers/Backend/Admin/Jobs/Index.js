import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck, faBuilding, faUserTag } from '@fortawesome/free-solid-svg-icons';

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
        let { backend: { jobs: { loading, error, message, jobs } } } = this.props;

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
            if (jobs) {
                feedback = <Feedback message={message} />;

                const data = jobs.map(job => {
                    const viewContent = <RawView job={job} />;

                    const editContent = <Edit job={job} />;

                    return updateObject(job, {
                        created_at: convertDate(job.created_at),
                        action: <div className="text-center">
                            <View title={'Job details: ' + job.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Job edit: ' + job.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(job.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(jobs)} bordered add="Add Job" content={<Add />} icon={faUserTag} title="Jobs" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Name', key: 'name' },
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
                    <Breadcrumb main="Jobs" icon={faUserTag} />
                    <SpecialTitle user icon={faUserTag}>Admin panel</SpecialTitle>
                    <Subtitle user>Jobs</Subtitle>
                </div>
                <div className="p-4 pb-0">
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
    get: () => dispatch(actions.getJobs()),
    delete: id => dispatch(actions.deleteJobs(id)),
    patch: (id, data) => dispatch(actions.patchJobs(id, data)),
    reset: () => dispatch(actions.jobsReset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));