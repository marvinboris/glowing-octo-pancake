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

import Edit from './Categories/Edit';
import Add from './Categories/Add';
import RawView from './Categories/View';

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
        let { backend: { customers: { loading, error, message, customers, total } } } = this.props;

        let content;
        let errors;
        let feedback;

        feedback = <Feedback message={message} />;

        if (!customers) customers = [];

        errors = <>
            <Error err={error} />
        </>;

        const data = customers.map(customer => {
            return updateObject(customer, {
                created_at: convertDate(customer.created_at),
                photo: customer.photo && <div className="d-flex">
                    <span>Voir</span>

                    <span className="ml-auto">
                        <View title={`Photo de l'utilisateur: ${customer.name}`} content={<img src={customer.photo} />}>
                            <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                        </View>
                    </span>
                </div>,
                action: <div className="text-center">
                    <Link to={`/user/customers/${customer.id}`} className="mr-2">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    <Link to={`/user/customers/${customer.id}/edit`} className="mr-2">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>
                    <Delete deleteAction={() => this.props.delete(customer.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete>
                </div>,
            });
        });

        content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(customers)} get={this.props.get} total={total} bordered add="Ajouter un client" link="/user/customers/add" icon={faUserTie} title="Liste des clients" className="shadow-sm"
                        fields={[
                            { name: 'Nom complet', key: 'name' },
                            { name: 'Téléphone', key: 'phone' },
                            { name: 'Photo', key: 'photo' },
                            { name: 'Pays', key: 'country' },
                            { name: 'Ville', key: 'town' },
                            { name: 'Quartier', key: 'quarter' },
                            { name: 'Numéro d\'identification Canal+', key: 'nid_canal' },
                            { name: 'Numéro d\'identification ENEO', key: 'nid_eneo' },
                            { name: 'Numéro d\'identification Camwater', key: 'nid_camwater' },
                            { name: 'Action', key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Liste des clients" icon={faUserTie} />
                    <SpecialTitle user icon={faUserTie}>Clients</SpecialTitle>
                    <Subtitle user>Liste des clients</Subtitle>
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
    get: (page, show, search) => dispatch(actions.getCustomers(page, show, search)),
    delete: id => dispatch(actions.deleteCustomers(id)),
    reset: () => dispatch(actions.resetCustomers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));