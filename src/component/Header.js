


import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import URL from '../URL'
import GetSubCategory from './GetSubCategory'
import Cookies from 'universal-cookie';



class Header extends Component {
  constructor(props) {

    super(props);

    this.state = {
      Categorys: []
    }

    // this.onChange = this.onChange.bind(this);
    this.handleNext = this.handleNext.bind(this);

  }



  handleNext(Routation) {
   
    this.props.history.push(Routation);
  }


  async  componentDidMount() {

   await  this.fetchCategorys()

    
  }

  async fetchCategorys() {
  await  fetch(URL + "/APP-API/Product/GetStoreCategory", {
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
  openDotMenu()
  {
    $(".others-option-for-responsive .container .container").toggleClass("active");
  }

  render() {
      

    return (

      <React.Fragment>
      <section id="myID" class="bottomMenu hom3-top-menu">
      <div class="container top-search-main">
        <div class="row">
          <div class="ts-menu">
           
            <div class="ts-menu-1">
              <a href="index-1.html"><img src="images/aff-logo.png" alt=""/> </a>
            </div>
            
            <div class="ts-menu-2"><a href="#" class="t-bb">Products <i class="fa fa-angle-down" aria-hidden="true"></i></a>
              
              <div class="cat-menu cat-menu-1">

                <div class="dz-menu">

                { this.state.Categorys.map((item, key) => {
                  return (
                  <div class="dz-menu-inn">
                    <h4>{item.name}</h4>
                    <GetSubCategory CategoryID={item.id} />

                  </div>

                  )
                })}

                  

                  
                
               
                </div>


                
                <div class="dir-home-nav-bot">
                  <ul>
                    <li>A few reasons you’ll love Online Business Directory <span>Call us on: +01 6214 6548</span> </li>
                    <li><a href="advertise.html" class="waves-effect waves-light btn-large"><i class="fa fa-bullhorn"></i> Advertise with us</a>
                    </li>
                    <li><a href="db-listing-add.html" class="waves-effect waves-light btn-large"><i class="fa fa-bookmark"></i> Add your business</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            

            <div class="ts-menu-4">
              <div class="v3-top-ri">
                <ul>

   
                  <li><a href="db-listing-add.html" class="v3-add-bus"><i class="fa fa-info" aria-hidden="true"></i> About Us</a> </li>
                  <li><a href="db-listing-add.html" class="v3-add-bus"><i class="fa fa-phone" aria-hidden="true"></i> Contact Us</a> </li>

                </ul>
              </div>
            </div>
            
            <div class="ts-menu-5"><span><i class="fa fa-bars" aria-hidden="true"></i></span> </div>
            
            <div class="mob-right-nav" data-wow-duration="0.5s">
              <div class="mob-right-nav-close"><i class="fa fa-times" aria-hidden="true"></i> </div>
              <h5>SLIS</h5>
              <ul class="mob-menu-icon">
                <li><a href="price.html">Home</a> </li>
                <li><a href="#!" data-toggle="modal" data-target="#register">About Us</a> </li>
                <li><a href="#!" data-toggle="modal" data-target="#sign-in">Contact Us</a> </li>
              </ul>
              <h5>All Product</h5>
              <ul>
              { this.state.Categorys.map((item, key) => {
                return (

                <li><a href=""><i class="fa fa-angle-right" aria-hidden="true"></i> {item.name}</a> </li>
                )
              })}

                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
      </React.Fragment>
    );
  }

}



export default withRouter(Header);
