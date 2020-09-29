import React, { Component, createRef } from 'react';
import { Form, FormGroup, CustomInput } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane, faBatteryHalf, faBuilding, faUserTie, faBook, faRuler, faRulerVertical, faRulerHorizontal, faFlag, faCity } from '@fortawesome/free-solid-svg-icons';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';

const position = [51.505, -0.09];

class Add extends Component {
    state = {
        company_id: '',
        country_id: '',
        city_id: '',
        name: '',
        latitude: '',
        longitude: '',
        radius: '',

        hasLocation: false,
        latlng: {
            lat: 51.505,
            lng: -0.09
        }
    }

    mapRef = createRef()

    handleClick = () => {
        const map = this.mapRef.current
        if (map != null) map.leafletElement.locate()
    }

    handleLocationFound = e => {
        this.setState({
            hasLocation: true,
            latlng: e.latlng,
        })
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(e.target);
    }

    render() {
        const { company_id, country_id, city_id, name, latitude, longitude, radius } = this.state;
        const { backend: { agencies: { companies } } } = this.props;

        const marker = this.state.hasLocation ? (
            <Marker position={this.state.latlng}>
                <Popup>You are here</Popup>
            </Marker>
        ) : null;

        let countries = [];
        let cities = [];

        if (company_id !== '') countries = companies.find(({ id }) => +company_id === +id).countries;
        if (country_id !== '') cities = countries.find(({ id }) => +country_id === +id).cities;

        const companiesOptions = companies.sort((a, b) => a.name > b.name).map(company => <option key={JSON.stringify(company)} value={company.id}>{company.name}</option>);
        const countriesOptions = countries.sort((a, b) => a.name > b.name).map(country => <option key={JSON.stringify(country)} value={country.id}>{country.name}</option>);
        const citiesOptions = cities.sort((a, b) => a.name > b.name).map(city => <option key={JSON.stringify(city)} value={city.id}>{city.name}</option>);

        return <Form onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="select" name="company_id" placeholder="Company" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={company_id}>
                <option>Select a company</option>
                {companiesOptions}
            </Input>
            <Input className="col-lg-6" type="select" name="country_id" placeholder="Country" onChange={this.inputChangedHandler} icon={faFlag} validation={{ required: true }} required value={country_id}>
                <option>Select a country</option>
                {countriesOptions}
            </Input>
            <Input className="col-lg-6" type="select" name="city_id" placeholder="City" onChange={this.inputChangedHandler} icon={faCity} validation={{ required: true }} required value={city_id}>
                <option>Select a city</option>
                {citiesOptions}
            </Input>
            <Input className="col-lg-6" type="text" name="name" placeholder="Name" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={name} />
            <Input className="col-lg-6" type="number" name="radius" placeholder="Radius in meters(m)" onChange={this.inputChangedHandler} icon={faRuler} validation={{ required: true }} required value={radius} />
            <Input className="col-lg-6" type="number" name="latitude" placeholder="Latitude" onChange={this.inputChangedHandler} icon={faRulerVertical} validation={{ required: true }} required value={latitude} />
            <Input className="col-lg-6" type="number" name="longitude" placeholder="Longitude" onChange={this.inputChangedHandler} icon={faRulerHorizontal} validation={{ required: true }} required value={longitude} />
            <FormGroup className="col-12">
                <Map center={this.state.latlng} length={4} onClick={this.handleClick} onLocationfound={this.handleLocationFound} ref={this.mapRef} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {marker}
                </Map>
            </FormGroup>

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postAgencies(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));