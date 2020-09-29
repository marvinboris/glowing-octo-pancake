import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck, faReply } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../components/Backend/UI/List/List';
import Error from '../../../../../components/Error/Error';
import CustomSpinner from '../../../../../components/UI/CustomSpinner/CustomSpinner';
import WithTooltip from '../../../../../components/UI/WithTooltip/WithTooltip';
import Feedback from '../../../../../components/Feedback/Feedback';
import Delete from '../../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../../components/Backend/UI/View/View';
import Counter from '../../../../../components/Backend/UI/Counter/Counter';

import Reply from '../Actions/Reply';
import Add from '../Actions/Add';
import RawView from '../Actions/View';

import * as actions from '../../../../../store/actions';
import { updateObject, convertDate } from '../../../../../shared/utility';

class Archive extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { messages: { loading, error, message, messages } } } = this.props;

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
            if (messages) {
                feedback = <Feedback message={message} />;

                const messagesData = messages.map(message => {
                    const viewContent = <RawView message={message} />;

                    const replyContent = <Reply message={message} />;

                    return updateObject(message, {
                        created_at: convertDate(message.created_at),
                        action: <div className="text-center">
                            <View title={`Message details: ${message.object}`} content={viewContent}>
                                <Button size="sm" color="orange" className="mr-2">
                                    <FontAwesomeIcon icon={faEye} className="mr-2" fixedWidth />
                                    View
                                </Button>
                            </View>
                            <View title={`Message reply: ${message.object}`} content={replyContent}>
                                <Button size="sm" color="blue">
                                    <FontAwesomeIcon icon={faReply} className="mr-2" fixedWidth />
                                    Reply
                                </Button>
                            </View>
                            <Delete deleteAction={() => this.props.delete(message.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={messagesData} data={JSON.stringify(messages)} bordered add="New Message" content={<Add />} icon={faEnvelope} title="Archived Messages" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Received Date', key: 'created_at' },
                                    { name: 'Sender', key: 'sender' },
                                    { name: 'Receiver', key: 'receiver' },
                                    { name: 'Object', key: 'object' },
                                    { name: 'Content', key: 'content' },
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
                    <Breadcrumb main="Archived Messages" icon={faEnvelope} />
                    <SpecialTitle user icon={faEnvelope}>Employee panel</SpecialTitle>
                    <Subtitle user>Archived Messages</Subtitle>
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
    get: () => dispatch(actions.getArchiveMessages()),
    delete: id => dispatch(actions.deleteMessages(id)),
    patch: (id, data) => dispatch(actions.patchMessages(id, data)),
    reset: () => dispatch(actions.messagesReset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Archive));