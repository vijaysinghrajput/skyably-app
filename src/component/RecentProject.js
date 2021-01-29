
import React,{Component} from 'react';
import URL from '../URL'
import { withRouter } from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import SplshImage from './SplshImage';
import {Img} from 'react-image'

import Cookies from 'universal-cookie';
const cookies = new Cookies();


class RecentProject extends Component{

  constructor(props) {

    super(props);
   
      this.state = {
        portfolio:[]
      }
    



    }




    async  componentDidMount() {

      await  this.fetchportfolio()
   
       
     }
   
     fetchportfolio() {
       fetch(URL + "/APP-API/Product/GetStorePorfolio", {
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
   
   
            console.log('portfolio',responseJson)
   
           this.setState({ portfolio: responseJson.data.slice(0,8) });
   
   
   
   
   
         })
         .catch((error) => {
           //  console.error(error);
   
         });
   
   
     }
   
   
    render() { 


      if(this.state.isloaded===false)
      {
        return <SplshImage/>;
      }
      else
      {
    
    
    return (
      <section id="agent-p-2" class="property-details bg_light padding">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 bottom40">
        <h2 class="text-uppercase">Recent <span class="color_red">PROPERTY</span></h2>
        <div class="line_1"></div>
        <div class="line_2"></div>
        <div class="line_3"></div>
        <p class="margin-t-20">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing
          <br/>vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.
        </p>
      </div>
    </div>
    <div class="col-md-12">
      <div class="row">
        <div id="property-2-slider" class="owl-carousel">
          <div class="item">
            <div class="property_item bottom40">
              <div class="image">
                <img src="/images/property-listing-1.jpg" alt="listin" class="img-responsive"/>
                <div class="property_meta">
                  <span><i class="fa fa-object-group"></i>530 sq ft </span>
                  <span><i class="fa fa-bed"></i>2</span>
                  <span><i class="fa fa-bath"></i>1 Bathroom</span>
                </div>
                <div class="price"><span class="tag">For Sale</span></div>
                <div class="overlay">
                  <div class="centered"><a class="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                </div>
              </div>
              <div class="proerty_content">
                <div class="proerty_text">
                  <h3><a href="property_details_1.html">House in New York City</a></h3>
                  <span class="bottom10">Merrick Way, Miami, USA</span>
                  <p><strong>$8,600 Per Month</strong></p>
                </div>
                <div class="favroute clearfix">
                  <p class="pull-left"><i class="icon-calendar2"></i> 3 Days ago</p>
                  <ul class="pull-right">
                    <li><a href="#."><i class="icon-video"></i></a></li>
                    <li><a href="#."><i class="icon-like"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="property_item bottom40">
              <div class="image">
                <img src="/images/property-listing-2.jpg" alt="listin" class="img-responsive"/>
                <div class="property_meta">
                  <span><i class="fa fa-object-group"></i>530 sq ft </span>
                  <span><i class="fa fa-bed"></i>2</span>
                  <span><i class="fa fa-bath"></i>1 Bathroom</span>
                </div>
                <div class="price"><span class="tag">For Sale</span></div>
                <div class="overlay">
                  <div class="centered"><a class="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                </div>
              </div>
              <div class="proerty_content">
                <div class="proerty_text">
                  <h3><a href="property_details_1.html">House in New York City</a></h3>
                  <span class="bottom10">Merrick Way, Miami, USA</span>
                  <p><strong>$83,600,200</strong></p>
                </div>
                <div class="favroute clearfix">
                  <p class="pull-left"><i class="icon-calendar2"></i> 3 Days ago</p>
                  <ul class="pull-right">
                    <li><a href="#."><i class="icon-video"></i></a></li>
                    <li><a href="#."><i class="icon-like"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="property_item bottom40">
              <div class="image">
                <img src="/images/property-listing-3.jpg" alt="listin" class="img-responsive"/>
                <div class="property_meta">
                  <span><i class="fa fa-object-group"></i>530 sq ft </span>
                  <span><i class="fa fa-bed"></i>2</span>
                  <span><i class="fa fa-bath"></i>1 Bathroom</span>
                </div>
                <div class="price"><span class="tag">For Rent</span></div>
                <div class="overlay">
                  <div class="centered"><a class="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                </div>
              </div>
              <div class="proerty_content">
                <div class="proerty_text">
                  <h3><a href="property_details_1.html">House in New York City</a></h3>
                  <span class="bottom10">Merrick Way, Miami, USA</span>
                  <p><strong>$8,600 Per Month</strong></p>
                </div>
                <div class="favroute clearfix">
                  <p class="pull-left"><i class="icon-calendar2"></i> 3 Days ago</p>
                  <ul class="pull-right">
                    <li><a href="#."><i class="icon-video"></i></a></li>
                    <li><a href="#."><i class="icon-like"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="property_item bottom40">
              <div class="image">
                <img src="/images/property-listing-1.jpg" alt="listin" class="img-responsive"/>
                <div class="property_meta">
                  <span><i class="fa fa-object-group"></i>530 sq ft </span>
                  <span><i class="fa fa-bed"></i>2</span>
                  <span><i class="fa fa-bath"></i>1 Bathroom</span>
                </div>
                <div class="price"><span class="tag">For Rent</span></div>
                <div class="overlay">
                  <div class="centered"><a class="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                </div>
              </div>
              <div class="proerty_content">
                <div class="proerty_text">
                  <h3><a href="property_details_1.html">House in New York City</a></h3>
                  <span class="bottom10">Merrick Way, Miami, USA</span>
                  <p><strong>$8,600 Per Month</strong></p>
                </div>
                <div class="favroute clearfix">
                  <p class="pull-left"><i class="icon-calendar2"></i> 3 Days ago</p>
                  <ul class="pull-right">
                    <li><a href="#."><i class="icon-video"></i></a></li>
                    <li><a href="#."><i class="icon-like"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="property_item bottom40">
              <div class="image">
                <img src="/images/property-listing-2.jpg" alt="listin" class="img-responsive"/>
                <div class="property_meta">
                  <span><i class="fa fa-object-group"></i>530 sq ft </span>
                  <span><i class="fa fa-bed"></i>2</span>
                  <span><i class="fa fa-bath"></i>1 Bathroom</span>
                </div>
                <div class="price"><span class="tag">For Sale</span></div>
                <div class="overlay">
                  <div class="centered"><a class="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                </div>
              </div>
              <div class="proerty_content">
                <div class="proerty_text">
                  <h3><a href="property_details_1.html">House in New York City</a></h3>
                  <span class="bottom10">Merrick Way, Miami, USA</span>
                  <p><strong>$8,60020</strong></p>
                </div>
                <div class="favroute clearfix">
                  <p class="pull-left"><i class="icon-calendar2"></i> 3 Days ago</p>
                  <ul class="pull-right">
                    <li><a href="#."><i class="icon-video"></i></a></li>
                    <li><a href="#."><i class="icon-like"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="property_item bottom40">
              <div class="image">
                <img src="/images/property-listing-3.jpg" alt="listin" class="img-responsive"/>
                <div class="property_meta">
                  <span><i class="fa fa-object-group"></i>530 sq ft </span>
                  <span><i class="fa fa-bed"></i>2</span>
                  <span><i class="fa fa-bath"></i>1 Bathroom</span>
                </div>
                <div class="price"><span class="tag">For Rent</span></div>
                <div class="overlay">
                  <div class="centered"><a class="link_arrow white_border" href="property_details_1.html">View Detail</a></div>
                </div>
              </div>
              <div class="proerty_content">
                <div class="proerty_text">
                  <h3><a href="property_details_1.html">House in New York City</a></h3>
                  <span class="bottom10">Merrick Way, Miami, USA</span>
                  <p><strong>$8,600 Per Month</strong></p>
                </div>
                <div class="favroute clearfix">
                  <p class="pull-left"><i class="icon-calendar2"></i> 3 Days ago</p>
                  <ul class="pull-right">
                    <li><a href="#."><i class="icon-video"></i></a></li>
                    <li><a href="#."><i class="icon-like"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        )
    }};


  }

export default withRouter(RecentProject);
