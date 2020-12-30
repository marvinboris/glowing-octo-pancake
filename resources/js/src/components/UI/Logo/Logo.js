import React from 'react';

import './Logo.css';

import Image from '../../../assets/images/unnamed.png';
import Dark from '../../../assets/images/Logo-Hosamine.png';

export default ({ big, dark }) => (
    <div className="Logo mb-0 text-white" >
        <img src={dark ? Dark : Image} style={big ? { height: 80 } : { height: 60 }} />
    </div>
);