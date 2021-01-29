
import React,{Component} from 'react';
import URL from '../URL'
import { Redirect,Link ,withRouter} from 'react-router-dom';
import * as NumericInput from "react-numeric-input";


import SplshImage from './SplshImage';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Cart extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        UserID:null,
        isloaded:false,
        productId:null,
        UserHaveInCart:0,
        afterDiscountTotal:0,
        totalAmount:0,
        SaverTodayDetails:null
      }
      this.onChange = this.onChange.bind(this);
      this.handleNext = this.handleNext.bind(this);


  }

  handleNext(Routation)
  {
    this.props.history.push(Routation);
  }





 async componentDidMount()
  {

      var UserID = await cookies.get('UserID');
     
       this.setState({UserID:Number(UserID)})

   
       this.getCartAndWishCount()
       this.fetchCartData()
       this.GetCartPrice()
   
    

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
 

  
  fetchCartData(){

    fetch(URL+"/APP-API/Product/GetCartProduct",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

        // store_code:this.state.Store_code,
         UserID:this.state.UserID,
        
       
      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      
        //  console.log('cart data',responseJson)

            this.setState({SaverTodayDetails:responseJson,isloaded:true});

             
          
    
    
    })
   
     .catch((error) => {
       //  console.error(error);
          
     });

  
    

  }

  GetCartPrice(){
    fetch(URL+"/APP-API/Product/GetCartPrice",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
  
        // store_code:this.state.Store_code,
         UserID:this.state.UserID,
        
       
      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      
        //  console.log('cart data',responseJson)
  
            this.setState({totalAmount:responseJson.totalAmount,afterDiscountTotal:responseJson.afterDiscountTotal,});
  
             
  
    
    
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
        <React.Fragment >

        <div class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="page-title">
                        <h2>BACK</h2>
                    </div>
                </div>
                <div class="col-sm-6">
                    <nav aria-label="breadcrumb" class="theme-breadcrumb">
                        <ol class="breadcrumb">
                          
                            <li class="breadcrumb-item active">cart</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>



             {this.state.SaverTodayDetails==null?
                (
            <div className="mt-4 ">
        
          
           
            <div class="col text-center">

                <a onClick={()=>this.handleNext("/")} class="btn btn-danger" role="button">Shop Now</a>
            </div>
           
            </div>
                )
            :
        (
          <section class="cart-section section-b-space">
          <div class="container">
              <div class="row">
                  <div class="col-sm-12">
                      <table class="table cart-table table-responsive-xs">
                          <thead>
                              <tr class="table-head">
                                  <th scope="col">image</th>
                                  <th scope="col">product name</th>
                                  <th scope="col">price</th>
                                  <th scope="col">quantity</th>
                                  <th scope="col">action</th>
                                  <th scope="col">total</th>
                              </tr>
                          </thead>
                          <tbody>
                          {this.state.SaverTodayDetails.map((item, key) => {
                            return (
                       
                              <tr>
                                  <td>
                                      <a href="#"><img style={{ width: 100, height: 90 }} src={URL + "/images/product-images/" + item.product_image} alt=""/></a>
                                  </td>
                                  <td><a href="#">{item.product_name.substring(0, 12)} {item.product_size} {item.product_unit}</a>
                                      <div class="mobile-cart-content row">
                                          <div class="col-xs-3">
                                              <div class="qty-box">
                                                  <div class="input-group">
                                                  {item.addedtocart == 1 ? (

                                                    <div class="typo-content typo-buttons" role="group" aria-label="Second group">
                                                      <NumericInput
                                                        onChange={(e) => this.onChange(e, item.id, item.quantity)}
                                                        className="btn btn-solid center d-flex justify-content-center"
                                                        min={1}
                                                        size="10"
                                                        max={Number(item.quantity) <= 0 ? 1 : Number(item.quantity)}
                                                        value={Number(item.cartQunatity)}
                                                        step={1}
                                                        mobile
                                                        valueType='real'
                                                      />
                  
                                                    </div>
                                                  ) : null}
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="col-xs-3">
                                              <h5 class="td-color">₹ {this.discountedPrice(item.price, item.discount)}</h5>
                                          </div>
                                          <div class="col-xs-3">
                                              <h2 class="td-color"><a onClick={() => this.deleteCartItem(item.id)} class="icon"><i class="ti-trash"></i></a>
                                              </h2>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <h2> ₹ {this.discountedPrice(item.price, item.discount)}</h2>
                                  </td>
                                  <td>
                                      <div class="qty-box">
                                          <div class="input-group">
                                          {item.addedtocart == 1 ? (

                                            <div class="typo-content typo-buttons" role="group" aria-label="Second group">
                                              <NumericInput
                                                onChange={(e) => this.onChange(e, item.id, item.quantity)}
                                                className="btn btn-solid center d-flex justify-content-center"
                                                min={1}
                                                size="10"
                                                max={Number(item.quantity) <= 0 ? 1 : Number(item.quantity)}
                                                value={Number(item.cartQunatity)}
                                                step={1}
                                                mobile
                                                valueType='real'
                                              />
          
                                            </div>
                                          ) : null}
                                          </div>
                                      </div>
                                  </td>
                                  <td><a onClick={() => this.deleteCartItem(item.id)} class="icon"><i class="ti-trash"></i> </a></td>
                                  <td>
                                      <h2 class="td-color"> ₹   {Number(item.cartQunatity) * this.discountedPrice(item.price, item.discount)}</h2>
                                  </td>
                              </tr>

                   
                          )
                      })}
                      </tbody>
                      </table>
                      <div class="card border-0 shadow-sm">
 

                      <div class="card-body border-top-dashed">
                          <div class="row ">
                              <div class="col-4">
                                  <p class="text-secondary mb-1 small"> Total</p>
                                  <h5 class="mb-0">₹ {this.state.afterDiscountTotal}</h5>
                              </div>
                              <div class="col-4 text-center">
                                
                              </div>
                              <div class="col-4 text-right">
                                  <p class="text-secondary mb-1 small">Discount</p>
                                  <h5 class="mb-0">-₹ {this.state.totalAmount-this.state.afterDiscountTotal} </h5>
                              </div>
                          </div>
              
                      </div>
                  </div>
                  <div class="card mb-4 border-0 shadow-sm border-top-dashed">
                      <div class="card-body text-center">
                          <p class="text-secondary my-1">Net Payable</p>
                          <h3 class="mb-0">₹ {this.state.afterDiscountTotal}</h3>
                          <br/>
                      </div>
                  </div>
                  </div>
              </div>
              <div class="row cart-buttons" style={{marginBottom:30}}>
                  <div class="col-6"><a onClick={() => this.handleNext("/")}  class="btn btn-solid">continue shopping</a></div>
                  <div class="col-6"><a onClick={() => this.handleNext("/Checkout")}  class="btn btn-solid">check out</a></div>
              </div>
          </div>
      </section>
        )}
        
</React.Fragment>
        )}
        
    };

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
        this.setState({loginRedirect:true})


      }
else{





     this.setState(state => ({
      SaverTodayDetails: state.SaverTodayDetails.map(q => {
        if (q.id === item.id) {
          return {...q, addedtocart: 1};
        }
        return q;
      })
    }), () => {
      // console.log(this.state.SaverTodayDetails[1]);
    });

     this.setState(state => ({
      SaverTodayDetails: state.SaverTodayDetails.map(q => {
        if (q.id === item.id) {
          return {...q, cartQunatity: 1,};
        }
        return q;
      })
    }), () => {
 
    });

 
  
    this.props.CartHandler(1);

    this.addCartItem(item.id)
 
     
      
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


      const filteredProducts = this.state.SaverTodayDetails.filter(Product => {
     
        if(Product.id!==productId)
        {
          return Product;
        }
      
       
      });
      this.setState({ SaverTodayDetails: filteredProducts });

 



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
     .then(async (responseJson)  =>  {
       
      

await this.GetCartPrice()
this.fetchCartData()
this.getCartAndWishCount()

     })

  

  }

  async addQuantity(value,productId,quantity)
  {
if(Number(quantity)>0)
{

  await  this.setState(state => ({
    SaverTodayDetails: state.SaverTodayDetails.map(q => {
      if (q.id === productId) {
        return {...q, cartQunatity: value};
      }
      return q;
    })
  }), () => {
    // console.log(this.state.SaverTodayDetails[1]); 
  });





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

        this.GetCartPrice()
        this.fetchCartData()
        this.getCartAndWishCount()

      })

}

}  

  }

export default withRouter(Cart);
