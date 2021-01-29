import React, { Component } from 'react';
import {  Link, withRouter} from "react-router-dom";




import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Footer from '../component/Footer';



import Cookies from 'universal-cookie';
const cookies = new Cookies()


class Skyably extends Component{
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
    <div>


    <Sidebar/>
  
    <div class="wrapper">
    <Header/>
  
    <div class="container">

    <div class="col mt-1">
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb bg-dark">
    <li class="breadcrumb-item">
    <Link to="/"  > 
        <a  class="text-white">Home</a>
    </Link>
    </li>
    
        <li class="breadcrumb-item">
            <a >Skyably</a>
        </li>
       
    </ol>
    </nav>
    </div>


    <iframe src="https://skyably.com/" width="100%" height="600" ></iframe>

    </div>

    <Footer    cartValue={this.state.UserHaveInCart} />
    
    </div>
    
    
  


    </div>
   );
}

}

export default withRouter(Skyably);
