import React, { Component } from 'react';
import { Redirect, withRouter } from "react-router-dom";

import Header from '../component/MinHeader';
import Footer from '../component/Footer';
import AddProperty from '../component/AddProperty';

export default class AddPropertyPage extends Component {

    constructor(props) {

        super(props);

        this.state = {
            UserID: null,
        }
    }

    componentDidMount() {

    }

    handleNext = (Routation) => {
        this.props.history.push(Routation);
    }

    render() {
        return (
            <>
                <Header />
                <AddProperty />
                <Footer />
            </>
        )
    }
}