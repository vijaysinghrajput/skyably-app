import React, { Component } from 'react';
import { withRouter,} from "react-router-dom";




import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Footer from '../component/Footer';

import ProductBySubCategory from '../component/ProductBySubCategory';

import Cookies from 'universal-cookie';
const cookies = new Cookies()



class ProductBySubCategoryPage extends Component{
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
    
    console.log('props',this.props)
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
  
    <ProductBySubCategory CartHandler={this.setCatValue}/>

    </React.Fragment>

    
  
   );
}

}

export default withRouter(ProductBySubCategoryPage);
