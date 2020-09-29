import React, { Component } from 'react';
import { Form, FormGroup, CustomInput } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane, faBatteryHalf, faBuilding, faUserTie, faBook, faRuler, faRulerVertical, faRulerHorizontal, faFlag, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';

class Add extends Component {
    state = {
        company_id: '',
        name: '',
        abbr: '',
        code: '',
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        if (name === 'abbr') {
            const country = this.props.countries.find(({ country }) => country === value);
            return this.setState({ abbr: value, code: country.code, name: country.name });
        }
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(e.target);
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
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postCountries(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));