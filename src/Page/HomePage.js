import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

import BrandList from '../component/BrandList';
import HomeSlider from '../component/HomeSlider';
import CategoryList from '../component/CategoryList';
import ProductList from '../component/ProductList';
import ReProductList from '../component/ReProductList';
import MultipleProduct from '../component/MultipleProduct';




import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Footer from '../component/Footer';

import Cookies from 'universal-cookie';
const cookies = new Cookies()

class HomePage extends Component{
  constructor(props) {

    super(props);

      this.state = {
        UserHaveInCart:0,
      }
      this.setCatValue = this.setCatValue.bind(this)

  }

  setCatValue(UserHaveInCart) {


    this.setState({
      UserHaveInCart:Number(this.state.UserHaveInCart)+UserHaveInCart
    })
    this.componentDidMount()
  }


  async componentDidMount()
  {



    var UserID = await cookies.get('UserID');
    
    this.setState({UserID:Number(UserID)})


    this.getCartAndWishCount()

    // window.location.reload();


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
        this.setState({UserHaveInCart:responseJson.cart,})
       
      
       

     })
     .catch((error) => {
       //  console.error(error);
          
     });
    
  }

  render() {
  return (
    <React.Fragment>

<Header  cartValue={this.state.UserHaveInCart}/>
<HomeSlider/>
<CategoryList/>
<ProductList CartHandler={this.setCatValue} />
<BrandList/>
<MultipleProduct />

  </React.Fragment>
   );
}

}

export default withRouter(HomePage);
