

import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';


import $ from 'jquery';
import Cookies from 'universal-cookie';
const cookies = new Cookies()
class Footer extends Component{
    constructor(props) {

        super(props);
    
          this.state = {
            UserID:null,
            cartValue:0,
          }
          this.onChange = this.onChange.bind(this);
          this.handleNext = this.handleNext.bind(this);
        //   this.handleBack = this.handleBack.bind(this); 

          
      }

        


     componentWillReceiveProps(newProps) {
      this.setState({cartValue:newProps.cartValue})
      this.getCartAndWishCount()
     }

  async  componentDidMount(){

    this.setState({cartValue:this.props.cartValue })


    var UserID = await cookies.get('UserID');
    
    this.setState({UserID:Number(UserID)})


    this.getCartAndWishCount()
    }

 

  getCartAndWishCount()
  {
   fetch(URL+"/APP-API/Product/CartAndWish",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        
       store_code:this.state.Store_code,
       customerID:this.state.UserID

      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      
        // console.log('CartAndWish',responseJson)
        this.setState({cartValue:responseJson.cart,})
       
      
       

     })
     .catch((error) => {
       //  console.error(error);
          
     });
    
  }

  handleNext(path) {
    this.onChange()
    this.props.history.push(path);
  }

    onChange()
    {
   

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
  
        <div class="footer">
        <div class="no-gutters">
            <div class="col-auto mx-auto">
                <div class="row no-gutters justify-content-center">
                    <div class="col-auto">
                        <a onClick={() =>   this.handleNext("/")} className={this.props.location.pathname==='/'?'btn btn-link-default active':'btn btn-link-default'}  >
                            <i class="material-icons">store_mall_directory</i>
                        </a>
                    </div>
                   
                    <div class="col-auto">

                    <a onClick={() =>   this.handleNext("/Cart")}   class="btn btn-default shadow centerbutton">
                    <i class="material-icons">local_mall</i>
                    {this.state.cartValue===0?null
                    :
                ( <span class="cart_counter">{this.state.cartValue}</span>)
            }
                   
                   
                   </a>

                    </div>
                
                    <div class="col-auto">
                         <a onClick={() =>   this.handleNext("/Profile")} className={this.props.location.pathname==='/Profile'?'btn btn-link-default active':'btn btn-link-default'}>
                            <i class="material-icons">account_circle</i>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

 
}



export default withRouter(Footer);
