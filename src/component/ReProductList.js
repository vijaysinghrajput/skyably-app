
import React,{Component} from 'react';
import URL from '../URL'
import { withRouter } from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class ReProductList extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        UserID:null,
        productId:null,
        SaverTodayDetails:[],
        category:[]
      }
      this.onChange = this.onChange.bind(this);

      this.handleNext = this.handleNext.bind(this);


    }
    handleNext(Routation)
    {
      this.props.history.push(Routation);
    }
  



  productDetailsAction(productId) 
{

  this.handleNext("/Products/"+productId)

}


 async componentDidMount()
  {

      var UserID = await cookies.get('UserID');
    
       this.setState({UserID:Number(UserID)})

      this.fetchSaverProducts()
      this.fetchcategorys()
    

  }
 

  fetchSaverProducts()
  {
    fetch(URL+"/APP-API/Product/GetAllSaverProduct",{
      method:'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          
          UserID:this.state.UserID

         
        })
        
      })
       .then((response) => response.json())
       .then((responseJson) => {
         
        
        console.log('Categorys',responseJson)
    
        this.setState({ SaverTodayDetails: responseJson.slice(0,12)  });
    
    
         
         
         
       })
       .catch((error) => {
         //  console.error(error);
            
       });
      
 
  }

  fetchcategorys()
  {
   fetch(URL+"/APP-API/Product/GetStoreSubCategoryByID",{
     method:'post',
     header:{
       'Accept': 'application/json',
       'Content-type': 'application/json'
     },
     body:JSON.stringify({
       
      cats_id:17

     })
     
   })
    .then((response) => response.json())
    .then((responseJson) => {
      
     
       // console.log('category',responseJson.image)
 
     this.setState({ category: responseJson.data , });
 
 
      
      
      
    })
    .catch((error) => {
       console.error(error);
         
    });
    
  }

    render() { 



    
    return (
      <div>
      <section class="tools_product bg-title section-b-space">
      <div class="container">
          <div class="row multiple-slider">
              <div class="col-xl-4 col-lg-4 col-md-12">
                  <div class="theme-card">
                      <h5 class="title-border">Under $20 | Free delivery</h5>
                      <div class="offer-slider slide-1">
                          <div>

                   

                        { this.state.category.slice(0,5).map((item, key) => {
                            return (
                              <div class="media">
                                  <a href="product-page(no-sidebar).html"><img class="img-fluid blur-up lazyload"
                                 src={URL+"/images/category_images/"+item.image} alt=""/></a>
                                  <div class="media-body align-self-center">
                                      
                                      <a href="product-page(no-sidebar).html">
                                      <h6> { item.name} </h6>
                                      </a>

                                  </div>
                                  
                              </div>
                              )
                            })}
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-8 col-lg-8 col-md-12">
                  <div class="theme-tab">
                      <div class="bg-title-part">
                          <h5 class="title-border">RECOMMENDATIONS FOR YOU</h5>
                          
                      </div>
                      <div class="container">
                      <div class="row game-product grid-products">

                              { this.state.SaverTodayDetails.slice(0,9).map((item, key) => {
                                return (
                                    
                            <div class="product-box col-xl-4 col-lg-4 col-sm-6 col-6">
                                <div class="img-wrapper">
                                    <div class="front">
                                        <a href="product-page(no-sidebar).html"><img style={{height:200}}  src={URL+"/images/product-images/"+item.product_image}
                                                class="img-fluid blur-up lazyload bg-img" alt=""/></a>
                                    </div>
                                 
                                    <div  onClick={() => this.isCartCheckedOrNot(item,key,)}  class="add-button" data-toggle="modal" data-target="#addtocart">add to cart</div>
                                </div>
                                <div class="product-detail">
                                
                                    <a href="product-page(no-sidebar).html">
                                        <h6>{item.product_name.substring(0, 11)}</h6>
                                    </a>
                                    
                                    <h4><del>₹ {item.price}</del><span>  ₹ {this.discountedPrice(item.price,item.discount)} </span></h4>
                                    
                                
                                </div>
                            </div>
                            
                            
                                  )
                            })}

                              </div>


                    


                      </div>



                  </div>
                 
              </div>
          </div>
      </div>
  </section>
      </div>

        )};

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
      // alert(isLogged)
      if(isLogged===undefined)
      {
        // alert('not loged')
        this.handleNext("/Login")

    


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
          this.fetchSaverProducts()
          
         

        })

  }


  async deleteCartItem(productId)
  {


    this.props.CartHandler(-1);


   await this.setState(state => ({
      SaverTodayDetails: state.SaverTodayDetails.map(q => {
        if (q.id === productId) {
          return {...q, addedtocart: 0,};
        }
        return q;
      })
    }), () => {
      // console.log(this.state.SaverTodayDetails[1]);
    });
 
   await this.setState(state => ({
      SaverTodayDetails: state.SaverTodayDetails.map(q => {
        if (q.id === productId) {
          return {...q, cartQunatity: 1,};
        }
        return q;
      })
    }), () => {
      // console.log(this.state.SaverTodayDetails[1]);
    });


 



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
       
      
this.fetchSaverProducts()

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


      })

}

}  

  }

export default withRouter(ReProductList);
