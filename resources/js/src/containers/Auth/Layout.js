import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import Footer from '../../components/Footer/Footer';
import Logo from '../../components/UI/Logo/Logo';

import Img from '../../assets/images/Group 233@2x.png';

class Auth extends Component {
    state = {
        date: { weekDay: null, day: null, month: null, year: null },
        clock: { hours: '00', minutes: '00', seconds: '00' },

        interval: null,
    }

    componentDidMount() {
        const interval = setInterval(() => {
            const date = new Date();
            const twoDigits = number => number < 10 ? '0' + number : number;

            const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
            const day = date.getDate();
            const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
            const year = date.getFullYear();

            const hours = twoDigits(date.getHours());
            const minutes = twoDigits(date.getMinutes());
            const seconds = twoDigits(date.getSeconds());

            this.setState({ date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } });
        }, 1000);
        this.setState({ interval });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    

    render() {
        const { date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } } = this.state;
        const { children } = this.props;

        return <div className="vh-100 d-flex flex-column bg-soft">
            <div className="border-bottom border-dark-50 py-4">
                <Container className="d-flex justify-content-between align-items-center">
                    <div>
                        <Logo dark />
                    </div>

                    <div className="text-700 text-large text-right">
                        <div className="text-secondary">
                            DATE : {weekDay} {day} {month} {year}
                        </div>

                        <div className="text-black">
                            <FontAwesomeIcon icon={faClock} className="text-dark mr-2" />
                            <div className="time d-inline-block">
                                TIME : {hours} : {minutes} : {seconds}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="flex-fill overflow-hidden">
                <div className="h-100">
                    <Container className="h-100">
                        <Row className="justify-content-between align-items-center h-100">
                            <Col xl={5} className="d-flex flex-column justify-content-center h-100">
                                <div>{children}</div>
                            </Col>

                            <Col xl={5}>
                                <img src={Img} className="img-fluid" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="bg-black-10 text-black border-top border-dark-50 pt-5 pb-3 d-flex justify-content-center">
                <div>
                    <div className="mb-3">
                        <Logo dark />
                    </div>

                    <div>
                        <span className="text-700 text-dark">&copy;</span> Copyright {new Date().getFullYear()} <span className="text-700">CANAL+ Customer Management System</span>. All rights reserved by <span className="text-700 text-dark">Briluce Services</span>.
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    }
}

export default withRouter(Auth);