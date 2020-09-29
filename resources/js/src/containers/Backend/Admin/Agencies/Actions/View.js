import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEdit, faBook, faFileImage, faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import { convertDate, convertTime } from '../../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ agency }) => {
    return <>
        <Row className="m-0 p-3 rounded bg-green-20">
            <Col xs={12}>
                <div className="text-green text-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                        Branch details
                    </div>
                <hr />
            </Col>
            <I label="Company">{agency.company}</I>
            <I label="Country">{agency.country}</I>
            <I label="City">{agency.city}</I>
            <I label="Name">{agency.name}</I>
            <I label="Radius in meters">{agency.radius}</I>
            <I label="Latitude">{agency.latitude}</I>
            <I label="Longitude">{agency.longitude}</I>
            <I label="Creation Date">{convertDate(agency.created_at)}</I>
        </Row>
    </>;
}