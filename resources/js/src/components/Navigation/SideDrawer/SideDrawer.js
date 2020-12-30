import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css';

export default ({ close, show = true }) => (
    <div>
        {/* <Backdrop clicked={close} show={show} /> */}
        <div className="SideDrawer bg-green text-white d-flex flex-column" onClick={close}>
            <div className="py-5 text-center">
                <Logo big dark />
            </div>

            <div className="flex-fill d-flex flex-column">
                <nav>
                    <NavigationItems />
                </nav>

                <div className="mt-auto">
                    <div className="mt-auto text-center">
                        <div className="pb-3">
                            Contact Information
                        </div>

                        <div className="pb-3">
                            Avada Cleaning<br />
                            1234 Avada Avenue<br />
                            Avadaville, 11221
                        </div>

                        <div className="pb-3">
                            Call: 237.671.62.62.62
                        </div>

                        <div>
                            contact@hosamine.net
                        </div>
                    </div>

                    <div className="py-5 d-flex justify-content-around px-3">
                        <a className="text-white text-decoration-none" href="#"><FontAwesomeIcon size="lg" icon={faFacebook} /></a>
                        <a className="text-white text-decoration-none" href="#"><FontAwesomeIcon size="lg" icon={faTwitter} /></a>
                        <a className="text-white text-decoration-none" href="#"><FontAwesomeIcon size="lg" icon={faInstagram} /></a>
                        <a className="text-white text-decoration-none" href="#"><FontAwesomeIcon size="lg" icon={faYoutube} /></a>
                        <a className="text-white text-decoration-none" href="#"><FontAwesomeIcon size="lg" icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);