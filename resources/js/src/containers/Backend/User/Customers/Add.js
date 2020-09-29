import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row, FormGroup } from 'reactstrap';
import { faUserTie, faUser, faMoneyBillWave, faPlusCircle, faUsers, faLock, faEnvelope, faCity, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faSave, faCalendar } from '@fortawesome/free-regular-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import FormButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions';

class Add extends Component {
    state = {
        name: '',
        phone: '',
        photo: null,
        city: '',
        quarter: '',
        nid_canal: '',
        nid_eneo: '',
        nid_camwater: '',
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, checked, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let { backend: { customers: { loading, error, message, cities } } } = this.props;
        let { name, phone, photo, city, quarter, nid_canal, nid_eneo, nid_camwater } = this.state;
        let content = null;
        let errors = null;

        if (!cities) cities = [];
        let quarters = [];

        if (city !== '') quarters = cities.find(c => c.id === +city).quarters;

        const citiesOptions = cities.sort((a, b) => a.name > b.name).map(item => <option key={item.name} value={item.id}>{item.name}</option>);
        const quartersOptions = quarters.sort((a, b) => a.name > b.name).map(item => <option key={item.name} value={item.id}>{item.name}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={faUserTie} title="Ajouter un client" link="/user/customers" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <FormInput type="text" className="col-md-6" icon={faUser} onChange={this.inputChangeHandler} value={name} name="name" required placeholder="Nom du client" />
                                    <FormInput type="tel" className="col-md-6" addon={<span className="text-secondary text-small">+237</span>} onChange={this.inputChangeHandler} value={phone} name="phone" required placeholder="Numéro de téléphone" />
                                    <FormInput type="select" className="col-md-6" icon={faCity} onChange={this.inputChangeHandler} value={city} name="city" required placeholder="Sélectionner la ville">
                                        <option>Sélectionner la ville</option>
                                        {citiesOptions}
                                    </FormInput>
                                    <FormInput type="select" className="col-md-6" icon={faBuilding} onChange={this.inputChangeHandler} value={quarter} name="quarter" required placeholder="Sélectionner le quartier">
                                        <option>Sélectionner le quartier</option>
                                        {quartersOptions}
                                    </FormInput>
                                    <FormInput type="text" className="col-md-6" icon={faCalendar} onChange={this.inputChangeHandler} value={nid_canal} name="nid_canal" placeholder="Numéro d'identification Canal+" />
                                    <FormInput type="text" className="col-md-6" icon={faCalendar} onChange={this.inputChangeHandler} value={nid_eneo} name="nid_eneo" placeholder="Numéro d'identification ENEO" />
                                    <FormInput type="text" className="col-md-6" icon={faCalendar} onChange={this.inputChangeHandler} value={nid_camwater} name="nid_camwater" placeholder="Numéro d'identification Camwater" />

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>Sauvegarder</FormButton>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg={4}>
                                <div className="embed-responsive embed-responsive-1by1 bg-soft border border-light w-60 mx-auto"></div>
                            </Col>
                        </Form>
                    </Row>
                </>
            );
        }

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Ajouter un client" icon={faUserTie} />
                    <SpecialTitle user icon={faUserTie}>Clients</SpecialTitle>
                    <Subtitle user>Ajouter un client</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(actions.getCustomersInfo()),
    post: data => dispatch(actions.postCustomers(data)),
    reset: () => dispatch(actions.resetCustomers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));