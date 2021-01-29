
import React,{Component} from 'react';
import URL from '../URL'
import { withRouter } from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class TeamMember extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        UserID:null,
        productId:null,
        SaverTodayDetails:[],
        category:[]
      }


      this.handleNext = this.handleNext.bind(this);


    }
    handleNext(Routation)
    {
      this.props.history.push(Routation);
    }
  




    render() { 



    
    return (
        <section class="com-padd quic-book-ser-full">
		<div class="quic-book-ser">
			<div class="quic-book-ser-inn">
				<div class="quic-book-ser-left">
					<div class="land-com-form">
						<h2>Quick service request</h2>
						<form>
							<ul>
								<li>
									<div class="row">
										<div class="input-field col s12">
											<input type="text" class="validate" required/>
											<label>Name</label>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="input-field col s12">
											<input type="number" class="validate" required/>
											<label>Phone number</label>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="input-field col s12">
											<input type="email" class="validate" required/>
											<label>Email id</label>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="input-field col s12">
											<input type="text" id="select-category1" class="autocomplete auto-category"/>
											<label for="select-category1">Select your Service</label>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="input-field col s12">
											<input type="submit" value="Send Request"/>
										</div>
									</div>
								</li>
								<li><p>Praesent felis velit, maximus at dapibus semper, fermentum sagittis diam. <a href="#">Privacy Policy</a></p></li>
							</ul>
						</form>
					</div>
				</div>
				<div class="quic-book-ser-right">
					<div class="hom-cre-acc-left">
						<h3>What service do you need? <span>Business Directory</span></h3>
						<p>Tell us more about your requirements so that we can connect you to the right service provider.</p>
						<ul>
							<li> <img src="images/icon/7.png" alt=""/>
								<div>
									<h5>Tell us more about your requirements</h5>
									<p>Imagine you have made your presence online through a local online directory, but your competitors have..</p>
								</div>
							</li>
							<li> <img src="images/icon/5.png" alt=""/>
								<div>
									<h5>We connect with right service provider</h5>
									<p>Advertising your business to area specific has many advantages. For local businessmen, it is an opportunity..</p>
								</div>
							</li>
							<li> <img src="images/icon/6.png" alt=""/>
								<div>
									<h5>Happy with our service</h5>
									<p>Your local business too needs brand management and image making. As you know the local market..</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				
			</div>
		</div>
	</section>
        )};

  }

export default withRouter(TeamMember);
