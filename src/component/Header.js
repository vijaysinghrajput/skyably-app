


import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import URL from '../URL'
import * as NumericInput from "react-numeric-input";
import GetSubCategory from './GetSubCategory'
import Cookies from 'universal-cookie';
import Dropdown from 'react-multilevel-dropdown';
require('smartmenus');
const cookies = new Cookies()


class Header extends Component {
  constructor(props) {

    super(props);

    this.state = {
      user_name: null,
      UserID: null,
      isLogged: undefined,
      productId: null,
      UserHaveInCart: 0,
      afterDiscountTotal: 0,
      totalAmount: 0,
      SaverTodayDetails: null,
      cartValue: 0,
      Categorys: []
    }

    // this.onChange = this.onChange.bind(this);
    this.handleNext = this.handleNext.bind(this);

  }


  componentWillReceiveProps(newProps) {
    this.setState({ cartValue: newProps.cartValue })
    this.fetchCategorys()

  }

  handleNext(Routation) {
   
    this.props.history.push(Routation);
  }


  async  componentDidMount() {

    $('#main-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
  });
  $('#sub-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
  });


    this.setState({ cartValue: this.props.cartValue })


    var isLogged = await cookies.get('isLogged')
    var user_name = await cookies.get('user_name');
    var UserID = await cookies.get('UserID');


    this.setState({ isLogged, user_name, UserID: Number(UserID) })
    await this.fetchCategorys()

    
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


        // console.log('Categorys',responseJson)

        this.setState({ Categorys: responseJson.data, inMemoryrestorentData: responseJson.data });





      })
      .catch((error) => {
        //  console.error(error);

      });


  }


  getCartAndWishCount() {
    fetch(URL + "/APP-API/Product/CartAndWish", {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({

        store_code: this.state.Store_code,
        customerID: this.state.UserID

      })

    })
      .then((response) => response.json())
      .then((responseJson) => {


        // console.log('CartAndWish',responseJson)
        this.setState({ UserHaveInCart: responseJson.cart, })




      })
      .catch((error) => {
        //  console.error(error);

      });

  }



  fetchCartData() {

    fetch(URL + "/APP-API/Product/GetCartProduct", {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({

        // store_code:this.state.Store_code,
        UserID: this.state.UserID,


      })

    })
      .then((response) => response.json())
      .then((responseJson) => {


        console.log('cart data', responseJson)

        this.setState({ SaverTodayDetails: responseJson, isloaded: true });





      })

      .catch((error) => {
        //  console.error(error);

      });




  }

  GetCartPrice() {
    fetch(URL + "/APP-API/Product/GetCartPrice", {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({

        // store_code:this.state.Store_code,
        UserID: this.state.UserID,


      })

    })
      .then((response) => response.json())
      .then((responseJson) => {


        //  console.log('cart data',responseJson)

        this.setState({ totalAmount: responseJson.totalAmount, afterDiscountTotal: responseJson.afterDiscountTotal, });





      })

      .catch((error) => {
        //  console.error(error);

      });
  }

  renderCategory(id) {

    //  fetch(URL+"/APP-API/Product/GetStoreSubCategoryByID",{
    //    method:'post',
    //    header:{
    //      'Accept': 'application/json',
    //      'Content-type': 'application/json'
    //    },
    //    body:JSON.stringify({

    //     cats_id:id

    //    })

    //  })
    //   .then((response) => response.json())
    //   .then((responseJson) => {


    //  this.setState({Categorys:responseJson.data})





    //   })
    //   .catch((error) => {
    //      console.error(error);

    //   });




    return (
      <ul>


        <li>
          <a ><span class="new-tag">hh</span></a>
          <ul>
            <li><a  >marketplace</a></li>

          </ul>
        </li>

      </ul>
    )




  }
  render() {

    return (

      <React.Fragment>
        <header class="header-tools marketplace shadow-lg" >
          <div class="mobile-fix-option"></div>
          <div class="top-header">
            <div class="container-fluid custom-container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="header-contact">
                    <ul>
                      <li>Welcome to Bharat Bazaar</li>
                      <li ><i class="fa fa-phone" aria-hidden="true"></i>Call Us: +91 7525995999</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6 text-right">
                  <ul class="header-dropdown">
                    <li class="mobile-wishlist"><a ><i class="fa fa-heart" aria-hidden="true"></i></a>
                    </li>
                    <li class="onhover-dropdown mobile-account"> <i class="fa fa-user" aria-hidden="true"></i>
                      My Account
                      {this.state.isLogged == undefined ?
                        (
                                <ul class="onhover-show-div">
                        
                            <React.Fragment>
                              <li onClick={()=>this.handleNext("/Login")}><a >Login</a></li>
                              <li onClick={()=>this.handleNext("/SignUp")}><a >SigUp</a></li>
                            </React.Fragment>
                         

                      </ul>
                      ) : 
                    (     <ul class="onhover-show-div">
                        
                    <React.Fragment>
                     <li onClick={()=>this.handleNext("/Profile")}><a >Profile</a></li>
                      <li onClick={()=>this.logOut()}><a >Logout</a></li>
                    </React.Fragment>
                 

              </ul>)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid custom-container">
            <div class="row">
              <div class="col-sm-12">
                <div class="main-menu">
                  <div class="menu-left">

{window.innerWidth<'720'?(
  <div class="navbar">
  <a onClick={() => this.openNav()}>
    <div class="bar-style"><i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
    </div>
  </a>
  <div id="mySidenav" class="sidenav">
    <a class="sidebar-overlay" onClick={() => this.closeNav()}></a>
    <nav>
      <div onClick={() => this.closeNav()} >
        <div class="sidebar-back text-left"><i class="fa fa-angle-left pr-2"
          aria-hidden="true"></i> Back</div>
      </div>
      <ul id="sub-menu" class="sm pixelstrap sm-vertical">


        <li> <a >Shop By Category</a>


        <ul class="mega-menu clothing-menu" id="sm-1604690068664075-2" role="group" aria-hidden="false" aria-labelledby="sm-1604690068664075-1" aria-expanded="true">
            <li>
              <div class="row m-0">
                <div class="col-xl-4">
                {this.state.Categorys.map((item, key) => {
                  return (
        
        
                  <React.Fragment>
        
                 
                        <div class="link-section">
                          <h5>{item.name}</h5>
                          <GetSubCategory CategoryID={item.id}  />
                        
                        </div>
                    
        
                  </React.Fragment>
                   
        
                  )
                })}
                </div>
              
               
              </div>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  </div>
</div>
):null}
                


                    <div class="brand-logo">
                      <a onClick={() => this.handleNext("/")} ><img src="/assets/images/icon/logo/18.jpg"
                        class="img-fluid blur-up lazyload" alt="" /></a>
                    </div>
                  </div>

                  <div class="menu-right pull-right">
                    <div>
                      <nav id="main-nav">
                        <div class="toggle-nav"><i onClick={() => this.mobileNav()} class="fa fa-bars sidebar-bar"></i></div>
                        <ul id="main-menu" class="sm pixelstrap sm-horizontal">
                          <li>
                            <div class="mobile-back text-right">Back<i class="fa fa-angle-right pl-2"
                              aria-hidden="true"></i></div>
                          </li>
                          <li >
                            <a onClick={()=>this.handleNext("/")}>Home</a>

                          </li>

                          <li>
                            <a href="#">SHOP</a>
                            <ul>
                              {this.state.Categorys.map((item, key) => {
                                return (


                                <React.Fragment>

                                
                                <li>
                                <a  onClick={()=>this.handleNext("/Category/"+item.id +"/"+item.name)}><span class="new-tag"> {item.name} </span></a>
                                <GetSubCategory CategoryID={item.id}  />
                                </li>

                                </React.Fragment>
                                 

                                )
                              })}
                            </ul>
                          </li>
                          


                        </ul>
                      </nav>
                    </div>
                    <div>



                      <div class="icon-nav">
                        <ul>
                          <li onClick={() => this.handleNext("/Search")} class="onhover-div mobile-search">
                            <div><img src="/assets/images/icon/search.png" onClick={() => this.handleNext("/Search")}
                              class="img-fluid blur-up lazyload" alt="" /> <i class="ti-search" ></i></div>

                          </li>
                          <li class="onhover-div mobile-setting">
                            <div><img src="/assets/images/icon/setting.png"
                              class="img-fluid blur-up lazyload" alt="" /> <i
                                class="ti-settings"></i></div>

                          </li>
                          <li onClick={() => this.handleNext("/Cart")} class="onhover-div mobile-cart">

                            <div>

                              <img src="/assets/images/icon/cart.png"
                                class="img-fluid blur-up lazyload" alt="" />

                              <i class="ti-shopping-cart"></i>

                            </div>

                            <div class="show-div  btn btn-solid" style={{ alignSelf: 'center', padding: 10, alignItems: 'center' }} >



                              {this.state.cartValue === 0 ? null :
                                (<a style={{ textAlign: 'center' }} >
                                  {this.state.cartValue} ITEM IN CART</a>)
                              }



                            </div>






                          </li>

                        </ul>
                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>



        <div style={{marginTop:window.innerWidth<'720'?100:135}}>
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

 
}




  openNav() {

    document.getElementById("mySidenav").classList.add('open-side');

    if ($(window).width() > '1200') {
      $('#hover-cls').hover(
        function () {
          $('.sm').addClass('hover-unset');
        }
      )

    }
    if ($(window).width() > '1200') {
      $('#sub-menu > li').hover(
        function () {
          if ($(this).children().hasClass('has-submenu')) {
            $(this).parents().find('nav').addClass('sidebar-unset');
          }
        },
        function () {
          $(this).parents().find('nav').removeClass('sidebar-unset');
        }
      )
    }

  }
  closeNav() { document.getElementById("mySidenav").classList.remove('open-side'); }

  mobileNav() {

    $('.toggle-nav').on('click', function () {
      $('.sm-horizontal').css("right", "0px");
    });
    $(".mobile-back").on('click', function () {
      $('.sm-horizontal').css("right", "-410px");
    });

    



  }


  /*=====================
   24. add to cart sidebar js
   ==========================*/
  // openCart() {
  //   document.getElementById("cart_side").classList.add('open-side');
  // }

  // closeCart() {
  //   document.getElementById("cart_side").classList.remove('open-side');
  //   // window.location.reload(); 
  // }


}



export default withRouter(Header);
