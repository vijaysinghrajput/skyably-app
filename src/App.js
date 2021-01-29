import React, { Component } from 'react';
import { Switch, Route, Router, BrowserRouter, withRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import SplshImage from './component/SplshImage';
import Theme from './component/Theme';

import HomePage from './Page/HomePage';
import AboutUsPage from './Page/AboutUsPage';
import ServicesPage from './Page/ServicesPage';
import AllServicesPage from './Page/AllServicesPage';

import NotFoundPage from './Page/NotFoundPage';


import Cookies from 'universal-cookie';

const cookies = new Cookies()

// hey bhaiya its working!!


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

          <SplshImage />




          <Switch>

            <Route exact path="/" >
              <HomePage />
            </Route>




            <Route exact path="/about" >
              <AboutUsPage />
            </Route>

            <Route exact path="/services/:servicesName" >
              <ServicesPage />
            </Route>

            <Route exact path="/service" >
              <AllServicesPage />
            </Route>

            <Route path='*' exact={true}>
              <NotFoundPage />
            </Route>


          </Switch>






          <Theme />
        </LastLocationProvider>

      </BrowserRouter>

    );
  }

}

export default App;
