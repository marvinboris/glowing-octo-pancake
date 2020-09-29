import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEdit, faBook, faFileImage, faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import { convertDate, convertTime } from '../../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ city }) => {
    return <>
        <Row className="m-0 p-3 rounded bg-green-20">
            <Col xs={12}>
                <div className="text-green text-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                        City details
                    </div>
                <hr />
            </Col>
            <I label="Company">{city.company}</I>
            <I label="Country">{city.country}</I>
            <I label="Name">{city.name}</I>
            <I label="Creation Date">{convertDate(city.created_at)}</I>
        </Row>
    </>;
}