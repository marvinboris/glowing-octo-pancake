import React, { Component } from 'react';
import { Form, FormGroup, CustomInput, Label } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane, faBatteryHalf, faBuilding, faUserTie, faBook, faUser, faFile, faLock, faFlag, faCodeBranch, faCity } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';

class Add extends Component {
    state = {
        company_id: '',
        country_id: '',
        city_id: '',
        agency_id: '',
        job_id: '',
        hired_on: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        photo: '',
        country: 'CM',
        code: '237',
        // social_media: [],
        is_active: '1',
    }

    inputChangedHandler = e => {
        const { name, value, type, files } = e.target;
        if (type === 'file') return this.setState({ [name]: files[0] });
        if (name === 'phone') return !isNaN(value) && this.setState({ [name]: value });
        if (name === 'country') return this.setState({ country: value, code: this.props.countries.find(({ country }) => country === value).code });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(e.target);
    }

    render() {
        const { company_id, country_id, city_id, agency_id, job_id, hired_on, first_name, last_name, email, password, password_confirmation, phone, country, code } = this.state;
        const { backend: { employees: { companies, jobs } }, countries: countriesSelection } = this.props;
        let countries = [];
        let cities = [];
        let agencies = [];

        if (company_id !== '') countries = companies.find(({ id }) => +company_id === +id).countries;
        if (country_id !== '') cities = countries.find(({ id }) => +country_id === +id).cities;
        if (city_id !== '') agencies = cities.find(({ id }) => +city_id === +id).agencies;

        const companiesOptions = companies.sort((a, b) => a.name > b.name).map(company => <option key={JSON.stringify(company)} value={company.id}>{company.name}</option>);
        const countriesOptions = countries.sort((a, b) => a.name > b.name).map(country => <option key={JSON.stringify(country)} value={country.id}>{country.name}</option>);
        const citiesOptions = cities.sort((a, b) => a.name > b.name).map(city => <option key={JSON.stringify(city)} value={city.id}>{city.name}</option>);
        const agenciesOptions = agencies.sort((a, b) => a.name > b.name).map(agency => <option key={JSON.stringify(agency)} value={agency.id}>{agency.name}</option>);
        const jobsOptions = jobs.sort((a, b) => a.name > b.name).map(priority => <option key={JSON.stringify(priority)} value={priority.id}>{priority.name}</option>);
        
        const countriesSelectionOptions = countriesSelection.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

        return <Form onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="select" name="company_id" placeholder="Company" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={company_id}>
                <option>Select a company</option>
                {companiesOptions}
            </Input>
            <Input className="col-lg-6" type="select" name="country_id" placeholder="Country" onChange={this.inputChangedHandler} icon={faFlag} validation={{ required: true }} required value={country_id}>
                <option>Select a country</option>
                {countriesOptions}
            </Input>
            <Input className="col-lg-6" type="select" name="city_id" placeholder="Company" onChange={this.inputChangedHandler} icon={faCity} validation={{ required: true }} required value={city_id}>
                <option>Select a city</option>
                {citiesOptions}
            </Input>
            <Input className="col-lg-6" type="select" name="agency_id" placeholder="Branch" onChange={this.inputChangedHandler} icon={faCodeBranch} validation={{ required: true }} required value={agency_id}>
                <option>Select a branch</option>
                {agenciesOptions}
            </Input>
            <Input className="col-lg-6" type="select" name="job_id" placeholder="Job" onChange={this.inputChangedHandler} icon={faUserTie} validation={{ required: true }} required value={job_id}>
                <option>Select a job</option>
                {jobsOptions}
            </Input>
            <Input className="col-lg-6" type="text" name="first_name" placeholder="First Name" onChange={this.inputChangedHandler} icon={faUser} validation={{ required: true }} required value={first_name} />
            <Input className="col-lg-6" type="text" name="last_name" placeholder="Last Name" onChange={this.inputChangedHandler} icon={faUser} validation={{ required: true }} required value={last_name} />
            <Input className="col-lg-6" type="date" name="hired_on" placeholder="Hired on" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={hired_on} />
            <Input className="col-lg-6" type="email" name="email" placeholder="E-Mail Address" onChange={this.inputChangedHandler} icon={faUser} validation={{ required: true }} required value={email} />
            <Input className="col-lg-6" type="password" name="password" placeholder="Password" onChange={this.inputChangedHandler} icon={faLock} validation={{ required: true }} required value={password} />
            <Input className="col-lg-6" type="password" name="password_confirmation" placeholder="Confirm Password" onChange={this.inputChangedHandler} icon={faLock} validation={{ required: true }} required value={password_confirmation} />
            <Input className="col-lg-6" type="select" addon={<span className="text-secondary text-small d-inline-flex">
                <div className="rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                    <span className={`flag-icon text-xx-large position-absolute flag-icon-${country.toLowerCase()}`} />
                </div>
            </span>} onChange={this.inputChangedHandler} value={country} validation={{ required: true }} name="country" required placeholder="Select Country">
                <option>Select a country</option>
                {countriesSelectionOptions}
            </Input>
            <input type="hidden" value={code} name="code" />
            <Input type="tel" className="col-lg-6" addon={<span className="text-secondary text-small">+{code}</span>} onChange={this.inputChangedHandler} value={phone} validation={{ required: true, isNumeric: true }} name="phone" required placeholder="Phone Number" />
            <FormGroup className="col-12">
                <CustomInput type="file" name="photo" accept=".jpg,.jpeg,.png" placeholder="Profile Photo" onChange={this.inputChangedHandler} icon={faFile} />
            </FormGroup>
            <FormGroup className="col-12 d-flex align-items-center">
                <div className='text-700 pr-4'>Account Status</div>
                <Label check>
                    <CustomInput type="radio" name="is_active" id="status-1" onChange={this.inputChangedHandler} value={1} defaultChecked label="Active" inline />
                </Label>
                <Label check>
                    <CustomInput type="radio" name="is_active" id="status-2" onChange={this.inputChangedHandler} value={0} label="Inactive" inline />
                </Label>
            </FormGroup>

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postEmployees(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));