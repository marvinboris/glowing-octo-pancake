import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormGroup, Label, CustomInput, Form, Alert, Button } from 'reactstrap';
import { faClock, faUserTie, faCode, faBook, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';
import { updateObject } from '../../../../../shared/utility';

class Reply extends Component {
    state = {
        ref: '',
        object: '',
        content: '',
        sender: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.message && prevState.ref === '') {
            const { user, object, sender } = nextProps.message;
            return updateObject(prevState, { ref: user.ref, object, sender });
        }
        return prevState;
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
        let { ref, object, content, sender } = this.state;

        const linkParts = window.location.pathname.split('/');
        const page = linkParts[linkParts.length - 1];

        if (object) object = 'RE: ' + object;

        return <Form onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="text" name="object" placeholder="Object" icon={faClock} validation={{ required: true }} required readOnly value={object} />
            <Input className="col-lg-6" type="text" icon={faUserTie} validation={{ required: true }} required readOnly value={sender} />
            <Input className="col-12" type="textarea" name="content" placeholder="Content" onChange={this.inputChangedHandler} icon={faCode} validation={{ required: true }} required value={content} />
            <FormGroup className="col-12">
                <CustomInput type="file" name="documents[]" id="documents" multiple placeholder="Attached files" onChange={this.inputChangedHandler} icon={faBook} />
            </FormGroup>
            <input type="hidden" name="ref" defaultValue={ref} />
            <input type="hidden" name="page" defaultValue={page} />

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postMessages(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reply));