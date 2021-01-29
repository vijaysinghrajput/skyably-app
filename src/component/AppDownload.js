import React, { Component } from 'react';
import SplshImage from './SplshImage';

import { Redirect ,withRouter} from 'react-router-dom';
import URL from '../URL'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class AppDownload extends Component{
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
        <section class="web-app com-padd">
		<div class="container">
			<div class="row">
				<div class="col-md-6 web-app-img"> <img src="images/mobile.png" alt="" /> </div>
				<div class="col-md-6 web-app-con">
					<h2>Looking for the Best Service Provider? <span>Get the App!</span></h2>
					<ul>
						<li><i class="fa fa-check" aria-hidden="true"></i> Find nearby listings</li>
						<li><i class="fa fa-check" aria-hidden="true"></i> Easy service enquiry</li>
						<li><i class="fa fa-check" aria-hidden="true"></i> Listing reviews and ratings</li>
						<li><i class="fa fa-check" aria-hidden="true"></i> Manage your listing, enquiry and reviews</li>
					</ul> <span>We'll send you a link, open it on your phone to download the app</span>
					<form>
						<ul>
							<li>
								<input type="text" placeholder="+01" /> </li>
							<li>
								<input type="number" placeholder="Enter mobile number" /> </li>
							<li>
								<input type="submit" value="Get App Link" /> </li>
						</ul>
					</form>
					<a href="#"><img src="images/android.png" alt="" /> </a>
					<a href="#"><img src="images/apple.png" alt="" /> </a>
				</div>
			</div>
		</div>
	</section>
      </React.Fragment>);
  

}

}

export default withRouter(AppDownload);