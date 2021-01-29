import React, { Component } from 'react';
import { Redirect,withRouter} from "react-router-dom";
import Header from '../component/Header';
import Footer from '../component/Footer';


import AllServices from '../component/AllServices';

import {Helmet} from "react-helmet";



class AllServicesPage extends Component{
    
  render() {




  return (
    <React.Fragment>

    <Helmet>
    <meta charSet="utf-8" />
    <title>Services - Skyably IT Solution</title>

    <link rel="icon" type="image/png" href="/assets/img/favicon.png"/>
    
    <meta name="description" content="Skyably is a leading IT Solutions and Services 
    Company in Gorakhpur offering its expertise in custom application development, application management outsourcing, 
    consulting, and system integration. Our focus has always been on delivering proven business solutions that provide measurable results to our clients"/>
    <meta name="keywords" content="
    Website Designing in Gorakhpur,
    Website Development in Gorakhpur,
    Website Designing Company in Gorakhpur,
    Website Development Company in Gorakhpur,
    Software Development Company in Gorakhpur,
    Software Development in Gorakhpur,
    Ecommerce Website Portal in Gorakhpur,
    Ecommerce Website Development in Gorakhpur,
    Mobile App Developer in Gorakhpur,
    Mobile App Development in Gorakhpur,
    Android App Developer in Gorakhpur,
    Android App Development in Gorakhpur,
    Mobile App Developer Company in Gorakhpur,
    Mobile App Development Company in Gorakhpur,
    Android App Developer Company in Gorakhpur,
    Android App Development Company in Gorakhpur,
    Digital Promotion Company in Gorakhpur,
    Digital Promotion Agency in Gorakhpur,
    Facebook Promotion Company in Gorakhpur,
    Facebook Promotion Agency in Gorakhpur,
    Facebook Management Company in Gorakhpur,
    Facebook Management Agency in Gorakhpur"/>
    <meta name="author" content="Skyably IT Solution"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
    
    </Helmet>
    


    <Header/>
  
 


    <AllServices/>

   <Footer/>

    </React.Fragment>
   );
}

}

export default withRouter(AllServicesPage);
