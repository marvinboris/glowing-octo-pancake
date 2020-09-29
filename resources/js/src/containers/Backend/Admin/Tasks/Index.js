import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck } from '@fortawesome/free-solid-svg-icons';

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
        let { backend: { tasks: { loading, error, message, tasks } } } = this.props;

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
            if (tasks) {
                feedback = <Feedback message={message} />;

                const tasksData = tasks.map(task => {
                    const colors = ['orange', 'pink', 'green'];
                    const texts = ['Pending', 'Unachieved', 'Achieved'];
                    const icons = [faSpinner, faTimesCircle, faCheckCircle];

                    const viewContent = <RawView task={task} />;

                    const editContent = <Edit task={task} />;

                    return updateObject(task, {
                        created_at: convertDate(task.created_at),
                        date_due: convertDate(task.date_due),
                        time_due: convertTime(task.date_due),
                        status: <Badge color={colors[task.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[task.status]} className={[0].includes(task.status) ? "fa-spin" : ""} fixedWidth /> {texts[task.status]}</Badge>,
                        documents: <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faFileArchive} className="text-orange" fixedWidth /> {task.documents.length} Document{task.documents.length > 1 ? 's' : ''}</Badge>,
                        action: <div className="text-center">
                            <View title={'Task details: ' + convertDate(task.created_at)} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Task edit: ' + convertDate(task.created_at)} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(task.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={tasksData} data={JSON.stringify(tasks)} bordered add="Add Task" content={<Add />} icon={faTasks} title="Tasks" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Creation Date', key: 'created_at' },
                                    { name: 'Author', key: 'author' },
                                    { name: 'Date Due', key: 'date_due' },
                                    { name: 'Time Due', key: 'time_due' },
                                    { name: 'Comment', key: 'comment' },
                                    { name: 'Priority', key: 'priority' },
                                    { name: 'Documents', key: 'documents', minWidth: 150 },
                                    { name: 'Status', key: 'status', minWidth: 140 },
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
                    <Breadcrumb main="Tasks" icon={faTasks} />
                    <SpecialTitle user icon={faTasks}>Admin panel</SpecialTitle>
                    <Subtitle user>Tasks</Subtitle>
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
    get: () => dispatch(actions.getCustomers()),
    delete: id => dispatch(actions.deleteCustomers(id)),
    patch: (id, data) => dispatch(actions.patchCustomers(id, data)),
    reset: () => dispatch(actions.resetCustomers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));