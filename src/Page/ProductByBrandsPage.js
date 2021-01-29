import React, { Component } from 'react';
import { withRouter,} from "react-router-dom";





import Header from '../component/Header';


import ProductByBrands from '../component/ProductByBrands';

import Cookies from 'universal-cookie';
const cookies = new Cookies()



class ProductByBrandsPage extends Component{
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
  
    <ProductByBrands CartHandler={this.setCatValue}/>

    </React.Fragment>

    
  
   );
}

}

export default withRouter(ProductByBrandsPage);
