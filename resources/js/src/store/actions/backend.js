import * as actionTypes from './actionTypes';

const prefix = '/api/';

export const dashboardReset = () => ({ type: actionTypes.DASHBOARD_RESET });
const dashboardStart = () => ({ type: actionTypes.DASHBOARD_START });
const dashboardSuccess = data => ({ type: actionTypes.DASHBOARD_SUCCESS, ...data });
const dashboardFail = error => ({ type: actionTypes.DASHBOARD_FAIL, error });
export const getUserDashboard = () => async dispatch => {
    dispatch(dashboardStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/dashboard', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(dashboardSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(dashboardFail(error));
    }
};

export const getAdminDashboard = () => async dispatch => {
    dispatch(dashboardStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/dashboard', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(dashboardSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(dashboardFail(error));
    }
};



export const attendanceReportReset = () => ({ type: actionTypes.ATTENDANCE_REPORT_RESET });
const attendanceReportStart = () => ({ type: actionTypes.ATTENDANCE_REPORT_START });
const attendanceReportSuccess = data => ({ type: actionTypes.ATTENDANCE_REPORT_SUCCESS, ...data });
const attendanceReportFail = error => ({ type: actionTypes.ATTENDANCE_REPORT_FAIL, error });
export const getAttendanceReport = () => async dispatch => {
    dispatch(attendanceReportStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/attendance-report', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(attendanceReportSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(attendanceReportFail(error));
    }
};

export const postClock = () => async dispatch => {
    dispatch(attendanceReportStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/attendance-report/clock', {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(attendanceReportSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(attendanceReportFail(error));
    }
};



export const resetCustomers = () => ({ type: actionTypes.CUSTOMERS_RESET });
const customersStart = () => ({ type: actionTypes.CUSTOMERS_START });
const customersSuccess = data => ({ type: actionTypes.CUSTOMERS_SUCCESS, ...data });
const customersFail = error => ({ type: actionTypes.CUSTOMERS_FAIL, error });
export const getCustomers = (page = 1, show = 10, search = '') => async dispatch => {
    dispatch(customersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/customers?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const getCustomersInfo = () => async dispatch => {
    dispatch(customersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/customers/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const postCustomers = data => async dispatch => {
    dispatch(customersStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix}user/customers`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const patchCustomers = (id, data) => async dispatch => {
    dispatch(customersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/customers/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const deleteCustomers = id => async dispatch => {
    dispatch(customersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/customers/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};



export const agenciesReset = () => ({ type: actionTypes.AGENCIES_RESET });
const agenciesStart = () => ({ type: actionTypes.AGENCIES_START });
const agenciesSuccess = data => ({ type: actionTypes.AGENCIES_SUCCESS, ...data });
const agenciesFail = error => ({ type: actionTypes.AGENCIES_FAIL, error });
export const getAgencies = () => async dispatch => {
    dispatch(agenciesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/agencies', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(agenciesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(agenciesFail(error));
    }
};

export const postAgencies = data => async dispatch => {
    dispatch(agenciesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'admin/agencies', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(agenciesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(agenciesFail(error));
    }
};

export const patchAgencies = (id, data) => async dispatch => {
    dispatch(agenciesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/agencies/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(agenciesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(agenciesFail(error));
    }
};

export const deleteAgencies = id => async dispatch => {
    dispatch(agenciesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/agencies/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(agenciesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(agenciesFail(error));
    }
};



export const employeesReset = () => ({ type: actionTypes.EMPLOYEES_RESET });
const employeesStart = () => ({ type: actionTypes.EMPLOYEES_START });
const employeesSuccess = data => ({ type: actionTypes.EMPLOYEES_SUCCESS, ...data });
const employeesFail = error => ({ type: actionTypes.EMPLOYEES_FAIL, error });
export const getEmployees = () => async dispatch => {
    dispatch(employeesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/employees', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(employeesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(employeesFail(error));
    }
};

export const postEmployees = data => async dispatch => {
    dispatch(employeesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'admin/employees', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(employeesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(employeesFail(error));
    }
};

export const patchEmployees = (id, data) => async dispatch => {
    dispatch(employeesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/employees/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(employeesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(employeesFail(error));
    }
};

export const deleteEmployees = id => async dispatch => {
    dispatch(employeesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/employees/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(employeesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(employeesFail(error));
    }
};



export const companiesReset = () => ({ type: actionTypes.COMPANIES_RESET });
const companiesStart = () => ({ type: actionTypes.COMPANIES_START });
const companiesSuccess = data => ({ type: actionTypes.COMPANIES_SUCCESS, ...data });
const companiesFail = error => ({ type: actionTypes.COMPANIES_FAIL, error });
export const getCompanies = () => async dispatch => {
    dispatch(companiesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/companies', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(companiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(companiesFail(error));
    }
};

export const postCompanies = data => async dispatch => {
    dispatch(companiesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'admin/companies', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(companiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(companiesFail(error));
    }
};

export const patchCompanies = (id, data) => async dispatch => {
    dispatch(companiesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/companies/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(companiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(companiesFail(error));
    }
};

export const deleteCompanies = id => async dispatch => {
    dispatch(companiesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/companies/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(companiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(companiesFail(error));
    }
};



export const countriesReset = () => ({ type: actionTypes.COUNTRIES_RESET });
const countriesStart = () => ({ type: actionTypes.COMPANIES_START });
const countriesSuccess = data => ({ type: actionTypes.COUNTRIES_SUCCESS, ...data });
const countriesFail = error => ({ type: actionTypes.COUNTRIES_FAIL, error });
export const getCountries = () => async dispatch => {
    dispatch(countriesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/countries', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(countriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(countriesFail(error));
    }
};

export const postCountries = data => async dispatch => {
    dispatch(countriesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'admin/countries', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(countriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(countriesFail(error));
    }
};

export const patchCountries = (id, data) => async dispatch => {
    dispatch(countriesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/countries/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(countriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(countriesFail(error));
    }
};

export const deleteCountries = id => async dispatch => {
    dispatch(countriesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/countries/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(countriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(countriesFail(error));
    }
};



export const citiesReset = () => ({ type: actionTypes.CITIES_RESET });
const citiesStart = () => ({ type: actionTypes.CITIES_START });
const citiesSuccess = data => ({ type: actionTypes.CITIES_SUCCESS, ...data });
const citiesFail = error => ({ type: actionTypes.CITIES_FAIL, error });
export const getCities = () => async dispatch => {
    dispatch(citiesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/cities', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(citiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(citiesFail(error));
    }
};

export const postCities = data => async dispatch => {
    dispatch(citiesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'admin/cities', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(citiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(citiesFail(error));
    }
};

export const patchCities = (id, data) => async dispatch => {
    dispatch(citiesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/cities/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(citiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(citiesFail(error));
    }
};

export const deleteCities = id => async dispatch => {
    dispatch(citiesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/cities/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(citiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(citiesFail(error));
    }
};



export const eventTypesReset = () => ({ type: actionTypes.EVENT_TYPES_RESET });
const eventTypesStart = () => ({ type: actionTypes.EVENT_TYPES_START });
const eventTypesSuccess = data => ({ type: actionTypes.EVENT_TYPES_SUCCESS, ...data });
const eventTypesFail = error => ({ type: actionTypes.EVENT_TYPES_FAIL, error });
export const getEventTypes = () => async dispatch => {
    dispatch(eventTypesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/event-types', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(eventTypesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(eventTypesFail(error));
    }
};

export const postEventTypes = data => async dispatch => {
    dispatch(eventTypesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'admin/event-types', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(eventTypesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(eventTypesFail(error));
    }
};

export const patchEventTypes = (id, data) => async dispatch => {
    dispatch(eventTypesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/event-types/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(eventTypesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(eventTypesFail(error));
    }
};

export const deleteEventTypes = id => async dispatch => {
    dispatch(eventTypesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/event-types/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(eventTypesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(eventTypesFail(error));
    }
};



export const jobsReset = () => ({ type: actionTypes.JOBS_RESET });
const jobsStart = () => ({ type: actionTypes.JOBS_START });
const jobsSuccess = data => ({ type: actionTypes.JOBS_SUCCESS, ...data });
const jobsFail = error => ({ type: actionTypes.JOBS_FAIL, error });
export const getJobs = () => async dispatch => {
    dispatch(jobsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/jobs', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(jobsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(jobsFail(error));
    }
};

export const postJobs = data => async dispatch => {
    dispatch(jobsStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'admin/jobs', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(jobsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(jobsFail(error));
    }
};

export const patchJobs = (id, data) => async dispatch => {
    dispatch(jobsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/jobs/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(jobsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(jobsFail(error));
    }
};

export const deleteJobs = id => async dispatch => {
    dispatch(jobsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/jobs/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(jobsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(jobsFail(error));
    }
};



export const prioritiesReset = () => ({ type: actionTypes.PRIORITIES_RESET });
const prioritiesStart = () => ({ type: actionTypes.PRIORITIES_START });
const prioritiesSuccess = data => ({ type: actionTypes.PRIORITIES_SUCCESS, ...data });
const prioritiesFail = error => ({ type: actionTypes.PRIORITIES_FAIL, error });
export const getPriorities = () => async dispatch => {
    dispatch(prioritiesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/priorities', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(prioritiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(prioritiesFail(error));
    }
};

export const postPriorities = data => async dispatch => {
    dispatch(prioritiesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'admin/priorities', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(prioritiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(prioritiesFail(error));
    }
};

export const patchPriorities = (id, data) => async dispatch => {
    dispatch(prioritiesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/priorities/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(prioritiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(prioritiesFail(error));
    }
};

export const deletePriorities = id => async dispatch => {
    dispatch(prioritiesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'admin/priorities/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(prioritiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(prioritiesFail(error));
    }
};



export const messagesReset = () => ({ type: actionTypes.MESSAGES_RESET });
const messagesStart = () => ({ type: actionTypes.MESSAGES_START });
const messagesSuccess = data => ({ type: actionTypes.MESSAGES_SUCCESS, ...data });
const messagesFail = error => ({ type: actionTypes.MESSAGES_FAIL, error });
export const getMessages = () => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/messages', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const getInboxMessages = () => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/messages/inbox', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const getSentMessages = () => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/messages/sent', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const getArchiveMessages = () => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/messages/archive', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const postMessages = data => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/messages', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const patchMessages = (id, data) => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/messages/' + id, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const deleteMessages = id => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/messages/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};



export const resetCanal = () => ({ type: actionTypes.CANAL_RESET });
const canalStart = () => ({ type: actionTypes.CANAL_START });
const canalSuccess = data => ({ type: actionTypes.CANAL_SUCCESS, ...data });
const canalFail = error => ({ type: actionTypes.CANAL_FAIL, error });
export const getFormulae = (page = 1, show = 10, search = '') => async dispatch => {
    dispatch(canalStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/canal/formulae?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const postFormulae = data => async dispatch => {
    dispatch(canalStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix}user/canal/formulae`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const patchFormulae = (id, data) => async dispatch => {
    dispatch(canalStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/canal/formulae/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const deleteFormulae = id => async dispatch => {
    dispatch(canalStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/canal/formulae/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const getSubscriptions = (page = 1, show = 10, search = '') => async dispatch => {
    dispatch(canalStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/canal/subscriptions?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const getSubscriptionsInfo = () => async dispatch => {
    dispatch(canalStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/canal/subscriptions/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const postSubscriptions = data => async dispatch => {
    dispatch(canalStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix}user/canal/subscriptions`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const patchSubscriptions = (id, data) => async dispatch => {
    dispatch(canalStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/canal/subscriptions/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const deleteSubscriptions = id => async dispatch => {
    dispatch(canalStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}user/canal/subscriptions/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};


// Chat
export const chatReset = () => ({ type: actionTypes.CHAT_RESET });
const chatStart = () => ({ type: actionTypes.CHAT_START });
const chatSuccess = data => ({ type: actionTypes.CHAT_SUCCESS, ...data });
const chatMessageSuccess = data => ({ type: actionTypes.CHAT_MESSAGE_SUCCESS, data });
const chatFail = error => ({ type: actionTypes.CHAT_FAIL, error });
export const getRequestsWithMessages = () => async dispatch => {
    dispatch(chatStart());
    const token = localStorage.getItem('token');
    try {
        const res = await fetch(prefix + 'chat/requests', {
            headers: {
                Authorization: token
            }
        });

        const resData = await res.json();

        dispatch(chatSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(chatFail(error));
    }
};

export const getRequestMessages = id => async dispatch => {
    const token = localStorage.getItem('token');
    try {
        const res = await fetch(prefix + 'chat/requests/' + id, {
            headers: {
                Authorization: token
            }
        });

        const resData = await res.json();

        dispatch(chatSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(chatFail(error));
    }
};

export const postChatSubmitMessage = (data, cb) => async dispatch => {
    const token = localStorage.getItem('token');
    try {
        const form = new FormData(data);
        const res = await fetch(prefix + 'chat/message', {
            method: 'POST',
            headers: {
                Authorization: token
            },
            body: form
        });

        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));

        dispatch(chatMessageSuccess(resData));
        cb();
    } catch (error) {
        console.log(error);
        dispatch(chatFail(error));
    }
};