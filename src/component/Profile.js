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

class Profile extends Component{
  constructor(props) {

    super(props);

      this.state = {

        isloaded:false,
        UserID:null,
        user_name:null,
        user_mobile_number:null,
        UserAddressData:null,
        addressIDSelected:1
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
         
        

// console.log(responseJson.address)
         this.setState({UserAddressData:responseJson.address,isloaded:true})
    
        
       
      
         
         
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

<React.Fragment>

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
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
        </div>
    </div> 
</div>
</div>

 <section class="dashboard-section section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="dashboard-sidebar">
                        <div class="profile-top">
                            <div class="profile-image">
                                <img src="/assets/images/logos/17.png" alt="" class="img-fluid"/>
                            </div>
                            <div class="profile-detail">
                                <h5>{this.state.user_name}</h5>
                               
                                <h6>{this.state.user_mobile_number}</h6>
                            </div>
                        </div>
                        <div class="faq-tab">
                            <ul class="nav nav-tabs" id="top-tab" role="tablist">
                                <li class="nav-item"><a data-toggle="tab" class="nav-link active"
                                        href="#dashboard">dashboard</a></li>
                             
                                <li class="nav-item"><a data-toggle="tab" class="nav-link" href="#orders">Address</a>
                                </li>
                                <li class="nav-item"><a data-toggle="tab" class="nav-link" href="#profile">profile</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="faq-content tab-content" id="top-tabContent">

                        <div class="tab-pane fade show active" id="dashboard">
                            <div class="counter-section">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="counter-box">
                                            <img src="/assets/images/icon/dashboard/order.png" class="img-fluid" />
                                            <div>
                                                <h3>25</h3>
                                                <h5>total products</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="counter-box">
                                            <img src="/assets/images/icon/dashboard/sale.png" class="img-fluid" />
                                            <div>
                                                <h3>12500</h3>
                                                <h5>total sales</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="counter-box">
                                            <img src="/assets/images/icon/dashboard/homework.png" class="img-fluid"/>
                                            <div>
                                                <h3>50</h3>
                                                <h5>order pending</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="card">
                                        <div class="card-body">
                                            <div id="chart"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="card">
                                        <div class="card-body">
                                            <div id="chart-order"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card dashboard-table">
                                        <div class="card-body">
                                            <h3>trending products</h3>
                                            <table class="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">image</th>
                                                        <th scope="col">product name</th>
                                                        <th scope="col">price</th>
                                                        <th scope="col">sales</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><img
                                                                src="/assets/images/dashboard/product/1.jpg"
                                                                class="blur-up lazyloaded"/></th>
                                                        <td>neck velvet dress</td>
                                                        <td>$205</td>
                                                        <td>1000</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><img
                                                                src="/assets/images/dashboard/product/9.jpg"
                                                                class="blur-up lazyloaded"/></th>
                                                        <td>belted trench coat</td>
                                                        <td>$350</td>
                                                        <td>800</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><img src="/assets/images/pro3/34.jpg"
                                                                class="blur-up lazyloaded"/></th>
                                                        <td>man print tee</td>
                                                        <td>$150</td>
                                                        <td>750</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">

                             

                                    <div class="card dashboard-table">
                                        <div class="card-body">
                                            <h3>recent orders</h3>
                                            <table class="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">order id</th>
                                                        <th scope="col">product details</th>
                                                        <th scope="col">status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">#21515</th>
                                                        <td>neck velvet dress</td>
                                                        <td>confrimed</td>
                                                    </tr>
                                                  
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                
                                </div>

                            </div>
                        </div>


                       

                        <div class="tab-pane fade" id="orders">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card dashboard-table mt-0">
                                        <div class="card-body">
                                            <div class="top-sec">
                                                <h3>Address</h3>
                                                <a onClick={()=>this.handleNext("/Add-Address/Profile")} class="btn btn-sm btn-solid">add address</a>
                                            </div>

                                            {this.state.UserAddressData===null?
                                              (
                                                <div class="media-body">
                                               
                                                <h6 class="subtitle mt-4 mb-1">No Address Yet</h6>
                                                
                                            </div>
                                            
                                            ):(
                                              <div className="mt-3">
                                              {this.state.UserAddressData.map((item, key) => {
                                                return (
                                                  <div>
                                            <table class="table table-responsive-sm mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">NO</th>
                                                        <th scope="col">product details</th>
                                                        <th scope="col">status</th>
                                                        <th scope="col">price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{key+1}</th>
                                                        <td>neck velvet dress</td>
                                                        <td>shipped</td>
                                                        <td>$205</td>
                                                    </tr>
                                                  
                                                
                                                
                                                </tbody>
                                            </table>
                                            </div>
                                            )
                                          })}
                                          </div>
                                          )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="profile">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card mt-0">
                                        <div class="card-body">
                                            <div class="dashboard-box">
                                                <div class="dashboard-title">
                                                    <h4>profile</h4>
                                                    <span data-toggle="modal" data-target="#edit-profile">edit</span>
                                                </div>
                                                <div class="dashboard-detail">
                                                    <ul>
                                                        <li>
                                                            <div class="details">
                                                                <div class="left">
                                                                    <h6>company name</h6>
                                                                </div>
                                                                <div class="right">
                                                                    <h6>Fashion Store</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="details">
                                                                <div class="left">
                                                                    <h6>email address</h6>
                                                                </div>
                                                                <div class="right">
                                                                    <h6>mark.enderess@mail.com</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="details">
                                                                <div class="left">
                                                                    <h6>Country / Region</h6>
                                                                </div>
                                                                <div class="right">
                                                                    <h6>Downers Grove, IL</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="details">
                                                                <div class="left">
                                                                    <h6>Year Established</h6>
                                                                </div>
                                                                <div class="right">
                                                                    <h6>2018</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="details">
                                                                <div class="left">
                                                                    <h6>Total Employees</h6>
                                                                </div>
                                                                <div class="right">
                                                                    <h6>101 - 200 People</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="details">
                                                                <div class="left">
                                                                    <h6>category</h6>
                                                                </div>
                                                                <div class="right">
                                                                    <h6>clothing</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="details">
                                                                <div class="left">
                                                                    <h6>street address</h6>
                                                                </div>
                                                                <div class="right">
                                                                    <h6>549 Sulphur Springs Road</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="details">
                                                                <div class="left">
                                                                    <h6>city/state</h6>
                                                                </div>
                                                                <div class="right">
                                                                    <h6>Downers Grove, IL</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="details">
                                                                <div class="left">
                                                                    <h6>zip</h6>
                                                                </div>
                                                                <div class="right">
                                                                    <h6>60515</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                      
                                 </div>
                        
                            </div>
                        </div>
                    </div>
      
    </section>
</React.Fragment>
    );
  }

}


}

export default withRouter(Profile);