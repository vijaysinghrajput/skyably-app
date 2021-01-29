import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';
import $ from 'jquery';
import Cookies from 'universal-cookie';
const cookies = new Cookies()
class Sidebar extends Component{
    constructor(props) {

        super(props);
    
          this.state = {
            user_name:null
          }
     
          this.handleNext = this.handleNext.bind(this);


        }
      
        handleNext(path) {
      
     
          this.props.history.push(path);
        }



  async  componentDidMount(){

        var user_name = await cookies.get('user_name');
        this.setState({user_name})
    }


    
render() {

    return ( 
   <React.Fragment>

   <div class="sb2-1">
  
   <div class="sb2-12">
       <ul>
           <li><img src="images/users/2.png" alt=""/> </li>
           <li>
               <h5>John Smith <span> Santa Ana, CA</span></h5> </li>
           <li></li>
       </ul>
   </div>

   <div class="sb2-13">
       <ul class="collapsible" data-collapsible="accordion">
           <li><a href="admin.html" class="menu-active"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</a> </li>
           <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-list-ul" aria-hidden="true"></i> Services</a>
               <div class="collapsible-body left-sub-menu">
                   <ul>
                       <li onClick={()=>this.handleNext("/Services")}><a >All Services</a> </li>
                       <li onClick={()=>this.handleNext("/Add-Services")}><a >Add New Services</a> </li>
                     
                   </ul>
               </div>
           </li>
           <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-user" aria-hidden="true"></i> Users</a>
               <div class="collapsible-body left-sub-menu">
                   <ul>
                       <li><a href="admin-all-users.html">All Users</a> </li>
                       <li><a href="admin-list-users-add.html">Add New user</a> </li>
                   </ul>
               </div>
           </li>
           <li><a href="admin-analytics.html"><i class="fa fa-bar-chart" aria-hidden="true"></i> Analytics</a> </li>
           <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-buysellads" aria-hidden="true"></i>Ads</a>
               <div class="collapsible-body left-sub-menu">
                   <ul>
                       <li><a href="admin-ads.html">All Ads</a> </li>
                       <li><a href="admin-ads-create.html">Create New Ads</a> </li>
                   </ul>
               </div>
           </li>
           <li><a href="admin-payment.html"><i class="fa fa-usd" aria-hidden="true"></i> Payments</a> </li>
           <li><a href="admin-earnings.html"><i class="fa fa-money" aria-hidden="true"></i> Earnings</a> </li>
           <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-bell-o" aria-hidden="true"></i>Notifications</a>
               <div class="collapsible-body left-sub-menu">
                   <ul>
                       <li><a href="admin-notifications.html">All Notifications</a> </li>
                       <li><a href="admin-notifications-user-add.html">User Notifications</a> </li>
                       <li><a href="admin-notifications-push-add.html">Push Notifications</a> </li>
                   </ul>
               </div>
           </li>
           <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-tags" aria-hidden="true"></i> List Price</a>
               <div class="collapsible-body left-sub-menu">
                   <ul>
                       <li><a href="admin-price.html">All List Price</a> </li>
                       <li><a href="admin-price-list.html">Add New Price</a> </li>
                   </ul>
               </div>
           </li>
           <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-rss" aria-hidden="true"></i> Blog & Articals</a>
               <div class="collapsible-body left-sub-menu">
                   <ul>
                       <li><a href="admin-blog.html">All Blogs</a> </li>
                       <li><a href="admin-blog-add.html">Add Blog</a> </li>
                   </ul>
               </div>
           </li>
           <li><a href="admin-setting.html"><i class="fa fa-cogs" aria-hidden="true"></i> Setting</a> </li>
           <li><a href="admin-social-media.html"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Social Media</a> </li>
           <li><a href="#" target="_blank"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</a> </li>
       </ul>
   </div>
</div>

   </React.Fragment>
    );
}

async logOut()
{
  
    
    cookies.remove("isLogged", null);
    cookies.remove("UserID", null);
    cookies.remove("user_mobile_number",null);
    cookies.remove("user_name",null);
   window.location.reload();

   this.onChange()
}
}



export default withRouter(Sidebar);
