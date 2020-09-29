import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEdit, faBook, faFileImage, faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import Download from '../../../../../components/Backend/UI/Download/Download';

import { convertDate } from '../../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ message }) => {
    const filesContent = message.files.filter(d => d).map(doc => {
        const arr1 = doc.split('.');
        const format = arr1[arr1.length - 1];

        const arr2 = doc.split('/');
        const arr3 = arr2[arr2.length - 1].split('.');
        const formatlessName = arr3.filter((n, i) => i < arr3.length - 1).join('.');


        let content;
        switch (format.toLowerCase()) {
            case 'pdf':
                content = <FontAwesomeIcon icon={faFilePdf} size="5x" className="text-border position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
                break;
            default:
                content = <div className="embed-responsive embed-responsive-1by1 position-absolute" style={{ background: 'url("' + doc + '") no-repeat center', backgroundSize: 'cover', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
                break;
        }

        return <Col xl={3} key={formatlessName + Math.random()} className="pr-0" style={{ minWidth: 100 }}>
            <a target="_blank" href={doc} className="rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1">
                <FontAwesomeIcon icon={faFilePdf} className="mr-2" />NID_45094M
                {content}
            </a>
            <Download link={doc} name={formatlessName + '.' + format}>
                <div className="text-uppercase text-truncate pt-3 text-darkblue">
                    {formatlessName}
                </div>
            </Download>
        </Col>
    });

    return <>
        <Row className="m-0 p-3 rounded bg-green-20">
            <Col xs={12}>
                <div className="text-green text-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                        Message info
                    </div>
                <hr />
            </Col>
            <I label="Sender">{message.sender}</I>
            <I label="Receiver">{message.receiver}</I>
            <I label="Creation Date">{convertDate(message.created_at)}</I>
            <I label="Object">{message.object}</I>
        </Row>

        <Row className="mt-4 mx-0 p-3 rounded bg-orange-20">
            <Col xs={12}>
                <div className="text-orange text-700 mb-2">
                    <FontAwesomeIcon icon={faBook} className="mr-2" fixedWidth />
                    Message files
                </div>
                <hr />
            </Col>
            <Col xs={12}>
                <Row>
                    {filesContent}
                </Row>
            </Col>
        </Row>

        <Row className="mt-4 mx-0 p-3 rounded bg-soft">
            <Col xs={12}>
                <div className="text-black text-700 mb-2">
                    <FontAwesomeIcon icon={faEdit} className="mr-2" fixedWidth />
                        Message content
                    </div>
                <hr />
            </Col>
            <Col xs={12}>
                <Row>
                    <Col xs={12} className="pb-3" dangerouslySetInnerHTML={{ __html: message.content }} />
                </Row>
            </Col>
        </Row>
    </>;
}