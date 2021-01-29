import React, { Component } from 'react';
import { Redirect, Link, withRouter } from "react-router-dom";
import Header from '../component/Header';
import Footer from '../component/Footer';

import Dashboard from '../component/Profile';
import AddProperty from '../component/AddProperty';


import Contact from '../component/Contact';

import { Helmet } from "react-helmet";



class ContactPage extends Component {

    render() {

        return (
            <React.Fragment>

                <Header />

                <AddProperty />

                <Footer />

            </React.Fragment>
        );
    }

}

export default withRouter(ContactPage);
