import React from 'react';

import './Logo.css';

import Image from '../../../assets/images/Logo.jpg';
import Dark from '../../../assets/images/Logo.jpg';

export default ({ big, dark }) => (
    <div className="Logo mb-0 text-white" >
        {dark ?
            <img src={Dark} />
            :
            <img src={Image} style={{ width: 150, height: 109 }} />
        }
    </div>
);