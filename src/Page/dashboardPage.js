import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from "react-router-dom";

import Header from '../component/MinHeader';
import Footer from '../component/Footer';

import Dashboard from '../component/dashboard/dashboard';
import AddProperty from '../component/dashboard/addProperty';


import Contact from '../component/Contact';

import { Helmet } from "react-helmet";



class ContactPage extends Component {

    render() {

        return (
            <>
                <Header />
                <Dashboard />
                <Footer />
            </>
        );
    }

}

export default withRouter(ContactPage);
