import React from 'react';
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies()
class minHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
        this.handleNext = this.handleNext.bind(this);
    }

    async handleNext(Routation) {

    
          this.props.history.push(Routation);
        
      }

    async SendAddLisiting()
    {
      var isLogged = await cookies.get('isLogged')
        
      if(isLogged==null)
      {  this.handleNext("/Login") }
     else  {  this.handleNext("/Dashboard") }
       }



    componentDidMount() {

    }

    render() {
        return (
            <>
                <section class="i4-header">
                    <div class="v3-top-menu">
                        <div class="container">
                            <div class="row">
                                <div class="v3-menu">
                                    <div class="v3-m-1">
                                        <a href="index-1.html"><img src="images/logo2.png" alt="" /> </a>
                                    </div>
                                    <div class="v3-m-2">
                                        <ul>
                                            <li><a class='dropdown-button ed-sub-menu' href='#'
                                                data-activates='drop-menu-home'>Home</a>
                                            </li>
                                            <li><a class='dropdown-button ed-sub-menu' href='#'
                                                data-activates='drop-mega-menu'>Listing</a>
                                            </li>
                                            <li><a class='dropdown-button ed-sub-menu' href='#'
                                                data-activates='drop-mega-dash'>Dashboard</a>
                                            </li>
                                            <li><a class='dropdown-button ed-sub-menu' href='#'
                                                data-activates='drop-menu-page'>Pages</a>
                                            </li>
                                            <li><a class='dropdown-button ed-sub-menu' href='#'
                                                data-activates='drop-menu-admin'>Admin</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="v3-m-3">
                                        <div class="v3-top-ri v32-top-ri">
                                            <ul>
                                                <li><a href="login.html" class="v3-menu-sign"><i class="fa fa-sign-in"></i> Sign
											In</a> </li>
                                                <li><a href="#" onClick={()=>this.SendAddLisiting()} class="v3-add-bus"><i class="fa fa-plus"
                                                    aria-hidden="true"></i> Add Listing</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="all-drop-down-menu">
                                    <ul id='drop-menu-home' class='dropdown-content'>
                                        <li><a href="index-1.html">Home Page - 1</a></li>
                                        <li class="divider"></li>
                                        <li><a href="index-2.html">Home Page - 2</a></li>
                                        <li class="divider"></li>
                                        <li><a href="index-3.html">Home Page - 3</a></li>
                                    </ul>
                                    <ul id='drop-mega-dash' class='dropdown-content'>
                                        <li><a href="dashboard.html"><i class="fa fa-tachometer"></i> Dashboard</a> </li>
                                        <li><a href="db-my-profile.html"><i class="fa fa-user"></i> User Profile</a> </li>
                                        <li><a class='dropdown-button2 ed-sub-drop-menu' href='#' data-activates='dropdown3'
                                            data-hover="hover" data-alignm="left"><i class="fa fa-sign-in"></i> Login
									Details</a>
                                        </li>
                                        <li><a href="db-invoice.html"><i class="fa fa-file-pdf-o"></i> Invoice</a> </li>
                                        <li><a href="db-invoice-download.html"><i class="fa fa-download"></i> Download Invoice </a>
                                        </li>
                                        <li><a href="db-setting.html"><i class="fa fa-cogs"></i> User Setting</a> </li>
                                        <li><a href="db-post-ads.html"><i class="fa fa-buysellads	"></i> Post Ads </a> </li>
                                        <li><a href="db-all-listing.html"><i class="fa fa-list-ul"></i> All Listings</a> </li>
                                        <li><a href="db-listing-add.html"><i class="fa fa-plus-square-o"></i> Add New Listing</a>
                                        </li>
                                        <li><a href="db-review.html"><i class="fa fa-star-half-full"></i> Listing Reviews</a> </li>
                                        <li><a href="db-payment.html"><i class="fa fa-credit-card"></i> Listing Payments </a> </li>
                                        <li><a href="db-message.html"><i class="fa fa-commenting-o"></i> Messages</a> </li>
                                    </ul>
                                    <ul id='drop-mega-menu' class='dropdown-content'>
                                        <li><a href="list.html"><i class="fa fa-list-ul"></i> All Listing</a>
                                        </li>
                                        <li><a class='dropdown-button2 ed-sub-drop-menu' href='#' data-activates='dropdown2'
                                            data-hover="hover" data-alignm="left"><i class="fa fa-list-alt"></i> Listing
									Details</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="add-listing.html"><i class="fa fa-plus"></i> Add Listing</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="nearby-listings.html"><i class="fa fa-map-marker"></i> Nearby Listing</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="new-business.html"><i class="fa fa-bookmark-o"></i> Latest Listings</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="trendings.html"><i class="fa fa-bullhorn"></i> Trending Listing</a>
                                        </li>
                                    </ul>
                                    <ul id='dropdown2' class='dropdown-content'>
                                        <li><a href="listing-details.html">Listing Details </a> </li>
                                        <li class="divider"></li>
                                        <li><a href="list-grid.html">Listing Grid View</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="list-lead.html">Lead Listing</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="property-listing-details.html">Property View</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="shop-listing-details.html">Shoping View</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="hotels-listing-details.html">Hotel View</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="automobile-listing-details.html">Automobile View</a>
                                        </li>
                                    </ul>
                                    <ul id='dropdown3' class='dropdown-content'>
                                        <li><a href="register.html"> User Register</a> </li>
                                        <li><a href="login.html"> User Login</a> </li>
                                        <li><a href="forgot-pass.html"> Forgot Password</a> </li>
                                    </ul>
                                    <ul id='drop-menu-page' class='dropdown-content'>
                                        <li><a href="about-us.html"><i class="fa fa-user"></i> About Us</a> </li>
                                        <li><a class='dropdown-button2 ed-sub-drop-menu' href='#' data-activates='email-temp'
                                            data-hover="hover" data-alignm="left"><i class="fa fa-envelope-o"></i> Email
									Template</a>
                                        </li>
                                        <li><a href="how-it-work.html"><i class="fa fa-lightbulb-o"></i> How It Work</a> </li>
                                        <li><a href="advertise.html"><i class="fa fa-buysellads"></i> Advertise with us</a> </li>
                                        <li><a href="price.html"><i class="fa fa-dollar"></i> Price Details</a> </li>
                                        <li><a href="customer-reviews.html"><i class="fa fa-star-o"></i> Customer Reviews</a> </li>
                                        <li><a href="contact-us.html"><i class="fa fa-comments-o"></i> Contact Us</a> </li>
                                        <li><a href="blog.html"><i class="fa fa-book"></i> Blog Post</a> </li>
                                        <li><a href="blog-content.html"><i class="fa fa-book"></i> Blog Details</a> </li>
                                        <li><a href="elements.html"><i class="fa fa-code"></i> All Elements </a> </li>
                                    </ul>
                                    <ul id='drop-menu-admin' class='dropdown-content'>
                                        <li><a href="admin.html"><i class="fa fa-tachometer"></i> Main Admin</a> </li>
                                        <li><a class='dropdown-button2 ed-sub-drop-menu' href='#' data-activates='adm-dr1'
                                            data-hover="hover" data-alignm="left"><i class="fa fa-list-ul"></i> Listing </a>
                                        </li>
                                        <li><a class='dropdown-button2 ed-sub-drop-menu' href='#' data-activates='adm-dr2'
                                            data-hover="hover" data-alignm="left"><i class="fa fa-user"></i> User</a>
                                        </li>
                                        <li><a class='dropdown-button2 ed-sub-drop-menu' href='#' data-activates='adm-dr6'
                                            data-hover="hover" data-alignm="left"><i class="fa fa-sign-in"></i> Login Detail</a>
                                        </li>
                                        <li><a href="admin-analytics.html"><i class="fa fa-bar-chart"></i> Analytics</a> </li>
                                        <li><a class='dropdown-button2 ed-sub-drop-menu' href='#' data-activates='adm-dr3'
                                            data-hover="hover" data-alignm="left"><i class="fa fa-buysellads"></i> Ads</a>
                                        </li>
                                        <li><a href="admin-payment.html"><i class="fa fa-usd"></i> Payments</a> </li>
                                        <li><a href="admin-earnings.html"><i class="fa fa-money"></i> Earnings</a> </li>
                                        <li><a class='dropdown-button2 ed-sub-drop-menu' href='#' data-activates='adm-dr4'
                                            data-hover="hover" data-alignm="left"><i class="fa fa-buysellads"></i>
									Notifications</a>
                                        </li>
                                        <li><a class='dropdown-button2 ed-sub-drop-menu' href='#' data-activates='adm-dr5'
                                            data-hover="hover" data-alignm="left"><i class="fa fa-tags"></i> Price List</a>
                                        </li>
                                        <li><a href="admin-setting.html"><i class="fa fa-cogs" aria-hidden="true"></i> Setting</a>
                                        </li>
                                    </ul>
                                    <ul id='adm-dr1' class='dropdown-content'>
                                        <li><a href="admin-all-listing.html">All listing</a> </li>
                                        <li><a href="admin-list-add.html">Add New listing</a> </li>
                                        <li><a href="admin-listing-category.html">All listing Category</a> </li>
                                        <li><a href="admin-list-category-add.html">Add listing Category</a> </li>
                                    </ul>
                                    <ul id='adm-dr2' class='dropdown-content'>
                                        <li><a href="admin-all-users.html">All Users</a> </li>
                                        <li><a href="admin-list-users-add.html">Add New user</a> </li>
                                    </ul>
                                    <ul id='adm-dr3' class='dropdown-content'>
                                        <li><a href="admin-ads.html">All Ads</a> </li>
                                        <li><a href="admin-ads-create.html">Create New Ads</a> </li>
                                    </ul>
                                    <ul id='adm-dr4' class='dropdown-content'>
                                        <li><a href="admin-notifications.html">All Notifications</a> </li>
                                        <li><a href="admin-notifications-user-add.html">User Notifications</a> </li>
                                        <li><a href="admin-notifications-push-add.html">Push Notifications</a> </li>
                                    </ul>
                                    <ul id='adm-dr5' class='dropdown-content'>
                                        <li><a href="admin-price.html">All List Price</a> </li>
                                        <li><a href="admin-price-list.html">Add New Price</a> </li>
                                    </ul>
                                    <ul id='adm-dr6' class='dropdown-content'>
                                        <li><a href="admin-login.html">Admin Login</a> </li>
                                        <li><a href="admin-register.html">Admin Register</a> </li>
                                        <li><a href="admin-pass.html">Admin Forgot Pass</a> </li>
                                    </ul>
                                    <ul id='email-temp' class='dropdown-content'>
                                        <li><a href="email-template-register.html" target="_blank">Register</a> </li>
                                        <li><a href="email-template-invoice.html" target="_blank">Invoice</a> </li>
                                        <li><a href="email-listing-submited.html" target="_blank">Listing Submit</a> </li>
                                        <li><a href="email-subscribe.html" target="_blank">Subscripe</a> </li>
                                        <li><a href="email-template-email-verification.html" target="_blank">Email Verification</a>
                                        </li>
                                        <li><a href="email-template-forgot-pass.html" target="_blank">Forgot Password</a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default withRouter(minHeader);