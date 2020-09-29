import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import Backend from '../../containers/Backend/Layout';
import Auth from '../../containers/Auth/Layout';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

import * as actions from '../../store/actions';

import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        modal: false
    }

    render() {
        const storedToken = localStorage.getItem('token');
        const { children, auth: { data } } = this.props;

        if ((data && storedToken) || !storedToken) {
            $('#guard').fadeOut(3000);
            setTimeout(() => {
                $('#guard').remove();
            }, 2800);
        }

        const url = location.pathname;

        let content = null;
        if (url.includes('auth')) content = <Auth>{children}</Auth>;
        else if (url.includes('user') || url.includes('admin')) content = <Backend>{children}</Backend>;
        else content = <>
            <SideDrawer />
            <div id="main">
                <Toolbar />
                <main className="Content px-3 px-lg-0 w-100 bg-white min-vh-100" style={{ overflowX: 'hidden' }}>
                    {children}
                </main>
                <Footer />
            </div>
        </>;

        return content;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthLogout: () => dispatch(actions.authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);