import React, { Component } from 'react';
import { Form, FormGroup, CustomInput } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane, faBatteryHalf, faBuilding, faUserTie, faBook } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';

class Add extends Component {
    state = {
        ref: '',
        object: '',
        content: '',
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
        const { ref, object, content } = this.state;
        const { backend: { messages: { employees } } } = this.props;

        const linkParts = window.location.pathname.split('/');
        const page = linkParts[linkParts.length - 1];

        const employeesOptions = employees.sort((a, b) => a.first_name > b.first_name).map(employee => <option key={JSON.stringify(employee)} value={employee.ref}>{employee.first_name + ' ' + employee.last_name}</option>);

        return <Form onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="text" name="object" placeholder="Object" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={object} />
            <Input className="col-lg-6" type="select" name="ref" onChange={this.inputChangedHandler} placeholder="Employee" icon={faUserTie} validation={{ required: true }} required value={ref}>
                <option>Select an employee</option>
                {employeesOptions}
            </Input>
            <Input className="col-12" type="textarea" name="content" placeholder="Content" onChange={this.inputChangedHandler} icon={faCode} validation={{ required: true }} required value={content} />
            <FormGroup className="col-12">
                <CustomInput type="file" name="documents[]" id="documents" multiple placeholder="Attached files" onChange={this.inputChangedHandler} icon={faBook} />
            </FormGroup>
            <input type="hidden" name="page" defaultValue={page} />

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postMessages(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));