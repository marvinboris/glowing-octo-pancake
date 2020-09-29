import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, FormGroup, Label, CustomInput, Col } from 'reactstrap';
import { faLock, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import Title from '../../../../components/UI/Titles/Title/Title';
import Input from '../../../../components/UI/Input/Input';
import BetweenButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../../store/actions/index';

export class Login extends Component {
    state = {
        email: '',
        password: '',
        otp: 'email'
    }

    componentDidUpdate() {
        const { auth: { hash }, onSetHash, history } = this.props;
        if (hash) {
            onSetHash(hash);
            history.push('/auth/verify');
        }
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        const { auth: { loading, error, message } } = this.props;

        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div>;
        else content = <Form onSubmit={this.submitHandler} className="row">
            <Col xl={10}>
                <Input type="text" icon={faUser} onChange={this.inputChangeHandler} validation={{ required: true, isEmail: true }} value={email} name="email" required placeholder="E-mail address" />
                <Input type="password" icon={faLock} onChange={this.inputChangeHandler} validation={{ required: true }} value={password} name="password" required placeholder="Password" />

                <BetweenButton color="yellow" size="lg" className="py-3 px-4 btn-block" icon={faSignInAlt}>Sign In</BetweenButton>
            </Col>
        </Form>;

        return <>
            <Title>
                Don't be late! <span className="text-yellow">Sign In</span>
            </Title>
            {errors}
            {feedback}
            {content}
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(actions.authUserLogin(data)),
    onSetHash: hash => dispatch(actions.setHash(hash))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);