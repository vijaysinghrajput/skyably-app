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
          this.onChange = this.onChange.bind(this);
          this.handleNext = this.handleNext.bind(this);


        }
      
        handleNext(path) {
      
          this.onChange()
          this.props.history.push(path);
        }



  async  componentDidMount(){

        var user_name = await cookies.get('user_name');
        this.setState({user_name})
    }


    onChange(e)
    {
            /* menu open close wrapper screen click close menu */
  
   
        if ($('body').hasClass('sidemenu-open') == true) {
            $('body, html').removeClass('sidemenu-open');
            setTimeout(function () {
                $('body, html').removeClass('menuactive');
            }, 500);
        } else {
            $('body, html').addClass('sidemenu-open menuactive');
        }
 

        if ($('body').hasClass('sidemenu-open') == true) {

            $('body, html').removeClass('sidemenu-open');
            setTimeout(function () {
                $('body, html').removeClass('menuactive');
            }, 500);
        }
  

    }
render() {

    return ( 
    <div class="sidebar">
        <div class="text-center">
            <div class="figure-menu shadow">
                <figure><img src="/img/logo.png" alt="" /> </figure>
            </div>

            <h5 class="mb-1 ">{this.state.user_name==null?'Hello Guest':this.state.user_name}</h5>
      
        </div>
        <br/>
        <div class="row mx-0">
            <div class="col">
          
                <h5 class="subtitle text-uppercase"><span>Menu</span></h5>
              

                <div class="list-group main-menu">
              
                    <a   onClick={() =>   this.handleNext("/")}
                    className={this.props.location.pathname==='/'?'list-group-item list-group-item-action active':'list-group-item list-group-item-action'}>Store</a>
               
        
                   <a onClick={() =>   this.handleNext("/Cart")} class="list-group-item list-group-item-action" className={this.props.location.pathname==='/Cart'?'list-group-item list-group-item-action active':'list-group-item list-group-item-action'}>Shoping Cart</a>
            
                   <a onClick={() =>   this.handleNext("/Order")} class="list-group-item list-group-item-action" className={this.props.location.pathname==='/Order'?'list-group-item list-group-item-action active':'list-group-item list-group-item-action'}>Order</a>

               
                   <a  onClick={() =>   this.handleNext("/Profile")} class="list-group-item list-group-item-action" className={this.props.location.pathname==='/Profile'?'list-group-item list-group-item-action active':'list-group-item list-group-item-action'}>Profile</a>
         
                 
                    <a onClick={() =>   this.logOut()}  class="list-group-item list-group-item-action mt-2">Logout</a>


                    <a  class="text-center text-dark mt-4">Developed By</a>
              
                    <a  onClick={() =>   this.handleNext("/Skyably")} class="list-group-item list-group-item-action text-center text-dark">Skyably IT Solution</a>
                 

                </div>
            </div>
        </div>

    </div>
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
