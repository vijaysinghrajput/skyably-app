
import React,{Component} from 'react';
import URL from '../URL'
import { withRouter } from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class Contact extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        Categorys:[]
      }
    

      this.handleNext = this.handleNext.bind(this);


    }




    async  componentDidMount() {

      await  this.fetchCategorys()
   
       
     }
   
     fetchCategorys() {
       fetch(URL + "/APP-API/Product/GetStoreCategory", {
         method: 'post',
         header: {
           'Accept': 'application/json',
           'Content-type': 'application/json'
         },
         body: JSON.stringify({
   
   
         })
   
       })
         .then((response) => response.json())
         .then((responseJson) => {
   
   
            console.log('Categorys',responseJson)
   
           this.setState({ Categorys: responseJson.data, inMemoryrestorentData: responseJson.data });
   
   
   
   
   
         })
         .catch((error) => {
           //  console.error(error);
   
         });
   
   
     }
   
   

    render() { 



    
    return (
    <React.Fragment>

    <section class="page-title-area page-title-style-two">
    <div class="container">
        <div class="page-title-content">
            <h2>Contact Us</h2>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>

    <div class="shape-img1"><img src="/assets/img/shape/shape1.svg" alt="image"/></div>
    <div class="shape-img2"><img src="/assets/img/shape/shape2.png" alt="image"/></div>
    <div class="shape-img3"><img src="/assets/img/shape/shape3.png" alt="image"/></div>
</section>



<section class="contact-area pb-100">
<div class="container">
    <div class="section-title">
        <span class="sub-title"><img src="/assets/img/star-icon.png" alt="image"/> Get in Touch</span>
        <h2>Ready to Get Started?</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
    </div>

    <div class="row">
        <div class="col-lg-6 col-md-12">
            <div class="contact-image" data-tilt>
                <img src="/assets/img/contact.png" alt="image"/>
            </div>
        </div>

        <div class="col-lg-6 col-md-12">
            <div class="contact-form">
                <form id="contactForm">
                    <div class="row">
                        <div class="col-lg-12 col-md-6">
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" id="name" required data-error="Please enter your name" placeholder="Your name" />
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-6">
                            <div class="form-group">
                                <input type="email" name="email" class="form-control" id="email" required data-error="Please enter your email" placeholder="Your email address" />
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <input type="text" name="phone_number" class="form-control" id="phone_number" required data-error="Please enter your phone number" placeholder="Your phone number" />
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <textarea name="message" id="message" class="form-control" cols="30" rows="6" required data-error="Please enter your message" placeholder="Write your message..."></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <button type="submit" class="default-btn"><i class="flaticon-tick"></i>Send Message<span></span></button>
                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</section>



<section class="contact-info-area pt-100 pb-70">
<div class="container">
    <div class="row">
        <div class="col-lg-4 col-md-6">
            <div class="contact-info-box">
                <div class="back-icon">
                    <i class='bx bx-map'></i>
                </div>
                <div class="icon">
                    <i class='bx bx-map'></i>
                </div>
                <h3>Our Address</h3>
                <p>281 B Rajeev Nagar Rustampur , Gorakhpur</p>
            </div>
        </div>

        <div class="col-lg-4 col-md-6">
            <div class="contact-info-box">
                <div class="back-icon">
                    <i class='bx bx-phone-call'></i>
                </div>
                <div class="icon">
                    <i class='bx bx-phone-call'></i>
                </div>
                <h3>Contact</h3>
                <p>Mobile: <a href="tel:7985130789">798 5130 789</a></p>
                <p>E-mail: <a href="mailto:contact@skyably.com">contact@skyably.com</a></p>
            </div>
        </div>

        <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div class="contact-info-box">
                <div class="back-icon">
                    <i class='bx bx-time-five'></i> 
                </div>
                <div class="icon">
                    <i class='bx bx-time-five'></i>
                </div>
                <h3>Hours of Operation</h3>
                <p>Monday - Friday:  10:30 - 19:30</p>
                <p> Saturday: 10:30 - 14:00</p>
            </div>
        </div>
    </div>
</div>
</section>


<div id="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.570333466473!2d83.36172661504101!3d26.726170183208325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399143ca1a0c0493%3A0xf4b74d90780556ea!2sSkyably%20IT%20Solution!5e0!3m2!1sen!2sin!4v1606625275094!5m2!1sen!2sin" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>

    </React.Fragment>

        )};

        handleNext(servicesname) {
          const Routation = "/services/"+servicesname;
          this.props.history.push(Routation);
      
        }

  }

export default withRouter(Contact);
