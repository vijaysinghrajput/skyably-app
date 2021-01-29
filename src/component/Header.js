import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import URL from '../URL'
import Cookies from 'universal-cookie';
const cookies = new Cookies()



class Header extends Component {
  constructor(props) {

    super(props);

    this.state = {
      UserID: null,
      isLoading: true
    }

    this.handleNext = this.handleNext.bind(this);

  }



  async handleNext(Routation) {

    const UserID = await cookies.get('UserID');

    if (UserID === undefined) {
      this.props.history.push("/Login");
    } else {
      this.props.history.push(Routation);
    }
  }


  async componentDidMount() {

    const UserID = await cookies.get('UserID');

    this.setState({ UserID: Number(UserID), isLoading: false })

  }

  openDotMenu() {
    $(".others-option-for-responsive .container .container").toggleClass("active");
  }

  render() {


    return (
      <>
        <section class="i4-header pt-4">
          {/* <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="dir-ho-tl">
                  <ul>
                    <li>
                      <a href="index-1.html"><img src="images/logo2.png" alt="" /> </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <div class="dir-ho-tr">
                  <ul>
                    <li><a href="register.html">Register</a> </li>
                    <li><Link to="/Login">Sign In</Link> </li>
                    <li><a href="Javascript:void(0)" onClick={() => this.handleNext("/AddProperty")}><i class="fa fa-plus" aria-hidden="true"></i> Add Properties</a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container dir-ho-t-sp">
            <div class="row">
              <div class="dir-hr1 dir-cat-search">
                <div class="dir-ho-t-tit">
                  <h1>Connect with the right<br />Service Experts</h1>
                  <p>Find B2B & B2C businesses contact addresses, phone numbers,<br /> user ratings and reviews.</p>
                </div>
                <form class="cate-search-form">
                  <div class="input-field">
                    <input type="text" id="select-category" class="autocomplete auto-category" />
                    <label for="select-category">Select category</label>
                  </div>
                  <div class="input-field">
                    <input type="text" id="select-search" class="autocomplete" />
                    <label for="select-search">Search your services</label>
                  </div>
                  <div class="input-field">
                    <input type="submit" value="search" class="waves-effect waves-light tourz-sear-btn" /> </div>
                </form>
              </div>
            </div>
          </div> */}
        </section>
        <section>
          <div class="v3-mob-top-menu">
            <div class="container">
              <div class="row">
                <div class="v3-mob-menu">
                  <div class="v3-mob-m-1">
                    <a href="index-1.html"><img src="images/logo2.png" alt="" /> </a>
                  </div>
                  <div class="v3-mob-m-2">
                    <div class="v3-top-ri">
                      <ul>
                        <li><a href="login.html" class="v3-menu-sign"><i class="fa fa-sign-in"></i> Sign
											In</a> </li>
                        <li><a href="price.html" class="v3-add-bus"><i class="fa fa-plus"
                          aria-hidden="true"></i> Add Listing</a> </li>
                        <li><a href="#" class="ts-menu-5" id="v3-mob-menu-btn"><i class="fa fa-bars"
                          aria-hidden="true"></i>Menu</a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mob-right-nav" data-wow-duration="0.5s">
            <div class="mob-right-nav-close"><i class="fa fa-times" aria-hidden="true"></i> </div>
            <h5>Business</h5>
            <ul class="mob-menu-icon">
              <li><a href="price.html">Add Business</a> </li>
              <li><a href="#!" data-toggle="modal" data-target="#register">Register</a> </li>
              <li><a href="#!" data-toggle="modal" data-target="#sign-in">Sign In</a> </li>
            </ul>
            <h5>All Categories</h5>
            <ul>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Help Services</a> </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Appliances Repair &
						Services</a> </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Furniture Dealers</a> </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Packers and Movers</a>
              </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Pest Control </a> </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Solar Product Dealers</a>
              </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Interior Designers</a>
              </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Carpenters</a> </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Plumbing Contractors</a>
              </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Modular Kitchen</a> </li>
              <li><a href="list.html"><i class="fa fa-angle-right" aria-hidden="true"></i> Internet Service
						Providers</a> </li>
            </ul>
          </div>
        </section>
      </>
    );
  }

}



export default withRouter(Header);
