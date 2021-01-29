import React, { Component } from 'react';
import  { useState } from 'react';

import SplshImage from './SplshImage';

import { Redirect ,Link,withRouter} from 'react-router-dom';
import URL from '../URL'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Cookies from 'universal-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';

const cookies = new Cookies()


class CheackOut extends Component{
  constructor(props) {

    super(props);

      this.state = {
        clickedPaymen:false,
        isloaded:false,
        UserID:null, 
        UserAddressData:null, 
        addressId:1,
        iscouponApplied:0,
        couponMsg:'',
        CouponValue:'',
        couponId:'',
        totalAmount:0,
        FinalTotalAmount:0,
        afterDiscountTotal:0,
        delcharge:0,
        delMinimumPrice:0,
        FinalTotal:0,
        isDevApplied:'NONE',
        PaymentMode:'COD',


      }
      this.handleNext = this.handleNext.bind(this);
      this.handleBack = this.handleBack.bind(this); 
      this.onChange = this.onChange.bind(this);
      this.onChangePlaceMode = this.onChangePlaceMode.bind(this);




  }
  handleBack() {

    this.props.history.goBack();

  }

  handleNext(Routation)
  {
    this.props.history.push(Routation);
  }



  onChange(e) {
    if (e.target.id === 'coupon') {
    this.setState({ CouponValue: e.target.value,iscouponApplied:0 });
    } 

}

onChangePlaceMode(e) {
  if (e.target.id === 'payment-2') {
  this.setState({ PaymentMode: e.target.value, });
  
  }
  if (e.target.id === 'payment-3') {
    this.setState({ PaymentMode: e.target.value, });
    
    }
  
}

fetchPrice(){

  this.setState({isLoad:true})
  fetch(URL+"/APP-API/Product/GetPlaceOrderPrice",{
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
     


     this.setState({

      totalAmount:responseJson.totalAmount,
      afterDiscountTotal:responseJson.afterDiscountTotal,
      delcharge:responseJson.delcharge,
      delMinimumPrice:responseJson.delMinimumPrice,
      FinalTotal:responseJson.FinalTotal,
      FinalTotalAmount:responseJson.FinalTotal,
      isDevApplied:responseJson.isDevApplied,
      isloaded:true

     })

    


     
     
   })
   .catch((error) => {
     //  console.error(error);
        
   });
  
}

  async componentDidMount()
  {

    var isLogged = await cookies.get('isLogged')

    // alert(isLogged)
  
    if(isLogged===undefined)
    {
      // alert('not loged')

      this.handleNext("/Login")
  


    }
  
    var user_name = await cookies.get('user_name');
    var user_mobile_number = await cookies.get('user_mobile_number');

    var UserID = await cookies.get('UserID');
    this.setState({user_name,user_mobile_number,UserID})

    this.FetchAllAddress()
    this.fetchPrice()

  }

  FetchAllAddress(){

    fetch(URL+"/APP-API/App/getAllAddress",{
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
         
        
        if(responseJson.address[0]==undefined)
        {
            this.handleNext("/Add-Address/Checkout")
            this.setState({UserAddressData:null,})


        }
        else
        {
            this.setState({UserAddressData:responseJson.address,addressId:responseJson.address[0].address_id,})

        }

        
       
      
         
         
       })
       .catch((error) => {
         //  console.error(error);
            
       });
      
  
    }


//     <div onClick={()=>this.setState({PaymentMode:'online'})} className="col-12 col-md-6 col-lg-4 col-xl-4  p-2">
// <div class="card border-0 shadow-sm">
// <div class="card-body">
// <div className="row ">
// <div className="col-4 col-md-4 col-lg-4 col-xl-4">
// {this.state.PaymentMode=='online'?
// (
//   <button class="btn btn-default button-rounded-36 shadow"><i class="material-icons">adjust</i></button>

// ):
// (
//   <button class="btn btn-dark button-rounded-36 shadow"><i class="material-icons">adjust</i></button>

// )}

// </div>
// <div className="col-8 col-md-8 col-lg-8 col-xl-8">

// <h5 class="mt-1"> Online Payment </h5>
// </div>

// </div>
// </div>
// </div>
// </div>



onChangeDate = dates => {
alert(dates)
};

todayDate()
{var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;
return today
}
  render() {

   
if(this.state.isloaded===false)
{
  return <SplshImage/>;
}
else
{

 

    return ( 


      <React.Fragment>
      <ToastContainer />


      <div class="breadcrumb-section">
      <div class="container">
          <div class="row">
              <div class="col-sm-6">
                
              </div>
              <div class="col-sm-6">
                  <nav aria-label="breadcrumb" class="theme-breadcrumb">
                      <ol class="breadcrumb">
                          <li class="breadcrumb-item"><a onClick={() => this.handleBack()}>BACK</a></li>
                          <li class="breadcrumb-item active" aria-current="page">Check-out</li>
                      </ol>
                  </nav>
              </div>
          </div>
      </div>
  </div>

  <section class="section-b-space">
  <div class="container">
      <div class="checkout-page">
          <div class="checkout-form">
              <form>
                  <div class="row">
                      <div class="col-lg-6 col-sm-12 col-xs-12">
                      <div class="checkout-title">
                      <button 
      onClick={()=>this.handleNext("/Add-Address/Checkout")}
    
       type="button" class="btn btn-solid mb-2 "> ADD NEW ADDRESS</button>

                      </div>
                          <div class="checkout-title">
                              <h3>Billing Details</h3>
                          </div>
                         

{this.state.UserAddressData===null?
  (
    <div class="media-body">
   
    <h6 class="subtitle mt-4 mb-1">No Address Yet</h6>
    
</div>

):(


<div >

{this.state.UserAddressData.map((item, key) => {
  return (
    <div onClick={()=>this.setState({addressId:item.address_id})} className=" shadow-lg rounded my-2">
  <div className="card shadow-lg border-0  p-4"> 
    <h6 className="small">Address {key+1} </h6>

<div className="card-body">
          <h6 class="mb-1"> {item.name} </h6>
          <p class="mb-2 text-secondary"> {item.address} </p>
          <p class="small"> {item.zipcode} , {item.city}, {item.phone} ,{item.alternative_phone} </p>
  </div>


{this.state.addressId === item.address_id?
(
    <div class=" row"> 
    <div class="col-lg-6 col-sm-6 col-xs-6">
    <h6 class="text-center mt-1 btn btn-success disable">Selected Delivery Address </h6> 
    </div>
    
    <div class="col-lg-6 col-sm-6 col-xs-6">
    <h6 onClick={() => this.handleNext("/Edit-Address/Checkout/"+item.address_id)} class="text-center mt-1 btn btn-primary " >Edit</h6>
    </div>
    </div>
  

)
:(   <div class=" row"> 
<div class="col-lg-6 col-sm-6 col-xs-6">
<h6 class="text-center mt-1 btn btn-dark disable"> Delivery on this address </h6> 
</div>

<div class="col-lg-6 col-sm-6 col-xs-6">
<h6 onClick={() => this.handleNext("/Edit-Address/Checkout/"+item.address_id)} class="text-center mt-1 btn btn-primary " >Edit</h6>
</div>
</div>)}


  </div>
  </div>
  )
})}
</div>
)}

                      </div>
                      <div class="col-lg-6 col-sm-12 col-xs-12 ">
                          <div class="checkout-details shadow-lg">
                              <div class="order-box">
                           
                                
                                  <ul class="sub-total">
                                      <li>Subtotal <span class="count">₹ {this.state.afterDiscountTotal}</span></li>
                                      <li>Shipping
                                          <div class="shipping">
                                          
                                                  <label for="free-shipping">₹ {this.state.isDevApplied=='NO'?'0':this.state.delcharge}</label>
                                           
                                          </div>
                                      </li>

                                      <div class=" row my-3" > 
                                      <div class="col-lg-6 col-sm-6 col-xs-6 my-2">
                                      <input type="text"  onChange={this.onChange} id="coupon" class="form-control" placeholder="Apply Coupon Code" required="" />
                                      </div>
                                      
                                      <div class="col-lg-6 col-sm-6 col-xs-6 my-2">
                                      {this.state.iscouponApplied==0 ?
                                        (
                                          <a 
                                          onClick={()=>this.AppliedCouponAction()}
                                           class="btn btn-solid shadow">APPLY</a>
                                        ):null}
                                      </div>
                                      </div>

                                      <li>Total
                                      <div class="shipping">
                                      
                                              <label for="free-shipping">₹ {this.state.FinalTotal}</label>
                                       
                                      </div>
                                  </li>
                                  </ul>
                                
                                  <ul>
                                  {this.state.isDevApplied=='YES' ?
  (
<div class="alert alert-primary mt-2" role="alert">
* Delivery free over on  ₹ {this.state.delMinimumPrice}
</div>
)
:null}



{this.state.iscouponApplied==1 ?
  (
<div class="alert alert-success mt-1" role="alert">
{this.state.CouponValue} applied successfully 
</div>
)
:null}

{this.state.iscouponApplied==1 ?
  (

<div class="alert alert-success mt-1" role="alert">
{this.state.couponMsg}
</div>
)
:null}
                                  </ul>
                                  <ul class="total">
                                      
                               
                                  <li>Net Total <span class="count">₹ {this.state.FinalTotalAmount}</span></li>
                              </ul>
                              </div>

                              <div class="payment-box">
                              <div class="upper-box">
                                  <div class="payment-options row my-3">
                                  <div class="col-lg-6 col-sm-6 col-xs-6 my-2">
                                  <label for="free-shipping">Delivery Date</label>

                              <DatePicker
  selected={new Date()}
  onChange={date => this.onChangeDate(date)}
  minDate={new Date()}
  maxDate={new Date().setDate(new Date().getDate() + 5)}
  placeholderText="Select a date between today and 5 days in the future"
/>
</div>

<div class="col-lg-6 col-sm-6 col-xs-6 my-2">
<label for="free-shipping">Delivery Time</label>

<DatePicker
selected={  new Date().setHours(10)}
onChange={date => this.onChangeDate(date)}
minTime={new Date().setHours(8)}
maxTime={new Date().setHours(20)}
showTimeSelect
showTimeSelectOnly
timeIntervals={60}
timeCaption="Time"
dateFormat="h:mm aa"
/>
</div>
                          

                              </div>
                              </div>
                              </div>

                              <div class="payment-box">
                                  <div class="upper-box">
                                      <div class="payment-options">
                                          <ul>
                                              <li>
                                            
                                              </li>
                                              <li>
                                                  <div class="radio-option">
                                                      <input onChange={this.onChangePlaceMode} type="radio" value={this.state.PaymentMode} name="payment-group" id="payment-2"/>
                                                      <label for="payment-2">Cash On Delivery<span
                                                              class="small-text">Please send a check to Store
                                                              Name, Store Street, Store Town, Store State /
                                                              County, Store Postcode.</span></label>
                                                  </div>
                                              </li>
                                              <li>
                                                  <div class="radio-option paypal">
                                                      <input onChange={this.onChangePlaceMode} type="radio" value="online" name="payment-group" id="payment-3"/>
                                                      <label for="payment-3">Online<span class="image"><img
                                                                  src="/assets/images/paypal.png"
                                                                  alt=""/></span></label>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="text-right">
                                  {this.state.clickedPaymen==false?(
                                    <a onClick={()=>this.PlaceThisOrderFinal()} class="btn btn-lg btn-solid text-white shadow"><span>Place Order</span></a>
                            
                                  ):null}
                                  </div>
                              
                              </div>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>
   
      </React.Fragment>
    );
  }

}

async RazorPay  () {
   
    // Getting the order details back
    // const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_live_NFK2oQGRZ18riT", // Enter the Key ID generated from the Dashboard
        amount: 1*100,
        currency: "INR",
        name: "Bharat Bazaar.",
        description: "Test Transaction",
        // image: { logo },
        // order_id: 345434,
        "handler": function (response){
          alert(response.razorpay_payment_id);
      },
        prefill: {
           name: await cookies.get('user_name'),
          "contact": await cookies.get('user_mobile_number'),
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
     paymentObject.open();
}

async AppliedCouponAction (){



  this.setState({isLoadCoupon:true})
  fetch(URL+"/APP-API/Product/CouponAction",{
    method:'post',
    header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({

       
       coupon:this.state.CouponValue,
       UserID:this.state.UserID
      
     
    })
    
  })
   .then((response) => response.json())
   .then((responseJson) => {
     
    console.log('coupon result',responseJson)
    
    this.setState({ isLoadCoupon:false})

    if(responseJson.status=='NoCoupon'){

      var msgPopPup = '** Please enter valid coupon code';
      toast.error(msgPopPup)
 
    }

    if(responseJson.status=='expaird'){

      var msgPopPup = '** Expired Coupon Code';
      toast.error(msgPopPup)

    }

    if(responseJson.status=='vailed'){

      var msgPopPup = '** Valid Coupon Code';
      toast.success(msgPopPup)

      if(responseJson.userStatus=='used'){

        var msgPopPup = '** You already used this coupon code';
        toast.error(msgPopPup)

      }


      if(Number(responseJson.data[0].minimum_order_amount)>Number(this.state.totalAmount))

{

       var msgPopPup = "COUPON VAILD ONLY ON MORE THAN ₹ "+Math.floor(responseJson.data[0].minimum_order_amount);
        toast.error(msgPopPup)


}
else
{
  // console.log('TOTAL IS OK',)
  if(responseJson.data[0].coupon_type=='percentage'){

   


const  discount = this.state.afterDiscountTotal * (Math.floor(responseJson.data[0].coupon_discount) / 100)
const  net = this.state.afterDiscountTotal - Math.round(discount)

var msg = 'You got ' +Math.floor(responseJson.data[0].coupon_discount) +' % OFF  ₹ ' +Math.round(discount)+' Save'

if(this.state.isDevApplied=='NO')
{
  this.setState({FinalTotalAmount:net,iscouponApplied:1,couponMsg:msg,couponId:responseJson.data[0].coupon_id})
}
else
{
  this.setState({FinalTotalAmount:net + Math.floor(this.state.delcharge) ,iscouponApplied:1,couponMsg:msg,couponId:responseJson.data[0].coupon_id})
}

    

   
  }
  else if(responseJson.data[0].coupon_type=='amount')
  {
    var msg = 'You got ₹' +Math.floor(responseJson.data[0].coupon_discount) +' OFF '

    this.setState({FinalTotalAmount:this.state.FinalTotalAmount-responseJson.data[0].coupon_discount,iscouponApplied:1,couponMsg:msg,couponId:responseJson.data[0].coupon_id})

  }
  else if(responseJson.data[0].coupon_type=='freeshiping')
  {
    if(this.state.isDevApplied=='NO')
    {

      var msgPopPup = "Free Shipping applied already";
      toast.error(msgPopPup)

  
    }
    else
    {
      var msg = 'You got free shipping ₹' +Math.floor(this.state.delcharge) +' OFF '
      this.setState({FinalTotalAmount:this.state.FinalTotalAmount-this.state.delcharge,iscouponApplied:1,couponMsg:msg,couponId:responseJson.data[0].coupon_id})

    }

 

  }

}

    }

    if(responseJson.userStatus=='used'){

      var msgPopPup = '** You already used this coupon code';
      toast.error(msgPopPup)
    
    }




    
    




    


     
     
   })
   .catch((error) => {
     //  console.error(error);
        
   });
  
  
}   




 
PlaceThisOrderFinal()
{

this.setState({clickedPaymen:true})
  
  if(this.state.PaymentMode=='COD')
  {




    fetch(URL+"/APP-API/Product/CODPayment",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

        AddressId:this.state.addressId,
        UserID:this.state.UserID,
        FinalTotalAmount:this.state.FinalTotalAmount,
        iscouponApplied:this.state.iscouponApplied,
        PaymentMode:this.state.PaymentMode,
        couponId:this.state.couponId,
        isDevApplied:this.state.isDevApplied,
        delcharge:this.state.delcharge
     
    })
    
  })
   .then((response) => response.json())
   .then((responseJson) => {
    this.setState({clickedPaymen:false})

    
    // console.log('Payment Server',responseJson)

   if(responseJson.status=='Success'){
   
   
    var msgPopPup = '** Order Placed Successfull';
    toast.success(msgPopPup)

let that = this.props;

setTimeout(function(){



that.history.push("/Order")


}, 700);






   

   

 
 
 
   }
   else{
    
    
    var msgPopPup = '** Network Problem';
    toast.error(msgPopPup)
  

   }
    

    
   
  
     
     
   })
   .catch((error) => {
     //  console.error(error);
        
   });
  


  }
  else if(this.state.PaymentMode=='online'){
this.RazorPay()
    // this.setState({orderclicked:true})
    // fetch(URL+"/APP-API/Product/TemperaryPayment",{
    //   method:'post',
    //   header:{
    //     'Accept': 'application/json',
    //     'Content-type': 'application/json'
    //   },
    //   body:JSON.stringify({

    //     AddressId:this.state.addressId,
    //     UserID:this.state.UserID,
    //     FinalTotalAmount:this.state.FinalTotalAmount,
    //     iscouponApplied:this.state.iscouponApplied,
    //     PaymentMode:this.state.PaymentMode,
    //     couponId:this.state.couponId,
    //     isDevApplied:this.state.isDevApplied,
    //     delcharge:this.state.delcharge

        
       
    //   })
      
    // })
    //  .then((response) => response.json())
    //  .then((responseJson) => {
       
    //   this.setState({clickedPaymen:false})

    //   // console.log('Payment Server',responseJson)

    //  if(responseJson!==''){
    
     
    //   this.sendToPayemt(responseJson)
    
    //  }
    //  else{
     
  
    //    var msgPopPup = '** Network Problem';
    //    toast.error(msgPopPup)
    //  }
      
  
      
     
    
       
       
    //  })
    //  .catch((error) => {
    //    //  console.error(error);
          
    //  });
    





  }

}



}

export default withRouter(CheackOut);