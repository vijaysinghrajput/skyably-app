import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../component/Header';
import Footer from '../component/Footer';

class privacyPage extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <Header />

                <Footer />
            </>
        )
    }
}

export default withRouter(privacyPage);