import React, { Component } from 'react';
import SplshImage from './SplshImage';

import { Redirect ,withRouter} from 'react-router-dom';
import URL from '../URL'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class PopupForm extends Component{
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
        <section>
		
		<div class="modal fade dir-pop-com" id="list-quo" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header dir-pop-head">
						<button type="button" class="close" data-dismiss="modal">×</button>
						<h4 class="modal-title">Get a Quotes</h4>
						<i class="fa fa-pencil dir-pop-head-icon" aria-hidden="true"></i>
					</div>
					<div class="modal-body dir-pop-body">
						<form method="post" class="form-horizontal">
							
							<div class="form-group has-feedback ak-field">
								<label class="col-md-4 control-label">Full Name *</label>
								<div class="col-md-8">
									<input type="text" class="form-control" name="fname" placeholder="" required/> </div>
							</div>
							
							<div class="form-group has-feedback ak-field">
								<label class="col-md-4 control-label">Mobile</label>
								<div class="col-md-8">
									<input type="text" class="form-control" name="mobile" placeholder=""/> </div>
							</div>
							
							<div class="form-group has-feedback ak-field">
								<label class="col-md-4 control-label">Email</label>
								<div class="col-md-8">
									<input type="text" class="form-control" name="email" placeholder=""/> </div>
							</div>
							
							<div class="form-group has-feedback ak-field">
								<label class="col-md-4 control-label">Message</label>
								<div class="col-md-8 get-quo">
									<textarea class="form-control"></textarea>
								</div>
							</div>
							
							<div class="form-group has-feedback ak-field">
								<div class="col-md-6 col-md-offset-4">
									<input type="submit" value="SUBMIT" class="pop-btn"/> </div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		
		
		<div class="req-pop">
			<div class="req-pop-in">
				<div class="req-pop-lhs">
					<h4>Why should I fill this?</h4>
					<ul>
						<li>
							<img src="images/icon/d1.png" alt=""/>
							<p>Receive advertiser details instantly</p>
						</li>
						<li>
							<img src="images/icon/d2.png" alt=""/>
							<p>Discover new projects/properties to <br/>your liking via email/sms</p>
						</li>
						<li>
							<img src="images/icon/d3.png" alt=""/>
							<p>Our experts will get in touch to help<br/> you out when required</p>
						</li>
					</ul>
				</div>
				<div class="req-pop-rhs">
					<i class="fa fa-times req-pop-clo"></i>
					
					<div class="req-pop-sec-1">
						<h2>What you looking for?</h2>
						<p>Choose your category what you looking for</p>
						<div class="v8-chbox">
							<form>
								<ul>
									<li>
									  <input type="checkbox" id="look-1"/>
									  <label for="look-1">Hotel room booking</label>
									</li>
								
								</ul>
							</form>
						</div>
						<span class="req-nxt req-nxt-1">Next</span>
					</div>
					
					
					<div class="req-pop-sec-2">
						<h2>Fill this form</h2>
						<p>Choose your category what you looking for</p>
						<div class="v8-inputs">
							<form>
								<ul>
									<li>
									  <input type="textbox" placeholder="Enter your name" required/>
									</li>
									<li>
									  <input type="textbox" placeholder="Enter your email"/>
									</li>
									<li>
									  <input type="textbox" placeholder="Enter your mobile number"/>
									</li>
									<li>
									  <span class="rer-sub-btn">Submit</span>
									</li>
								</ul>
							</form>
						</div>
						<span class="req-nxt req-nxt-1">Next</span>
					</div>
					
					
					<div class="req-pop-sec-3">
						<div>
							<h2>Success!</h2>
							<p>Thanks for contacting us! We will get in touch with you shortly</p>
							<img src="images/thank-you.png"/>
						</div>
					</div>
					
				</div>
			</div>
		</div>
				
	</section>
      </React.Fragment>);
  

}

}

export default withRouter(PopupForm);