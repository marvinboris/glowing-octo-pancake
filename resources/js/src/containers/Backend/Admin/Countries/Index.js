import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck, faBuilding, faFlag } from '@fortawesome/free-solid-svg-icons';

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
    state = {
        countriesSelection: []
    }

    async componentDidMount() {
        this.props.get();
        const cors = 'https://cors-anywhere.herokuapp.com/';

        const phoneRes = await fetch(cors + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(cors + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countriesSelection = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.name > b.name);

        this.setState({ countriesSelection });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { countries: { loading, error, message, countries } } } = this.props;
        const { countriesSelection } = this.state;

        let content;
        let errors;
        let feedback;

        if (loading || countriesSelection.length === 0) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (countries) {
                feedback = <Feedback message={message} />;

                const data = countries.map(country => {
                    const viewContent = <RawView country={country} countries={countriesSelection} />;

                    const editContent = <Edit country={country} countries={countriesSelection} />;

                    return updateObject(country, {
                        created_at: convertDate(country.created_at),
                        action: <div className="text-center">
                            <View title={'Country details: ' + country.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Country edit: ' + country.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(country.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(countries)} bordered add="Add Country" content={<Add countries={countriesSelection} />} icon={faFlag} title="Countries" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Company', key: 'company' },
                                    { name: 'Name', key: 'name' },
                                    { name: 'Abbreviation', key: 'abbr' },
                                    { name: 'Code', key: 'code' },
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
                    <Breadcrumb main="Countries" icon={faBuilding} />
                    <SpecialTitle user icon={faBuilding}>Admin panel</SpecialTitle>
                    <Subtitle user>Countries</Subtitle>
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
    get: () => dispatch(actions.getCountries()),
    delete: id => dispatch(actions.deleteCountries(id)),
    patch: (id, data) => dispatch(actions.patchCountries(id, data)),
    reset: () => dispatch(actions.countriesReset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));