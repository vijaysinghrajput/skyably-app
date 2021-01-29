import React, { Component } from 'react';
import SplshImage from './SplshImage';

import { Redirect ,withRouter} from 'react-router-dom';
import URL from '../URL'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class HomeSlider extends Component{
  constructor(props) {

    super(props);

      this.state = {
        isloaded:false,
        UserID:null,
        sliderData:[]
      }
      this.splashScreen = this.splashScreen.bind(this);

  }

splashScreen()
{





}

  async componentDidMount()
  {

  
    

       fetch(URL+"/APP-API/Product/OffersBanner",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

       
       
      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      
         console.log('sliderData',responseJson)
  
      this.setState({sliderData:responseJson,isloaded:true});

      // this.fetcProductByCategory()
    
    
    })
   
     .catch((error) => {
       //  console.error(error);
          
     });

  }




  render() {



    return ( <React.Fragment>
    	<section class="dir3-home-head">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-sm-6 col-xs-12">
					<div class="dir-ho-tl">
						<ul>
							<li>
								<a href="index-1.html"><img src="images/logo.png" alt=""/> </a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 col-sm-6">
					<div class="dir-ho-tr">
						<ul>
							<li><a href="register.html">Register</a> </li>
							<li><a href="login.html">Sign In</a> </li>
							<li><a href="db-listing-add.html"><i class="fa fa-plus" aria-hidden="true"></i> Add Listing</a> </li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="container dir-ho-t-sp">
			<div class="row">
				<div class="dir-hr1 dir-cat-search">
					<div class="dir-ho-t-tit">
						<h1>Shree Lakshmi Info Services</h1> 
						<p>We Shree Lakshmi Info Services are engaged in Manufacturing and Supplying a superior quality range of Dona Making Machine, Paper Cup Blanks, Camphor Making Machine, Paper Cup Making Machine, Slipper Making Machine, etc.</p>
					</div>
			
				</div>
			</div>
		</div>
	</section>
      </React.Fragment>);
  

}

}

export default withRouter(HomeSlider);