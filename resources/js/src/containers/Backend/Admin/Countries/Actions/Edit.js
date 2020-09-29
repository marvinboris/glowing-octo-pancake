import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faCheck, faTimes, faPaperPlane, faClock, faCode, faSignature, faList, faBuilding, faUserTie, faBatteryHalf, faRulerVertical, faRulerHorizontal, faRuler } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Label, CustomInput, Form, Alert, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parser } from 'html-to-react';
import moment from 'moment';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';
import { updateObject, parseMoment } from '../../../../../shared/utility';

class Edit extends Component {
    state = {
        company_id: '',
        name: '',
        abbr: '',
        code: '',
        id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.country && prevState.name === '') return updateObject(prevState, { ...nextProps.country });
        return prevState;
    }

    inputChangedHandler = e => {
        const { value } = e.target;
        const country = this.props.countries.find(({ country }) => country === value);
        this.setState({ abbr: value, code: country.code, name: country.name });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.submit(this.state.id, this.state);
    }

    render() {
        const { company_id, name, abbr, code } = this.state;
        const { backend: { countries: { companies } }, countries } = this.props;

        const companiesOptions = companies.sort((a, b) => a.name > b.name).map(company => <option key={JSON.stringify(company)} value={company.id}>{company.name}</option>);
        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

        return <Form onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="select" name="company_id" placeholder="Company" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={company_id}>
                <option>Select a company</option>
                {companiesOptions}
            </Input>
            <Input className="col-lg-6" type="select" addon={<span className="text-secondary text-small d-inline-flex">
                <div className="rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                    <span className={`flag-icon text-xx-large position-absolute flag-icon-${abbr.toLowerCase()}`} />
                </div>
            </span>} onChange={this.inputChangedHandler} value={abbr} validation={{ required: true }} name="abbr" required placeholder="Select Country">
                <option>Select a country</option>
                {countriesOptions}
            </Input>
            <input type="hidden" value={name} name="name" />
            <input type="hidden" value={code} name="code" />

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (id, data) => dispatch(actions.patchCountries(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));