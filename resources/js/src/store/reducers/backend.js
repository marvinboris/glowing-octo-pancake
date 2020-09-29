import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    dashboard: {
        loading: false,
        error: null
    },
    canal: {
        loading: false,
        error: null
    },
    attendanceReport: {
        loading: false,
        error: null
    },
    customers: {
        loading: false,
        error: null
    },
    companies: {
        loading: false,
        error: null
    },
    countries: {
        loading: false,
        error: null
    },
    cities: {
        loading: false,
        error: null
    },
    agencies: {
        loading: false,
        error: null
    },
    employees: {
        loading: false,
        error: null
    },
    eventTypes: {
        loading: false,
        error: null
    },
    jobs: {
        loading: false,
        error: null
    },
    priorities: {
        loading: false,
        error: null
    },
    messages: {
        loading: false,
        error: null
    },
    chat: {
        loading: false,
        error: null
    },
};

const dashboardReset = (state, action) => updateObject(state, { dashboard: initialState.dashboard });
const dashboardStart = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: true, message: null }) });
const dashboardSuccess = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, error: null, ...action }) });
const dashboardFail = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, ...action }) });

const canalReset = (state, action) => updateObject(state, { canal: initialState.canal });
const canalStart = (state, action) => updateObject(state, { canal: updateObject(state.canal, { loading: true, message: null }) });
const canalSuccess = (state, action) => updateObject(state, { canal: updateObject(state.canal, { loading: false, error: null, ...action }) });
const canalFail = (state, action) => updateObject(state, { canal: updateObject(state.canal, { loading: false, ...action }) });

const attendanceReportReset = (state, action) => updateObject(state, { attendanceReport: initialState.attendanceReport });
const attendanceReportStart = (state, action) => updateObject(state, { attendanceReport: updateObject(state.attendanceReport, { loading: true, message: null }) });
const attendanceReportSuccess = (state, action) => updateObject(state, { attendanceReport: updateObject(state.attendanceReport, { loading: false, error: null, ...action }) });
const attendanceReportFail = (state, action) => updateObject(state, { attendanceReport: updateObject(state.attendanceReport, { loading: false, ...action }) });

const customersReset = (state, action) => updateObject(state, { customers: initialState.customers });
const customersStart = (state, action) => updateObject(state, { customers: updateObject(state.customers, { loading: true, message: null }) });
const customersSuccess = (state, action) => updateObject(state, { customers: updateObject(state.customers, { loading: false, error: null, ...action }) });
const customersFail = (state, action) => updateObject(state, { customers: updateObject(state.customers, { loading: false, ...action }) });

const companiesReset = (state, action) => updateObject(state, { companies: initialState.companies });
const companiesStart = (state, action) => updateObject(state, { companies: updateObject(state.companies, { loading: true, message: null }) });
const companiesSuccess = (state, action) => updateObject(state, { companies: updateObject(state.companies, { loading: false, error: null, ...action }) });
const companiesFail = (state, action) => updateObject(state, { companies: updateObject(state.companies, { loading: false, ...action }) });

const countriesReset = (state, action) => updateObject(state, { countries: initialState.countries });
const countriesStart = (state, action) => updateObject(state, { countries: updateObject(state.countries, { loading: true, message: null }) });
const countriesSuccess = (state, action) => updateObject(state, { countries: updateObject(state.countries, { loading: false, error: null, ...action }) });
const countriesFail = (state, action) => updateObject(state, { countries: updateObject(state.countries, { loading: false, ...action }) });

const citiesReset = (state, action) => updateObject(state, { cities: initialState.cities });
const citiesStart = (state, action) => updateObject(state, { cities: updateObject(state.cities, { loading: true, message: null }) });
const citiesSuccess = (state, action) => updateObject(state, { cities: updateObject(state.cities, { loading: false, error: null, ...action }) });
const citiesFail = (state, action) => updateObject(state, { cities: updateObject(state.cities, { loading: false, ...action }) });

const agenciesReset = (state, action) => updateObject(state, { agencies: initialState.agencies });
const agenciesStart = (state, action) => updateObject(state, { agencies: updateObject(state.agencies, { loading: true, message: null }) });
const agenciesSuccess = (state, action) => updateObject(state, { agencies: updateObject(state.agencies, { loading: false, error: null, ...action }) });
const agenciesFail = (state, action) => updateObject(state, { agencies: updateObject(state.agencies, { loading: false, ...action }) });

const employeesReset = (state, action) => updateObject(state, { employees: initialState.employees });
const employeesStart = (state, action) => updateObject(state, { employees: updateObject(state.employees, { loading: true, message: null }) });
const employeesSuccess = (state, action) => updateObject(state, { employees: updateObject(state.employees, { loading: false, error: null, ...action }) });
const employeesFail = (state, action) => updateObject(state, { employees: updateObject(state.employees, { loading: false, ...action }) });

const eventTypesReset = (state, action) => updateObject(state, { eventTypes: initialState.eventTypes });
const eventTypesStart = (state, action) => updateObject(state, { eventTypes: updateObject(state.eventTypes, { loading: true, message: null }) });
const eventTypesSuccess = (state, action) => updateObject(state, { eventTypes: updateObject(state.eventTypes, { loading: false, error: null, ...action }) });
const eventTypesFail = (state, action) => updateObject(state, { eventTypes: updateObject(state.eventTypes, { loading: false, ...action }) });

const jobsReset = (state, action) => updateObject(state, { jobs: initialState.jobs });
const jobsStart = (state, action) => updateObject(state, { jobs: updateObject(state.jobs, { loading: true, message: null }) });
const jobsSuccess = (state, action) => updateObject(state, { jobs: updateObject(state.jobs, { loading: false, error: null, ...action }) });
const jobsFail = (state, action) => updateObject(state, { jobs: updateObject(state.jobs, { loading: false, ...action }) });

const prioritiesReset = (state, action) => updateObject(state, { priorities: initialState.priorities });
const prioritiesStart = (state, action) => updateObject(state, { priorities: updateObject(state.priorities, { loading: true, message: null }) });
const prioritiesSuccess = (state, action) => updateObject(state, { priorities: updateObject(state.priorities, { loading: false, error: null, ...action }) });
const prioritiesFail = (state, action) => updateObject(state, { priorities: updateObject(state.priorities, { loading: false, ...action }) });

const messagesReset = (state, action) => updateObject(state, { messages: initialState.messages });
const messagesStart = (state, action) => updateObject(state, { messages: updateObject(state.messages, { loading: true, message: null }) });
const messagesSuccess = (state, action) => updateObject(state, { messages: updateObject(state.messages, { loading: false, error: null, ...action }) });
const messagesFail = (state, action) => updateObject(state, { messages: updateObject(state.messages, { loading: false, ...action }) });

const chatReset = (state, action) => updateObject(state, { chat: initialState.chat });
const chatStart = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: true, message: null }) });
const chatSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null, ...action }) });
const chatMessageSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null }) });
const chatFail = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DASHBOARD_RESET: return dashboardReset(state, action);
        case actionTypes.DASHBOARD_START: return dashboardStart(state, action);
        case actionTypes.DASHBOARD_SUCCESS: return dashboardSuccess(state, action);
        case actionTypes.DASHBOARD_FAIL: return dashboardFail(state, action);

        case actionTypes.CANAL_RESET: return canalReset(state, action);
        case actionTypes.CANAL_START: return canalStart(state, action);
        case actionTypes.CANAL_SUCCESS: return canalSuccess(state, action);
        case actionTypes.CANAL_FAIL: return canalFail(state, action);

        case actionTypes.CUSTOMERS_RESET: return customersReset(state, action);
        case actionTypes.CUSTOMERS_START: return customersStart(state, action);
        case actionTypes.CUSTOMERS_SUCCESS: return customersSuccess(state, action);
        case actionTypes.CUSTOMERS_FAIL: return customersFail(state, action);

        case actionTypes.COMPANIES_RESET: return companiesReset(state, action);
        case actionTypes.COMPANIES_START: return companiesStart(state, action);
        case actionTypes.COMPANIES_SUCCESS: return companiesSuccess(state, action);
        case actionTypes.COMPANIES_FAIL: return companiesFail(state, action);

        case actionTypes.COUNTRIES_RESET: return countriesReset(state, action);
        case actionTypes.COUNTRIES_START: return countriesStart(state, action);
        case actionTypes.COUNTRIES_SUCCESS: return countriesSuccess(state, action);
        case actionTypes.COUNTRIES_FAIL: return countriesFail(state, action);

        case actionTypes.CITIES_RESET: return citiesReset(state, action);
        case actionTypes.CITIES_START: return citiesStart(state, action);
        case actionTypes.CITIES_SUCCESS: return citiesSuccess(state, action);
        case actionTypes.CITIES_FAIL: return citiesFail(state, action);

        case actionTypes.AGENCIES_RESET: return agenciesReset(state, action);
        case actionTypes.AGENCIES_START: return agenciesStart(state, action);
        case actionTypes.AGENCIES_SUCCESS: return agenciesSuccess(state, action);
        case actionTypes.AGENCIES_FAIL: return agenciesFail(state, action);

        case actionTypes.EMPLOYEES_RESET: return employeesReset(state, action);
        case actionTypes.EMPLOYEES_START: return employeesStart(state, action);
        case actionTypes.EMPLOYEES_SUCCESS: return employeesSuccess(state, action);
        case actionTypes.EMPLOYEES_FAIL: return employeesFail(state, action);

        case actionTypes.EVENT_TYPES_RESET: return eventTypesReset(state, action);
        case actionTypes.EVENT_TYPES_START: return eventTypesStart(state, action);
        case actionTypes.EVENT_TYPES_SUCCESS: return eventTypesSuccess(state, action);
        case actionTypes.EVENT_TYPES_FAIL: return eventTypesFail(state, action);

        case actionTypes.JOBS_RESET: return jobsReset(state, action);
        case actionTypes.JOBS_START: return jobsStart(state, action);
        case actionTypes.JOBS_SUCCESS: return jobsSuccess(state, action);
        case actionTypes.JOBS_FAIL: return jobsFail(state, action);

        case actionTypes.PRIORITIES_RESET: return prioritiesReset(state, action);
        case actionTypes.PRIORITIES_START: return prioritiesStart(state, action);
        case actionTypes.PRIORITIES_SUCCESS: return prioritiesSuccess(state, action);
        case actionTypes.PRIORITIES_FAIL: return prioritiesFail(state, action);

        case actionTypes.ATTENDANCE_REPORT_RESET: return attendanceReportReset(state, action);
        case actionTypes.ATTENDANCE_REPORT_START: return attendanceReportStart(state, action);
        case actionTypes.ATTENDANCE_REPORT_SUCCESS: return attendanceReportSuccess(state, action);
        case actionTypes.ATTENDANCE_REPORT_FAIL: return attendanceReportFail(state, action);

        case actionTypes.MESSAGES_RESET: return messagesReset(state, action);
        case actionTypes.MESSAGES_START: return messagesStart(state, action);
        case actionTypes.MESSAGES_SUCCESS: return messagesSuccess(state, action);
        case actionTypes.MESSAGES_FAIL: return messagesFail(state, action);

        case actionTypes.CHAT_RESET: return chatReset(state, action);
        case actionTypes.CHAT_START: return chatStart(state, action);
        case actionTypes.CHAT_SUCCESS: return chatSuccess(state, action);
        case actionTypes.CHAT_MESSAGE_SUCCESS: return chatMessageSuccess(state, action);
        case actionTypes.CHAT_FAIL: return chatFail(state, action);

        default: return state;
    }
};