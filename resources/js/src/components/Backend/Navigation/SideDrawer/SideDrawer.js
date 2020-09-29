import React from 'react';
import { Col, Badge, ButtonGroup, Button, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserTie, faCalendarAlt, faEnvelope, faTasks, faCog, faEdit, faComments, faBriefcase, faBell, faBuilding, faCalendarWeek, faUserTag, faLayerGroup, faFlag, faCity, faCodeBranch, faBox, faBoxOpen, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import SideDrawerItem from './SideDrawerItem/SideDrawerItem';

import { convertDate } from '../../../../shared/utility';

import './SideDrawer.css';

const roles = {
    user: 'System User',
    admin: 'Administrator',
};

export default ({ data, role = 'user', messages = [], tasks = [], toggle, isOpen, selectItem, selectedItem }) => {
    let { first_name, last_name, name, photo, job, hired_on } = data;

    if (!name) name = first_name + ' ' + last_name;
    if (!photo) photo = "https://placehold.it/100x100";
    if (!job) job = {};

    let addOns = null;
    let sideDrawerItems = null;
    switch (role) {
        case 'user':
            addOns = <div className="text-center">
                <div className="text-soft">{job.name}</div>
            </div>;
            sideDrawerItems = <>
                <SideDrawerItem id="Tableau de bord" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faTachometerAlt} href="/user/dashboard">Tableau de bord</SideDrawerItem>
                <SideDrawerItem id="Clients" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faUserTie} dropdown path="/user/customers" items={[
                    { link: '/user/customers/add', text: 'Ajouter un client' },
                    { link: '/user/customers/', text: 'Liste des clients' },
                    { link: '/user/customers/categories/add', text: 'Ajouter une catégorie' },
                    { link: '/user/customers/categories', text: 'Liste des catégories' },
                ]}>Clients</SideDrawerItem>
                <SideDrawerItem id="Services Canal+" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faBoxOpen} dropdown path="/user/canal" items={[
                    { link: '/user/canal/formulae', text: 'Liste des formules' },
                    { link: '/user/canal/subscriptions', text: 'Gestion Abonnements' },
                    { link: '/user/canal/subscriptions/add', text: 'Reabonnements' },
                    { link: '/user/canal/case', text: 'Rapport Caisse Canal+' },
                ]}>Services Canal+</SideDrawerItem>
                <SideDrawerItem id="Services ENEO" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faTasks} href="/user/eneo">Services ENEO</SideDrawerItem>
                <SideDrawerItem id="Services Camwater" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faTasks} href="/user/cammwater">Services Camwater</SideDrawerItem>
                <SideDrawerItem id="Dépenses" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faMoneyBillWaveAlt} dropdown path="/user/expenses" items={[
                    { link: '/user/expenses', text: 'All' },
                    { link: '/user/expenses/inbox', text: 'Inbox' },
                    { link: '/user/expenses/sent', text: 'Sent' },
                    { link: '/user/expenses/archive', text: 'Archive' },
                ]}>Dépenses</SideDrawerItem>
                <SideDrawerItem id="Notifications" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faTasks} href="/user/notifications">
                    Notifications{' '}
                    <Badge color="orange" className="position-relative rounded-circle text-x-small text-700 d-inline-flex justify-content-center align-items-center" style={{ width: 18, height: 18, top: -7 }}><b className="text-white">{tasks.length}</b></Badge>
                </SideDrawerItem>
                <SideDrawerItem id="Réglages" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faCog} dropdown path="/user/settings" items={[
                    { link: '/user/settings/cms', text: 'CMS' },
                    { link: '/user/settings/language', text: 'Language Settings' },
                ]}>Réglages</SideDrawerItem>
            </>;
            break;

        case 'admin':
            sideDrawerItems = <>
                <SideDrawerItem id="Dashboard" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faTachometerAlt} href="/admin/dashboard">Dashboard</SideDrawerItem>
                <SideDrawerItem id="Companies" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faBuilding} href="/admin/companies">Companies</SideDrawerItem>
                <SideDrawerItem id="Countries" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faFlag} href="/admin/countries">Countries</SideDrawerItem>
                <SideDrawerItem id="Cities" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faCity} href="/admin/cities">Cities</SideDrawerItem>
                <SideDrawerItem id="Branches" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faCodeBranch} href="/admin/agencies">Branches</SideDrawerItem>
                <SideDrawerItem id="Employees" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faUserTie} href="/admin/employees">Employees</SideDrawerItem>
                <SideDrawerItem id="Event Types" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faCalendarWeek} href="/admin/event-types">Event Types</SideDrawerItem>
                <SideDrawerItem id="Jobs" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faUserTag} href="/admin/jobs">Jobs</SideDrawerItem>
                <SideDrawerItem id="Priorities" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faLayerGroup} href="/admin/priorities">Priorities</SideDrawerItem>
                <SideDrawerItem id="Tasks" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faTasks} href="/admin/tasks">
                    Tasks{' '}
                    <Badge color="pink" className="position-relative rounded-circle text-x-small text-700 d-inline-flex justify-content-center align-items-center" style={{ width: 18, height: 18, top: -7 }}><b className="text-white">{tasks.length}</b></Badge>
                </SideDrawerItem>
                <SideDrawerItem id="Notifications" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faBell} href="/admin/notifications">Notifications</SideDrawerItem>
                <SideDrawerItem id="System Settings" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faCog} dropdown path="/admin/settings" items={[
                    { link: '/admin/settings/cms', text: 'CMS' },
                    { link: '/admin/settings/language', text: 'Language Settings' },
                ]}>System Settings</SideDrawerItem>
            </>;
            break;

        default:
            break;
    }

    return (
        <Collapse isOpen={isOpen} className="SideDrawer nav-left-sidebar bg-soft shadow-sm text-secondary position-fixed d-md-block" style={{ width: 280 }}>
            <div className="menu-list">
                <Col xs={12}>
                    <div className="py-3 d-flex align-items-center border-top border-bottom border-secondary-20">
                        <div className="px-2 position-relative d-flex justify-content-center">
                            <div className="border-3 border-orange d-flex justify-content-center align-items-center border rounded-circle" style={{ width: 68, height: 68 }}>
                                <img src={photo} className="rounded-circle" style={{ width: 54, height: 54, objectFit: 'cover', objectPosition: 'center' }} alt="User profile" />
                            </div>

                            {/* <FontAwesomeIcon icon={faEdit} className="position-absolute text-orange" size="2x" style={{ top: 0, right: 0 }} /> */}
                        </div>
                        <div className="p-0 h-100 flex-fill">
                            <div className="align-items-center m-0 h-100">
                                <Col xs={12} className="p-0 text-large">
                                    <strong>{name}</strong>
                                </Col>
                                {addOns}
                                <Col xs={12} className="p-0 text-green text-300 small">
                                    <FontAwesomeIcon fixedWidth icon={faCheckCircle} size="sm" className="mr-1" />{roles[role]}
                                </Col>
                            </div>
                        </div>
                    </div>
                </Col>
                <nav className="navbar navbar-expand navbar-dark py-0 px-0 mt-5">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 flex-column">
                            {sideDrawerItems}
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="backdrop w-100 bg-soft-50 position-fixed d-md-none" onClick={toggle} style={{ top: 70, zIndex: -1 }} />
        </Collapse>
    )
};