
import React,{Component} from 'react';
import URL from '../URL'
import { withRouter } from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class ProductList extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        UserID:null,
        productId:null,
        SaverTodayDetails:[]
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

  getDate()
  {
    var today = new Date();

  var day = today.getDay();

  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return   days[day];


}

    render() { 



    
    return (
      <div>
 
      <div class="title1 section-t-space">
          <h4>special offer</h4>
          <h2 class="title-inner1">{this.getDate()}'s deal</h2>
      </div>
 
  
      <section class="pt-0 section-b-space ratio_asos">
          <div class="container">
              <div class="row game-product grid-products">
                  
                  
                  
                       { this.state.SaverTodayDetails.map((item, key) => {
                      return ( 
                          
                  <div class="col-xl-3 col-lg-3 col-sm-4 col-6 ">
                  <div class="product-box shadow-lg">
                        <div class="img-block  justify-content-center">


                        {Number(item.discount)!==0?
                          (
                          <div>
                          {item.discount % 1 === 0?(
                            <div class="lable-wrapper"><span class="lable1">{Math.round(item.discount)} %</span> <span class="lable2">
                            off</span></div>
                          ):(
                          <div class="lable-wrapper"><span class="lable1">{Number(item.discount).toFixed(2)} %</span> <span class="lable2">
                          off</span></div>
                          )} 
                          
                          </div>
                          ):null}


                      <div class="front justify-content-center">
                          <a onClick={() => this.productDetailsAction(item.id)}><img style={{width:"auto",margin:"auto",display:'block', height:200}} src={URL+"/images/product-images/"+item.product_image} class="img-fluid blur-up lazyload bg-img" alt=""/></a>
                      </div>
                      <div class="back justify-content-center">
                          <a onClick={() => this.productDetailsAction(item.id)}><img style={{width:"auto",margin:"auto",display:'block', height:200}} src={URL+"/images/product-images/"+item.product_image} class="img-fluid blur-up lazyload bg-img" alt=""/></a>
                      </div>

 

                       

                          <div class="product-detail center d-flex justify-content-center my-1">
                          <div>
                              <a >
                              {this.getTitle(item.product_name,item.product_size,item.product_unit)}
                           
                              </a>
                            
                              <h4><del>₹ {item.price}</del><span>  ₹ {this.discountedPrice(item.price,item.discount)} </span></h4>
                             
                          </div>
                        </div>


                        <div class="center d-flex justify-content-center my-2" >
                        {item.addedtocart==1?(
                
                          <div class="center d-flex justify-content-center">
                          <NumericInput 
                          onChange={(e) =>this.onChange(e,item.id,item.quantity)}
                          className="btn btn-solid center d-flex justify-content-center " 
                          min={0}
                          size="10"
                          max={Number(item.quantity)<=0?1:Number(item.quantity)}
                          value={Number(item.cartQunatity)}
                          step={1}
                          
                          mobile
                          valueType='real' 
                          />
                        
                         </div>
                          ):(
                        
                            <div>
                            <div  onClick={() => this.isCartCheckedOrNot(item,key,)}  class="btn btn-solid center d-flex justify-content-center">add to cart</div>
                            </div>
                         
                        
                            )}
                        </div>


                        </div>

                      </div>

                  </div>
                  
                  
                        )
                  })}
                  
                  
                  
   
              </div>
              <div class="product-pagination">
                                    
              <div class="row">
                  <div onClick={()=>this.props.history.push("/Offers")} class="col-xl-12 col-md-12 col-sm-12 btn btn-outline">
                  <a style={{textAlign:'center'}}> See All</a>
                  </div>
                 
              </div>
       
      </div>
          </div>

      
      </section>
      
      </div>

        )};

        getTitle(product_name,product_size,product_unit)
        {
          var heading = null;
          var contentwidth = window.innerWidth
          if ((contentwidth) < '750') {
             var heading = <h6>{product_name.substring(0, 15)} {product_size} {product_unit}</h6>
          } 
          else {
             var heading = <h6>{product_name.substring(0, 20)} {product_size} {product_unit}</h6>

          }

          return heading
      
          
      
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

export default withRouter(ProductList);
