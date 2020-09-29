import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck, faUserTie } from '@fortawesome/free-solid-svg-icons';

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
        countries: []
    }

    async componentDidMount() {
        this.props.get();
        const cors = 'https://cors-anywhere.herokuapp.com/';

        const phoneRes = await fetch(cors + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(cors + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.name > b.name);

        this.setState({ countries });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { employees: { loading, error, message, employees } } } = this.props;
        const { countries } = this.state;

        let content;
        let errors;
        let feedback;

        if (loading || countries.length === 0) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (employees && countries) {
                feedback = <Feedback message={message} />;

                const employeesData = employees.map(employee => {
                    const viewContent = <RawView employee={employee} countries={countries} />;

                    const editContent = <Edit employee={employee} countries={countries} />;

                    const country = countries.find(({ country }) => country === employee.country);

                    return updateObject(employee, {
                        name: `${employee.first_name} ${employee.last_name}`,
                        last_login: convertDate(employee.last_login),
                        hired_on: convertDate(employee.hired_on),
                        country: <div className="d-flex align-items-center">
                            <div className="border border-1 border-white rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center mr-2" style={{ width: 20, height: 20 }}>
                                <span className={`flag-icon text-large position-absolute flag-icon-${employee.country.toLowerCase()}`} />
                            </div>

                            {country ? country.name : null}
                        </div>,
                        action: <div className="text-center">
                            <View title={'Employee details'} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Employee edit'} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => alert('Deleted')}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={employeesData} data={JSON.stringify(employees)} bordered add="Add Employee" content={<Add countries={countries} />} icon={faUserTie} title="Employees" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Name', key: 'name' },
                                    { name: 'Job', key: 'job' },
                                    { name: 'E-Mail Address', key: 'email' },
                                    { name: 'Phone', key: 'phone' },
                                    { name: 'Country', key: 'country' },
                                    { name: 'Hired on', key: 'hired_on' },
                                    { name: 'Last Login', key: 'last_login' },
                                    { name: 'Action', key: 'action' },
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Employees" icon={faUserTie} />
                    <SpecialTitle user icon={faUserTie}>Admin panel</SpecialTitle>
                    <Subtitle user>Employees</Subtitle>
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
    get: () => dispatch(actions.getEmployees()),
    delete: id => dispatch(actions.deleteEmployees(id)),
    patch: (id, data) => dispatch(actions.patchEmployees(id, data)),
    reset: () => dispatch(actions.employeesReset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));