import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faFilePdf, faFileImage, faUser, faBook, faSpinner, faTimesCircle, faCheckCircle, faStopwatch, faSignInAlt, faCalendarAlt, faComments, faReply, faList } from '@fortawesome/free-solid-svg-icons';
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
        tasks: null, employees: null, events: null, chatBox: null, messages: null,
        workTimeTracker: null,

        interval: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.dashboard.blocksData && !prevState.blocksData) {
            const { blocksData, tasks, employees, events, chatBox, messages, workTimeTracker } = nextProps.backend.dashboard;
            return updateObject(prevState, { blocksData, tasks, employees, events, chatBox, messages, workTimeTracker });
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
        let { blocksData, tasks, employees, events, chatBox, messages, workTimeTracker } = this.state;
        let { backend: { dashboard: { loading, error } } } = this.props;

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
                const { totalEmployees, totalEvents, unreadMessages, totalTasks } = blocksData;
                const data = [
                    {
                        title: 'Total Employees',
                        children: totalEmployees,
                        icon: faClock,
                        link: '/admin/employees/',
                        color: 'paleblue',
                        details: `Employee${totalEmployees > 1 ? 's' : ''}`,
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'orange'
                    },
                    {
                        title: 'Total Events',
                        children: totalEvents,
                        icon: faLandmark,
                        link: '/admin/calendar/',
                        color: 'nightblue',
                        details: `Event${totalEvents > 1 ? 's' : ''}`,
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Unread Messages',
                        children: unreadMessages,
                        icon: faEnvelope,
                        link: '/admin/messages',
                        color: 'pink',
                        details: `Unread Message${unreadMessages > 1 ? 's' : ''}`,
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Total Tasks',
                        children: totalTasks,
                        icon: faStopwatch,
                        link: '/admin/tasks',
                        color: 'green',
                        details: `Task${totalTasks > 1 ? 's' : ''}`,
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'white',
                    }
                ];

                const cards = data.map(({ title, titleColor, icon, link, color, children, details, circleBorder, circleColor, light }, index) => <Card color={color} key={index} title={title} titleColor={titleColor} details={details} circleBorder={circleBorder} circleColor={circleColor} icon={icon} link={link} light={light}>{children}</Card>);

                const tasksData = tasks.map(task => {
                    // const viewContent = <RequestView task={task} country={country} />;

                    // const editContent = <Edit task={updateObject(task, { page_status: 'dashboard' })} />;

                    return updateObject(task, {
                        created_at: convertDate(task.created_at),
                        date_due: convertDate(task.date_due),
                        status: <Badge color={colors[task.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[task.status]} className={task.status === 0 ? "fa-spin" : ""} fixedWidth /> {texts[task.status]}</Badge>,
                        action: <div className="text-center">
                            <View title={'Task details'} content={<div />}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Task edit'} content={<div />}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => alert('Deleted')}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                const employeesData = employees.map(employee => {
                    // const viewContent = <RequestView employee={employee} country={country} />;

                    // const editContent = <Edit employee={updateObject(employee, { page_status: 'dashboard' })} />;

                    return updateObject(employee, {
                        name: employee.first_name + ' ' + employee.last_name,
                        last_login: convertDate(employee.last_login),
                        hired_on: convertDate(employee.hired_on),
                        action: <div className="text-center">
                            <View title={'Employee details'} content={<div />}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Employee edit'} content={<div />}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => alert('Deleted')}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                const eventsData = events.map(event => {
                    const colors = ['orange', 'pink', 'green'];
                    const texts = ['Pending', 'Unachieved', 'Achieved'];
                    const icons = [faSpinner, faTimesCircle, faCheckCircle];

                    return updateObject(event, {
                        start_date: convertDate(event.start_time),
                        start_time: <span className="text-700">{convertTime(event.start_time)}</span>,
                        finish_time: <span className="text-700">{convertTime(event.finish_time)}</span>,
                        finish_date: convertDate(event.finish_time),
                        status: <Badge color={colors[event.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[event.status]} className={[0].includes(event.status) ? "fa-spin" : ""} fixedWidth /> {texts[event.status]}</Badge>,
                        action: <div className="text-center">
                            <Delete deleteAction={() => alert(event.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            {cards}
                        </Row>

                        <Row className="mt-5">
                            <Table array={tasksData} draggable closable title="Tasks Board" icon={faTasks} bordered limit={5} lg={6} className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Creation Date', key: 'created_at' },
                                    { name: 'Author', key: 'author' },
                                    { name: 'Date Due', key: 'date_due' },
                                    { name: 'Comment', key: 'comment' },
                                    { name: 'Status', key: 'status', minWidth: 130 },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/admin/tasks" className="text-secondary">{'View full task list | >'}</Link>
                            </Table>

                            <Col lg={6} className="pt-3 pt-lg-0">
                                <div className="bg-brokenblue shadow-sm text-soft h-100 d-flex flex-column">
                                    <div className="p-3 border-bottom border-border text-700 position-relative d-flex">
                                        <span className="d-inline-flex align-items-center"><FontAwesomeIcon size="lg" className="text-orange mr-2" fixedWidth icon={faTasks} />Work Time Tracker</span>

                                        <div className="ml-auto d-none d-lg-flex justify-content-end align-items-center text-soft position-absolute" style={{ top: '50%', right: 16, transform: 'translateY(-50%)' }}>
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

                            <Table array={employeesData} draggable closable title="Employees Board" icon={faList} bordered limit={5} lg={6} outerClassName="pt-3" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Name', key: 'name' },
                                    { name: 'Job', key: 'job' },
                                    { name: 'E-Mail Address', key: 'email' },
                                    { name: 'Hired on', key: 'hired_on' },
                                    { name: 'Last Login', key: 'last_login' },
                                    { name: 'Action', key: 'action' },
                                ]}>
                                <Link to="/admin/employees" className="text-secondary">{'View full employee list | >'}</Link>
                            </Table>

                            <Table array={eventsData} draggable closable title="Last Events" icon={faEnvelope} bordered limit={5} lg={6} outerClassName="pt-3" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Event Title', key: 'title' },
                                    { name: 'Start Date', key: 'start_date' },
                                    { name: 'Start Time', key: 'start_time' },
                                    { name: 'End Date', key: 'finish_date' },
                                    { name: 'Finish Time', key: 'finish_time' },
                                    { name: 'Event Type', key: 'event_type' },
                                    { name: 'Event Description', key: 'description' },
                                    { name: 'Status', key: 'status', minWidth: 140 },
                                    { name: 'Action', key: 'action', fixed: true }
                                ]}>
                                <Link to="/user/events" className="text-secondary">{'View full event list | >'}</Link>
                            </Table>
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Dashboard" icon={faTachometerAlt} />
                    <SpecialTitle user icon={faTachometerAlt}>Admin panel</SpecialTitle>
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
    get: () => dispatch(actions.getAdminDashboard()),
    reset: () => dispatch(actions.dashboardReset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));