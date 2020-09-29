import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faFilePdf, faFileImage, faUser, faBook, faSpinner, faTimesCircle, faCheckCircle, faStopwatch, faSignInAlt, faCalendarAlt, faComments, faReply } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';

// Components
import WorkTimeTracker from './WorkTimeTracker/WorkTimeTracker';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../components/Backend/Dashboard/Card/Card';
import Table from '../../../../components/Backend/UI/Table/Table';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import View from '../../../../components/Backend/UI/View/View';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import Counter from '../../../../components/Backend/UI/Counter/Counter';
import WithTooltip from '../../../../components/UI/WithTooltip/WithTooltip';
import BetweenButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate, timeFromTimestamp, convertTime } from '../../../../shared/utility';

import 'react-calendar/dist/Calendar.css';

const twoDigits = number => number < 10 ? '0' + number : number;

class Dashboard extends Component {
    state = {
        blocksData: null,
        tasks: null, attendanceReport: null, calendar: null, chatBox: null, messages: null,
        workTimeTracker: null,

        interval: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.dashboard.blocksData && !prevState.blocksData) {
            const { blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker } = nextProps.backend.dashboard;
            return updateObject(prevState, { blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker });
        }
        // if (nextProps.backend.requests.requests && !prevState.requestsRequests) return updateObject(prevState, { requestsRequests: nextProps.backend.requests.requests });
        return prevState;
    }

    componentDidMount() {
        this.props.get();
    }

    componentDidUpdate(prevProps, prevState) {
        const { dashboard, attendanceReport, requests } = this.props.backend;

        if (!attendanceReport.loading && prevProps.backend.attendanceReport.loading) {
            const { blocksData } = this.state;
            blocksData.workedTime = attendanceReport.workedTime;
            blocksData.status = attendanceReport.status;

            this.setState({ blocksData }, () => {
                const { blocksData } = this.state;
                if (blocksData.status) {
                    const interval = setInterval(() => {
                        blocksData.workedTime++;
                        this.setState({ blocksData });
                    }, 1000);
                    this.setState({ interval });
                } else {
                    const { interval } = this.state;
                    if (interval) {
                        clearInterval(interval);
                        this.setState({ interval: null });
                    }
                }
            });
        }

        if (this.state.blocksData && !prevState.blocksData) {
            if (this.state.blocksData.status) {
                const interval = setInterval(() => {
                    const { blocksData } = this.state;
                    blocksData.workedTime++;
                    this.setState({ blocksData });
                }, 1000);
                this.setState({ interval });
            }
        }

        if (dashboard.blocksData && !prevProps.backend.dashboard.blocksData) {
            const channel = Echo.channel('public');
            channel.listen('UserDashboard', ({ blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker }) => {
                if (this.props.auth.token) this.setState({ blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker });
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
        this.props.reset();
    }

    render() {
        let { blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker } = this.state;
        let { auth: { data: { job } }, backend: { dashboard: { loading, error } } } = this.props;

        let content = null;
        let errors = null;

        const colors = ['orange', 'green'];
        const texts = ['Pending', 'Completed'];
        const icons = [faSpinner, faCheckCircle];

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (blocksData) {
                const { subscriptionsAmount, totalCustomers, expenses, totalCase } = blocksData;
                const data = [
                    {
                        title: 'Montant Abonnements',
                        children: subscriptionsAmount,
                        icon: faClock,
                        link: '/user/services/',
                        color: 'orange',
                        details: `Montant des services offerts`,
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'orange'
                    },
                    {
                        title: 'Clients Total',
                        children: totalCustomers,
                        icon: faLandmark,
                        link: '/user/customers/',
                        color: 'brown',
                        details: `Clients dans le système`,
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Dépenses',
                        children: expenses,
                        icon: faEnvelope,
                        link: '/user/expenses',
                        color: 'yellow',
                        details: `Toutes les dépenses enregistrées`,
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Caisse Totale',
                        children: totalCase,
                        icon: faStopwatch,
                        link: '/user/case',
                        color: 'darkhead',
                        details: `Montant disponible en caisse`,
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'white',
                    }
                ];

                const cards = data.map(({ title, titleColor, icon, link, color, children, details, circleBorder, circleColor, light }, index) => <Card color={color} key={index} title={title} titleColor={titleColor} details={details} circleBorder={circleBorder} circleColor={circleColor} icon={icon} link={link} light={light}>{children}</Card>);

                content = (
                    <>
                        <div className="pt-4 px-4 pb-3 bg-orange-10">
                            <Row>
                                {cards}
                            </Row>
                        </div>

                        <Row className="mt-5">
                            <Col lg={6} className="pt-3 pt-lg-0">
                                <div className="bg-soft shadow-sm text-dark h-100 d-flex flex-column">
                                    <div className="p-3 border-bottom border-light text-700 position-relative d-flex">
                                        <span className="d-inline-flex align-items-center"><FontAwesomeIcon size="lg" className="text-dark mr-2" fixedWidth icon={faTasks} />Rapport Ventes</span>

                                        <div className="ml-auto d-none d-lg-flex justify-content-end align-items-center text-dark position-absolute" style={{ top: '50%', right: 16, transform: 'translateY(-50%)' }}>
                                            <FontAwesomeIcon icon={faArrowsAlt} size="lg" className="mr-3" />

                                            <FontAwesomeIcon icon={faTimes} size="2x" />
                                        </div>
                                    </div>

                                    <Row className="p-3 flex-fill d-flex flex-column justify-content-center">
                                        <Col xs={12} lg={11} style={{ minHeight: 150 }}>
                                            {/* <WorkTimeTracker data={workTimeTracker} /> */}
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Dashboard" icon={faTachometerAlt} />
                    <SpecialTitle user icon={faTachometerAlt}>Employee panel</SpecialTitle>
                    <Subtitle user>Dashboard</Subtitle>
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
    get: () => dispatch(actions.getUserDashboard()),
    reset: () => dispatch(actions.dashboardReset()),
    onPostClock: () => dispatch(actions.postClock()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));