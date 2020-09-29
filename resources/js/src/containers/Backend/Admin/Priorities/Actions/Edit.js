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
        name: '',
        id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.priority && prevState.name === '') return updateObject(prevState, { ...nextProps.priority });
        return prevState;
    }

    inputChangedHandler = e => {
        const { name, value, type, files } = e.target;
        if (type === 'file') return this.setState({ [name]: files });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.submit(this.state.id, this.state);
    }

    render() {
        const { name } = this.state;

        return <Form onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="text" name="name" placeholder="Name" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={name} />

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (id, data) => dispatch(actions.patchPriorities(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));