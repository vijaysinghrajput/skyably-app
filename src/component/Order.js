import React, { Component } from 'react';
import SplshImage from './SplshImage';

import { Redirect ,Link,withRouter} from 'react-router-dom';
import URL from '../URL'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Cookies from 'universal-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cookies = new Cookies()

class Order extends Component{
  constructor(props) {

    super(props);

      this.state = {

        isloaded:false,
        UserID:null,
        user_name:null,
        user_mobile_number:null,
        MyOrders:null,
        addressIDSelected:1
      }
      this.handleNext = this.handleNext.bind(this);


  }
  handleNext(Routation)
  {
    this.props.history.push(Routation);
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

    this.fetchData()

  }
  fetchData(){

    // console.log('fetch clicked >')

    fetch(URL+"/APP-API/Product/FetchOrders",{
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
       
      
         console.log('cart data',responseJson)

   
        this.setState({MyOrders:responseJson,isloaded:true});

             
  
    
    
    })
   
     .catch((error) => {
       //  console.error(error);
          
     });

  

  }





editAddressAction(addressIDSelected) 
{

  this.handleNext("/Edit-Address/"+addressIDSelected)


}

  render() { 

   
if(this.state.isloaded===false)
{
  return <SplshImage/>;
}
else
{


    return ( 


      <div className="mt-3">

      <div class="row mx-0">
      <div class="col mt-3">
      <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-dark">
          <li class="breadcrumb-item">
              <a onClick={() => this.handleNext("/")}  class="text-white">Home</a>
          </li>
          <li class="breadcrumb-item">
              <a >Orders</a>
          </li>
         
      </ol>
  </nav>
      </div>
       
      </div>

 
      <div class="text-center mt-2">
      
      <h3 class="mb-1 ">{this.state.user_name===null?'Hello Guest':this.state.user_name}</h3>
      <p class="text-mute small">{this.state.user_mobile_number===null?'Hello Guest':this.state.user_mobile_number}</p>

     
  </div>
  <br/>


{this.state.MyOrders===null?
  (
    <div class="media-body">
   
    <h6 class="subtitle mt-4 mb-1">No Order Yet</h6>
    
</div>

):(

    <div class="row">
    <div class="col-12 px-0">



{this.state.MyOrders.map((item, key) => {
  return (
    <div onClick={()=>this.handleNext("/Order-Details/"+item.order_number+"/"+item.address_id+"/"+item.Order_status)} >
    <ul class="list-group list-group-flush mb-4">
    <li class="list-group-item active">
    
        <h6 class="mb-0  float-right">{item.order_date}</h6>
        <h6 class="mb-0  float-left">{item.order_number}</h6>
    </li>
    <li class="list-group-item">
 
        <div class="row">
            <div class="col-auto"> 
                <span class="btn btn-default p-3 btn-rounded-15">
                    <i class="material-icons">account_balance_wallet</i>
                </span>
            </div>
            <div class="col pl-0">
                <p class="text-secondary mb-1">{item.Order_status}</p>
                <h4 class="text-dark my-0">₹  {item.total_amount}</h4>
            </div>
            <div class="col-auto pl-0 align-self-center">
                <button onClick={()=>this.handleNext("/Order-Details/"+item.order_number+"/"+item.address_id+"/"+item.Order_status)} class="btn btn-default button-rounded-36 shadow"><i class="material-icons">arrow_forward</i></button>
            </div>
        </div>

    </li>
    
 
</ul>
  </div>
  )
})}
</div>
</div>

)}


  <br/>
   
      </div>
    );
  }

}

deleteThisAddress (addressiD)  {
  confirmAlert({
    title: 'Confirm to delete',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => this.deleteAction(addressiD)
      },
      {
        label: 'No',
        onClick: () => console.log('No Clicked')
      }
    ]
  });
};

async deleteAction(addressiD) {


  fetch(URL+"/APP-API/App/deleteSingleAddress",{
    method:'post',
    header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({

      AddressId:addressiD
  
    })
    

}) .then((response) => response.json())
.then((responseJson) => {

  this.setState({isloading:false})

  


var msg = 'Your address removed successfully'
  toast.success(msg)
  
this.FetchAllAddress()




})
.catch((error) => {
  //  console.error(error);
     
});


}


}

export default withRouter(Order);