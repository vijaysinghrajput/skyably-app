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
      </>
    );
  }

}



export default withRouter(Header);
