
import React,{Component} from 'react';
import URL from '../URL'
import { withRouter } from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import SplshImage from './SplshImage';
import {Img} from 'react-image'

import Cookies from 'universal-cookie';
const cookies = new Cookies();


class MultipleProduct extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        isloaded:false,
        UserID:null,
        productId:null,
        category:[],
        house:[],
        personal:[],
        Bevarage:[],
      }
      this.onChange = this.onChange.bind(this);

      this.handleNext = this.handleNext.bind(this);


    }
 
    handleNext(categoryId,categoryname) {
        const Routation = "/SubCategorys/"+categoryId+"/"+categoryname;
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

      this.fetchcategorysGrocery()
      this.fetchcategorysHouse()
      this.fetchcategoryspersonal()
      this.fetchcategorysBevarage()
    

  }
 
  fetchcategorysGrocery()
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
  fetchcategorysHouse()
  {
   fetch(URL+"/APP-API/Product/GetStoreSubCategoryByID",{
     method:'post',
     header:{
       'Accept': 'application/json',
       'Content-type': 'application/json'
     },
     body:JSON.stringify({
       
      cats_id:28

     })
     
   })
    .then((response) => response.json())
    .then((responseJson) => {
      
     
       // console.log('category',responseJson.image)
 
     this.setState({ house: responseJson.data , });
 
 
      
      
      
    })
    .catch((error) => {
       console.error(error);
         
    });
    
  }
  fetchcategoryspersonal()
  {
   fetch(URL+"/APP-API/Product/GetStoreSubCategoryByID",{
     method:'post',
     header:{
       'Accept': 'application/json',
       'Content-type': 'application/json'
     },
     body:JSON.stringify({
       
      cats_id:39

     })
     
   })
    .then((response) => response.json())
    .then((responseJson) => {
      
     
       // console.log('category',responseJson.image)
 
     this.setState({ personal: responseJson.data , });
 
 
      
      
      
    })
    .catch((error) => {
       console.error(error);
         
    });
    
  }
  fetchcategorysBevarage()
  {
   fetch(URL+"/APP-API/Product/GetStoreSubCategoryByID",{
     method:'post',
     header:{
       'Accept': 'application/json',
       'Content-type': 'application/json'
     },
     body:JSON.stringify({
       
      cats_id:56

     })
     
   })
    .then((response) => response.json())
    .then((responseJson) => {
      
     
       // console.log('category',responseJson.image)
 
     this.setState({ Bevarage: responseJson.data ,isloaded:true });
 
 
      
      
      
    })
    .catch((error) => {
       console.error(error);
         
    });
    
  }
    render() { 


      if(this.state.isloaded===false)
      {
        return <SplshImage/>;
      }
      else
      {
    
    
    return (
        <section style={{marginBottom:50}} class="">
        <div class="container">
            <div class="row multiple-slider">
                <div class="col-lg-6 col-sm-6 my-2">
                    <div class="theme-card">
                        <h5 class="title-border">GROCERY AND STAPLES</h5>
                        <div >
                        <div  class="row margin-res " style={{ margin: 5 }}>
                               
                            { this.state.category.slice(0,4).map((item, key) => {
                                return (
                                  <div class="col-xl-6 col-6 " style={{ padding: 2, marginTop: 1 }}>
                                  <div class="product-box shadow-lg ">
                                    <div class="img-block  justify-content-center">
                                      <div class="front justify-content-center">
                                        <a onClick={() => this.handleNext(item.id, item.name)}>
                                        <Img src={URL + "/images/category_images/" + item.image} 
                                        class="img-fluid blur-up lazyload bg-img" 
                                        loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                        unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                        alt="" /></a>
                                      </div>
                                      <div class="back justify-content-center">
                                            <a onClick={() => this.handleNext(item.id, item.name)}>
                                        <Img src={URL + "/images/category_images/" + item.image} 
                                        class="img-fluid blur-up lazyload bg-img" 
                                        loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                        unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                        alt="" /></a>
                                      </div>
        
                                      <div class="center d-flex justify-content-center my-2" >
                                        <button onClick={() => this.handleNext(item.id, item.name)} class="shadow-lg btn btn-primary rounded" >{item.name}</button>
                                      </div>
                                    </div>
        
                                  </div>
                                </div>
                                  )
                                })}



                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 my-2 ">
                    <div class="theme-card">
                        <h5 class="title-border">HOUSEHOLD NEEDS</h5>
                        <div >
                            <div  class="row margin-res " style={{ margin: 5 }}>
                                
                            { this.state.house.slice(0,4).map((item, key) => { 
                                return (
                          <div class="col-xl-6 col-6 " style={{ padding: 2, marginTop: 1 }}>
                          <div class="product-box shadow-lg ">
                            <div class="img-block  justify-content-center">
                              <div class="front justify-content-center">
                                    <a onClick={() => this.handleNext(item.id, item.name)}>
                                        <Img src={URL + "/images/category_images/" + item.image} 
                                        class="img-fluid blur-up lazyload bg-img" 
                                        loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                        unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                        alt="" /></a>
                              </div>
                              <div class="back justify-content-center">
                                    <a onClick={() => this.handleNext(item.id, item.name)}>
                                        <Img src={URL + "/images/category_images/" + item.image} 
                                        class="img-fluid blur-up lazyload bg-img" 
                                        loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                        unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                        alt="" /></a>
                              </div>

                              <div class="center d-flex justify-content-center my-2" >
                                <button onClick={() => this.handleNext(item.id, item.name)} class="shadow-lg btn btn-primary rounded" >{item.name}</button>
                              </div>
                            </div>

                          </div>
                        </div>
                                  )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 my-2">
                    <div class="theme-card">
                        <h5 class="title-border">PERSONAL CARE</h5>
                        <div >
                        <div  class="row margin-res " style={{ margin: 5 }}>
                              
                            { this.state.personal.slice(0,4).map((item, key) => {
                                return (
                                  <div class="col-xl-6 col-6 " style={{ padding: 2, marginTop: 1 }}>
                                  <div class="product-box shadow-lg ">
                                    <div class="img-block  justify-content-center">
                                      <div class="front justify-content-center">
                                            <a onClick={() => this.handleNext(item.id, item.name)}>
                                        <Img src={URL + "/images/category_images/" + item.image} 
                                        class="img-fluid blur-up lazyload bg-img" 
                                        loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                        unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                        alt="" /></a>
                                      </div>
                                      <div class="back justify-content-center">
                                            <a onClick={() => this.handleNext(item.id, item.name)}>
                                        <Img src={URL + "/images/category_images/" + item.image} 
                                        class="img-fluid blur-up lazyload bg-img" 
                                        loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                        unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                        alt="" /></a>
                                      </div>
        
                                      <div class="center d-flex justify-content-center my-2" >
                                        <button onClick={() => this.handleNext(item.id, item.name)} class="shadow-lg btn btn-primary rounded" >{item.name}</button>
                                      </div>
                                    </div>
        
                                  </div>
                                </div>
                                  )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 my-2">
                    <div class="theme-card">
                        <h5 class="title-border">BEVERAGES</h5>
                        <div >
                        <div  class="row margin-res " style={{ margin: 5 }}>
                              
                            { this.state.Bevarage.slice(0,4).map((item, key) => {
                                return (
                                  <div class="col-xl-6 col-6 " style={{ padding: 2, marginTop: 1 }}>
                                  <div class="product-box shadow-lg ">
                                    <div class="img-block  justify-content-center">
                                      <div class="front justify-content-center">
                                            <a onClick={() => this.handleNext(item.id, item.name)}>
                                        <Img src={URL + "/images/category_images/" + item.image} 
                                        class="img-fluid blur-up lazyload bg-img" 
                                        loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                        unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                        alt="" /></a>
                                      </div>
                                      <div class="back justify-content-center">
                                            <a onClick={() => this.handleNext(item.id, item.name)}>
                                        <Img src={URL + "/images/category_images/" + item.image} 
                                        class="img-fluid blur-up lazyload bg-img" 
                                        loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                        unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                        alt="" /></a>
                                      </div>
        
                                      <div class="center d-flex justify-content-center my-2" >
                                        <button onClick={() => this.handleNext(item.id, item.name)} class="shadow-lg btn btn-primary rounded" >{item.name}</button>
                                      </div>
                                    </div>
        
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

        )
    }};

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

export default withRouter(MultipleProduct);
