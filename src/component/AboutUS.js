
import React,{Component} from 'react';
import URL from '../URL'
import { Redirect ,withRouter} from 'react-router-dom';
import {Img} from 'react-image'

class AboutUS extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
     
      }
      this.handleNext = this.handleNext.bind(this);
      this.handleNext = this.handleNext.bind(this);

  }

  handleBack() {

    this.props.history.goBack();

  }

  handleNext(Routation) {
   
    this.props.history.push(Routation);
  }


    render() { 



      
    return (

        <React.Fragment>

        <section class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>About Us</h2>
                <ul>
                    <li><a href="" onClick={()=>this.handleNext("/")}>Home</a></li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>

        <div class="shape-img1"><img src="/assets/img/shape/shape1.svg" alt="image"/></div>
        <div class="shape-img2"><img src="/assets/img/shape/shape2.png" alt="image"/></div>
        <div class="shape-img3"><img src="/assets/img/shape/shape3.png" alt="image"/></div>
    </section>



    <section class="about-area ptb-100">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
                <div class="about-image wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <img src="/assets/img/about/img1.png" alt="image"/>
                </div>
            </div>

            <div class="col-lg-6 col-md-12">
                <div class="about-content">
                    <div class="content">
                        <span class="sub-title"><img src="/assets/img/star-icon.png" alt="image"/> About Us</span>
                        <h1> Skyably is Software company in Gorakhpur</h1>
                        <p>Skyably is a leading IT Solutions and Services Company in Gorakhpur offering its expertise in custom application development, application management outsourcing, consulting, and system integration. Our focus has always been on delivering proven business solutions that provide measurable results to our clients.</p>
                        <ul class="features-list">
                            <li><span>
                                <div class="icon">
                                    <img src="/assets/img/icon1.png" alt="image"/>
                                </div>
                                <h3>3 Years</h3>
                                <p>On the market</p>
                            </span></li>

                            <li><span>
                                <div class="icon">
                                    <img src="/assets/img/icon1.png" alt="image"/>
                                </div>
                                <h3>6</h3>
                                <p>Team members</p>
                            </span></li>

                            <li><span>
                                <div class="icon">
                                    <img src="/assets/img/icon1.png" alt="image"/>
                                </div>
                                <h3>100%</h3>
                                <p>Satisfaction rate</p>
                            </span></li>

                            <li><span>
                                <div class="icon">
                                    <img src="/assets/img/icon1.png" alt="image"/>
                                </div>
                                <h3>40+</h3>
                                <p>Projects</p>
                            </span></li>
                        </ul>
                        <p>Skyably is the realization of a vision shared by young entrepreneurs.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="about-inner-area">
            <div class="row">
             

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="about-text">
                        <h3>Our Mission</h3>
                        <p>To carve-out a global presence as the ultimate solution provider with customer centric approach and uncompromising commitment to quality, time-lines, innovation, precision and exceed all expectations through strategic development and optimum performance through superior work culture.                        </p>
                        
                        <ul class="features-list">
                            <li><i class="flaticon-tick"></i> We will help take small bussiness online.</li>
                            <li><i class="flaticon-tick"></i> We want to give our service at very low prices</li>
                            <li><i class="flaticon-tick"></i> We help grow bussines</li>
                            <li><i class="flaticon-tick"></i> We will make the software very easy to handle</li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 ">
                    <div class="about-text">
                        <h3>Who we are</h3>
                        <p>We are not simply a web development company, we are a communications company. The great products produced here reflect our understanding of how businesses communicate and function on the Internet.</p>
                        
                        <ul class="features-list">
                            <li><i class="flaticon-tick"></i> To strive for excellence and deliver the best results possible to our clients</li>
                            <li><i class="flaticon-tick"></i> To maintain uncompromising ethics and integrity.</li>
                            <li><i class="flaticon-tick"></i> To continuously grow, share and learn, as the web evolves.                            </li>
                            <li><i class="flaticon-tick"></i> To communicate effectively and use client feedback for self- improvement and growth.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="circle-shape1"><img src="/assets/img/shape/circle-shape1.png" alt="image"/></div>
</section>


<section class="how-its-work-area ptb-100">
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
            <div class="how-its-work-content">
                <span class="sub-title"><img src="/assets/img/star-icon.png" alt="image"/> People Love Us</span>
                <h2>Why Choose Us?<span class="overlay"></span></h2>
                <p>Every website is unique but the process is always more or less as follows.</p>
                <div class="inner-box">
                    <div class="single-item">
                        <div class="count-box">
                            1
                        </div>
                        <h3>Consultation</h3>
                        <p>Before we do anything, we like to sit down together and find out more about you. We want you to tell us your story – of your company, your product and your audience.</p>
                    </div>
                    <div class="single-item">
                        <div class="count-box">
                            2
                        </div>
                        <h3>Creative</h3>
                        <p>We carefully plan each project before any designing or development takes place. Our main focus here is on the user – we have to make sure any designs we come up with are accessible, intuitive and functional. </p>
                    </div>
                    <div class="single-item">
                        <div class="count-box">
                            3
                        </div>
                        <h3>Coding & Development</h3>
                        <p>This is where our ideas become visible. We’ll collaborate with you on a number of creative routes, producing content and designing iteratively so that you can see our direction at all times.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6 col-md-12">
            <div class="how-its-work-image" data-tilt>
                <img src="/assets/img/how-its-work.png" alt="image"/>
            </div>
        </div>
    </div>
</div>
</section>

        </React.Fragment>

        )};



  



  }

export default withRouter(AboutUS);
