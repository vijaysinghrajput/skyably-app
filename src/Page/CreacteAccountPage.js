import React, { Component } from 'react';
import { Redirect, withRouter } from "react-router-dom";

import Header from '../component/MinHeader';
import Footer from '../component/Footer';


import CreacteAccount from '../component/Creacte';
import Cookies from 'universal-cookie';
const cookies = new Cookies()


class LoginPage extends Component {
    constructor(props) {

        super(props);

        this.state = {
            UserHaveInCart: 0,
            loginRedirect: false
        }

    }

    async componentWillMount() {
        const UserID = await cookies.get('UserID');

        this.setState({ UserID: Number(UserID) })
    }


    render() {

        return (
            <React.Fragment>

                <Header />

                <CreacteAccount />

            </React.Fragment>
        );
    }

}

export default withRouter(LoginPage);
