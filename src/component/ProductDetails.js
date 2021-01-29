import React, { Component } from 'react';
import SplshImage from './SplshImage';

import { Redirect ,withRouter,Link} from 'react-router-dom';
import { createHashHistory } from 'history'
import $ from 'jquery';
import URL from '../URL'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import * as NumericInput from "react-numeric-input";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const history = createHashHistory()


class ProductDetails extends Component{
  constructor(props) {

    super(props);

      this.state = {

        isloaded:false,
        UserID:null,
        SaverTodayDetails:[]
      }
      this.handleBack = this.handleBack.bind(this); 

      this.handleNext = this.handleNext.bind(this);


    }
    handleBack() {

      this.props.history.goBack();
  
    }

    handleNext(Routation)
    {
      this.props.history.push(Routation);
    }
  

  async componentDidMount()
  {


   
     var UserID = await cookies.get('UserID');
    
       this.setState({UserID:Number(UserID)})

    fetch(URL+"/APP-API/Product/GetStoreProductById",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

        store_code:this.state.Store_code,
        product_id:this.props.match.params.productId,
        UserID:this.state.UserID,
        
       
      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      
        // console.log('SaverTodayDetails',responseJson)
  
      this.setState({SaverTodayDetails:responseJson[0],isloaded:true});

      // this.fetcProductByCategory()
    
    
    })
   
     .catch((error) => {
       //  console.error(error);
          
     });

  }



  render() {

if(this.state.isloaded==false)
{
  return <SplshImage/>;
}
else
{

    return ( 


      <div className="shadow-lg">

      <div class="breadcrumb-section">
      <div class="container">
          <div class="row">
              <div class="col-sm-6">
                  <div class="page-title">
                      <h2  onClick={()=>this.handleBack()} >BACK</h2>
                  </div>
              </div>
              <div class="col-sm-6">
                  <nav aria-label="breadcrumb" class="theme-breadcrumb">
                      <ol class="breadcrumb">
                          <li class="breadcrumb-item active" aria-current="page">{this.state.SaverTodayDetails.product_name}</li>
                      </ol>
                  </nav>
              </div>
          </div>
      </div>
  </div>

  <section>
        <div class="collection-wrapper ">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="product-slick">
                            <div>
                                    <Carousel showArrows={true} showThumbs={false} showStatus={true}
                                    autoPlay={true}> 
    
  
                                    <img src={URL+"/images/product-images/"+this.state.SaverTodayDetails.product_image}  class="img-fluid blur-up lazyload image_zoom_cls-0" alt="" /> 
                                
                                
                                    </Carousel>         
                                    </div>
                            
                        </div>
                       
                    </div>
                    <div class="col-lg-6 rtl-text">
                        <div class="product-right">
                            <h2 class="mb-0">{this.state.SaverTodayDetails.product_name} {this.state.SaverTodayDetails.product_size} {this.state.SaverTodayDetails.product_unit}</h2>
                            
                            <h4><del>₹ {this.state.SaverTodayDetails.price}</del>
                            {this.state.SaverTodayDetails.discount % 1 === 0?(
                              <span>{Math.round(this.state.SaverTodayDetails.discount)}% off</span>
                          ):(
                            <span>5{Number(this.state.SaverTodayDetails.discount).toFixed(2)}% off</span>
                          )}
                           
                            
                            </h4>
                            <h3>₹ {this.discountedPrice(this.state.SaverTodayDetails.price,this.state.SaverTodayDetails.discount)}</h3>
                           
                            <div class="product-description border-product">
                             
                            
                                <div class="size-box">
                                    <ul>
                                        <li class="active"><a >{this.state.SaverTodayDetails.product_size} </a></li>
                                        <li><a >{this.state.SaverTodayDetails.product_unit}</a></li>
                                       
                                    </ul>
                                </div>
                                <h6 class="product-title">
                                {Number(this.state.SaverTodayDetails.quantity)<=Number(this.state.SaverTodayDetails.cartQunatity)?
                                  (
                                   
                                   <p class="text-danger ">Out of Stock</p>
                                
                                   ):(
                                    <p class="text-success ">In Stock</p>
                                   )}
                                </h6>
                                <div class="qty-box">
                                {this.state.SaverTodayDetails.addedtocart==1?(

                                  <div class="typo-content typo-buttons center d-flex justify-content-center ">
                                  <NumericInput 
                                  onChange={(e) =>this.onChange(e,this.state.SaverTodayDetails.id,this.state.SaverTodayDetails.quantity)}
                                  className="btn btn-solid  text-center " 
                                  min={0}
                                  size="10"
                                  max={Number(this.state.SaverTodayDetails.quantity)<=0?1:Number(this.state.SaverTodayDetails.quantity)}
                                  value={Number(this.state.SaverTodayDetails.cartQunatity)}
                                  step={1}
                                  
                                  mobile
                                  valueType='real' 
                                  />
                                
                                 </div>
                                  ):(
                                
                                    <div>
                                    <div  onClick={() => this.isCartCheckedOrNot(this.state.SaverTodayDetails)}  class="btn btn-solid">add to cart</div>
                                    </div>
                                
                                
                                    )}
      

                                </div>
                            </div>
      
                            <div class="border-product">
                                <h6 class="product-title">product details</h6>
                                <p>{this.state.SaverTodayDetails.products_description}</p>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
    );
  }

}
discountedPrice(price,dis)
{
const  discount = price * (dis / 100)
 const net = price - discount
 return Number(net).toFixed(0); 
}

onChange(counterValue,productId,quantity) {

  if(counterValue<=0)
  {
this.deleteCartItem(productId)
  }
else{
this.addQuantity(counterValue,productId,quantity)
}

}
  


   async isCartCheckedOrNot(item,index) {
      
      var isLogged = await cookies.get('isLogged')
      
      if(isLogged==null)
      {
        // alert('not loged')
        this.handleNext("/Login")


      }
else{



  this.setState(prevState => {
    let SaverTodayDetails = Object.assign({}, prevState.SaverTodayDetails);  // creating copy of state variable SaverTodayDetails
    SaverTodayDetails.addedtocart = 1;                     // update the name property, assign a new value                 
    return { SaverTodayDetails };                                 // return new object SaverTodayDetails object
  })

  this.setState(prevState => {
    let SaverTodayDetails = Object.assign({}, prevState.SaverTodayDetails);  // creating copy of state variable SaverTodayDetails
    SaverTodayDetails.cartQunatity = 1;                     // update the name property, assign a new value                 
    return { SaverTodayDetails };                                 // return new object SaverTodayDetails object
  })


  this.props.CartHandler(1);

    this.addCartItem(this.state.SaverTodayDetails.id)
 
     
      
}


  }

 

  addCartItem(productId)
  {
    fetch(URL+"/APP-API/Product/AddCart",{

         method:'post',
         header:{
           'Accept': 'application/json',
           'Content-type': 'application/json'
         },
         body:JSON.stringify({

          customerID:this.state.UserID,
          productId:productId,
          Store_code:this.state.Store_code,



         })
         
       })
        .then((response) => response.json())
        .then((responseJson) => {


          // console.log('Add cart res',responseJson)
          this.componentDidMount()
          
         

        })

  }


  async deleteCartItem(productId)
  {


     

    this.props.CartHandler(-1);

      this.setState(prevState => {
        let SaverTodayDetails = Object.assign({}, prevState.SaverTodayDetails);  // creating copy of state variable SaverTodayDetails
        SaverTodayDetails.addedtocart = 0;                     // update the name property, assign a new value                 
        return { SaverTodayDetails };                                 // return new object SaverTodayDetails object
      })
    
      this.setState(prevState => {
        let SaverTodayDetails = Object.assign({}, prevState.SaverTodayDetails);  // creating copy of state variable SaverTodayDetails
        SaverTodayDetails.cartQunatity = 1;                     // update the name property, assign a new value                 
        return { SaverTodayDetails };                                 // return new object SaverTodayDetails object
      })
    


    fetch(URL+"/APP-API/Product/AddCartRemove",{

      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

       customerID:this.state.UserID,
       productId:productId,
       Store_code:this.state.Store_code,
      
     
      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      
this.componentDidMount()

     })

  

  }

  async addQuantity(value,productId,quantity)
  {
if(Number(quantity)>0)
{



  this.setState(prevState => {
    let SaverTodayDetails = Object.assign({}, prevState.SaverTodayDetails);  // creating copy of state variable SaverTodayDetails
    SaverTodayDetails.cartQunatity = value;                     // update the name property, assign a new value                 
    return { SaverTodayDetails };                                 // return new object SaverTodayDetails object
  })






   await fetch(URL+"/APP-API/Product/AddCartIncrement",{

         method:'post',
         header:{
           'Accept': 'application/json',
           'Content-type': 'application/json'
         },
         body:JSON.stringify({

          customerID:this.state.UserID,
          productId:productId,
          Store_code:this.state.Store_code,
          qty:value
       })
       
     })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)


      })

}

}  

}

export default withRouter(ProductDetails);