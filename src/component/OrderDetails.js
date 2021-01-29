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


class OrderDetails extends Component{
  constructor(props) {

    super(props);

      this.state = {

        isloaded:false,
        UserID:null,
        timePassed: false,
        showAlert:false,
        MyOrders:[],
        MyCalCulater:null,
        order_number:'wait..',
        address_id:'',
        order_date:null,
        Delivered_date:null,
        payment_status:'',
        Cancle_date:null,
        Order_status:null,
        DeliveryData:null,
        MyOrdersDetails:null

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
       const order_number =  this.props.match.params.order_number;
       const address_id =  this.props.match.params.address_id;
       const Order_status =  this.props.match.params.Order_status;
   
   
       this.setState({UserID:UserID,order_number:order_number,address_id,Order_status})
   
    
     await  this.fetchDeliveryInformation()
       this.fetchOrderDetailsById()
       this.fetchOrderDetailsData()
       this.CalCulatePaymentByON()


  }



  fetchOrderDetailsData(){


    fetch(URL+"/APP-API/Product/FetchOrdersByON",{
      method:'post',
      header:{'Accept': 'application/json','Content-type': 'application/json'},
      body:JSON.stringify({order_number:this.state.order_number}) })
     .then((response) => response.json())
     .then((responseJson) => { this.setState({MyOrders:responseJson}); })
     .catch((error) => {});


  }

  fetchOrderDetailsById(){


    fetch(URL+"/APP-API/Product/fetchOrderDetailsById",{
      method:'post',
      header:{'Accept': 'application/json','Content-type': 'application/json'},
      body:JSON.stringify({order_number:this.state.order_number}) })
     .then((response) => response.json())
     .then((responseJson) => { this.setState({MyOrdersDetails:responseJson[0]});console.log('delivery Address',responseJson[0]) })
     .catch((error) => {});


  }

  CalCulatePaymentByON(){


    fetch(URL+"/APP-API/Product/CalCulatePaymentByON",{
      method:'post',
      header:{'Accept': 'application/json','Content-type': 'application/json'},
      body:JSON.stringify({order_number:this.state.order_number}) })
     .then((response) => response.json())
     .then((responseJson) => { this.setState({MyCalCulater:responseJson,isloaded:true});console.log('calculate',responseJson) })
     .catch((error) => {});


  }

  fetchDeliveryInformation(){

    
     fetch(URL+"/APP-API/Product/fetchDeliveryInformation",{
      method:'post',
      header:{'Accept': 'application/json','Content-type': 'application/json'},
      body:JSON.stringify({address_id:this.state.address_id}) })
     .then((response) => response.json())
     .then((responseJson) => { this.setState({DeliveryData:responseJson[0]});  })
     .catch((error) => {});


  }


  render() {

if(this.state.isloaded==false)
{
  return <SplshImage/>;
}
else
{

    return ( 


      <div>
      <div class="row mx-0">
      <div class="col mt-3">
      <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-dark">
    
          <li class="breadcrumb-item">
        
              <a  onClick={()=>this.handleBack()} class="text-white">Back</a>
           
          </li>
  
          <li class="breadcrumb-item">
              <a >{this.state.Order_status}</a>
          </li>
           <li class="breadcrumb-item">
           <a >{this.state.order_number}</a>
           </li>
         
      </ol>
  </nav>
      </div>
       
      </div>

    

      {this.state.DeliveryData==null?null:
        (
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 ">
        <div className="card shadow-sm border-0  p-4"> 
        <h6 className="">Delivery Address </h6>
      <div className="card-body">
                <h6 class="mb-1"> {this.state.DeliveryData.name} </h6>
                <p class="mb-2 text-secondary"> {this.state.DeliveryData.address} </p>
                <p class="small"> {this.state.DeliveryData.zipcode} , {this.state.DeliveryData.city}, {this.state.DeliveryData.phone} ,{this.state.DeliveryData.alternative_phone} </p>
        </div>
    
        </div>
        </div>
        )}

<div className="mt-3 mb-2">
{this.state.MyOrders.map((item, key) => {
  return (
    <div >
    <ul class="list-group list-group-flush mb-4">
  
    <li class="list-group-item">
 
        <div class="row">
            <div class="col-auto"> 
            <img  src={URL+"/images/product-images/"+item.p_image} alt="" class="product-image2" />

            </div>
            <div class="col pl-0">
            <h4 class="text-dark my-0">{item.p_name}  {item.p_unit}  </h4>

                <p class="text-secondary mb-1">Quantity: {item.p_qty} </p>
                <p class="text-secondary mb-1">Price:  ₹ {item.p_price} </p>

                <p class="text-secondary mb-1">Discount: {item.p_discount} % </p>

                <p class="text-secondary mb-1">Final Price: ₹ {this.discountedPrice(item.p_price,item.p_discount)*item.p_qty}  </p>

            </div>
          
        </div>

    </li>
    
 
</ul>
  </div>
  )
})}
</div>
    


        {this.state.MyCalCulater==null || this.state.MyOrdersDetails==null?null:
            (
              <div className="col-12 col-md-12 col-lg-12 col-xl-12 mt-3">
            <div className="card shadow-sm border-0  p-4"> 
            <h6 className=""> Total  ₹ {this.state.MyCalCulater.afterDiscountTotal} </h6>
          <div className="card-body">
                    <h6 class="mb-1"> Delivery Charge  ₹ {this.state.MyCalCulater.delcharge} </h6>
                    {this.state.MyCalCulater.couponStatus=='USED'?
                    (
                     <div>
                     <p class="mb-2 text-secondary"> Coupon {this.state.MyCalCulater.coupon_code} applied successfully  </p>
                     <p class="mb-2 text-secondary"> {this.state.MyCalCulater.coupon_msg} </p>

                     </div>
                   ):null}
                   <h6 class="mb-1">Amount Payable  ₹  {Math.floor(this.state.MyOrdersDetails.total_amount)}</h6>
                   </div>
        
            </div>
            </div>
            )}



            {this.state.MyOrdersDetails==null?null:
                (
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12 mt-3">
                <div className="card shadow-sm border-0  p-4"> 
                <h6 className=""> PAYMENT DETAILS </h6>
              <div className="card-body">
                        <h6 class="mb-1">Order Number - {this.state.order_number} </h6>
                        <h6 class="mb-1">Order Date - {this.state.MyOrdersDetails.order_date} </h6>
                        {this.state.MyOrdersDetails.Delivered_date==null?
                            null:
                            (
                        <h6 class="mb-1">Delivery Date - {this.state.MyOrdersDetails.Delivered_date} </h6>
                            )}

                            {this.state.MyOrdersDetails.Cancle_date==null?
                                null:
                                (
                            <h6 class="mb-1">Cancelled Date - {this.state.MyOrdersDetails.Cancle_date} </h6>
                          )}

                          <h6 class="mb-1">Payment Method - {this.state.MyOrdersDetails.payment_method} </h6>

                       <h6 class="mb-1"> Status  -{this.state.MyOrdersDetails.payment_status}</h6>
                       </div>
            
                </div>
                </div>
                )}

     
 
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


}

export default withRouter(OrderDetails);