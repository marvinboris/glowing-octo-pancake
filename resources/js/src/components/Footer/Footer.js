import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import FooterBlock from './FooterBlock/FooterBlock';

import './Footer.css';

const footer = () => (
    <div className="Footer bg-blue text-white py-4">
        <div className="container d-flex justify-content-between align-items-center">
            <div>© Copyrights 2020 <span className="text-green text-700">Briluce Developers</span>. All rights reserved.</div>

            <div>
                <FontAwesomeIcon icon={faFacebook} className="mx-1" />
                <FontAwesomeIcon icon={faTwitter} className="mx-1" />
                <FontAwesomeIcon icon={faInstagram} className="mx-1" />
                <FontAwesomeIcon icon={faYoutube} className="mx-1" />
                <FontAwesomeIcon icon={faLinkedinIn} className="mx-1" />
            </div>
        </div>
    </div>
);

export default footer;
