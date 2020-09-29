import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEdit, faBook, faFileImage, faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import Download from '../../../../../components/Backend/UI/Download/Download';
import { convertDate, convertTime } from '../../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ employee }) => <>
    <Row className="m-0 p-3 rounded bg-green-20">
        <Col xs={12}>
            <div className="text-green text-700 mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                Employee details
            </div>
            <hr />
        </Col>
        <I label="Branch">{employee.agency}</I>
        <I label="Name">{`${employee.first_name} ${employee.last_name}`}</I>
        <I label="Job">{employee.job}</I>
        <I label="E-Mail Address">{employee.email}</I>
        <I label="Phone">{employee.phone}</I>
        <I label="Country">{employee.country}</I>
        <I label="Hired on">{convertDate(employee.hired_on)}</I>
        <I label="Last login">{convertDate(employee.last_login)}</I>
    </Row>
</>;