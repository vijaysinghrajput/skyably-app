import React, { Component } from 'react';
import { Switch, Route, Router, BrowserRouter, withRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import SplshImage from './component/SplshImage';

import HomePage from './Page/HomePage';
import AboutUsPage from './Page/AboutUsPage';
import Dashboard from './Page/dashboardPage';
import PrivacyPage from './Page/PrivacyPage';
import LoginPage from './Page/LoginPage';
import CreateAccount from './Page/CreacteAccountPage';

import NotFoundPage from './Page/NotFoundPage';

import Cookies from 'universal-cookie';

const cookies = new Cookies()


class App extends Component {
  constructor(props) {

    super(props);

    this.state = {

    }


  }


  async componentDidMount() {

    cookies.set("visited", true, { maxAge: 999999999999 });

  }

  render() {
    return (

      <BrowserRouter>

        <LastLocationProvider>


          <Switch>

            <Route exact path="/" >
              <HomePage />
            </Route>

            <Route exact path="/about" >
              <AboutUsPage />
            </Route>

            <Route exact path="/Dashboard" >
              <Dashboard />
            </Route>

            <Route exact path="/Login" >
              <LoginPage />
            </Route>

            <Route exact path="/CreateAccount" >
              <CreateAccount />
            </Route>

            <Route exact path="/privacy" >
              <PrivacyPage />
            </Route>

            <Route path='*' exact={true}>
              <NotFoundPage />
            </Route>


          </Switch>

        </LastLocationProvider>

      </BrowserRouter>

    );
  }

}

export default App;
