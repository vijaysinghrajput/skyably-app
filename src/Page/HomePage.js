import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Header from '../component/Header';
import Footer from '../component/Footer';
import MinHeader from '../component/MinHeader';
import MainServices from '../component/Home/MainServices'
import RecentPost from '../component/RecentPost';
import Explore from '../component/Explore';
import { Helmet } from "react-helmet";



class HomePage extends Component {


  render() {
    return (
      <React.Fragment>

        <Header />
        <MainServices/>
        <RecentPost />
        <MinHeader nameclass={"bottomMenu hom3-top-menu"} />
        <Explore />
        <Footer />

      </React.Fragment>
    );
  }

}

export default withRouter(HomePage);
