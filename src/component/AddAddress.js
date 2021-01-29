import React, { Component } from 'react';
import { Redirect ,Link,withRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import URL from '../URL'

const cookies = new Cookies()


class AddAddress extends Component{
  constructor(props) {

    super(props);

      this.state = { 
        isClickedAdd:false,
        UserPhone:'',
        UserFullName:'',
        UserAddress:'',
        UserCity:'',
        UserAlternativePhone:'',
        UserZip:'',
        UserID:null,
      }
      this.handleNext = this.handleNext.bind(this);
      this.handleBack = this.handleBack.bind(this); 

      this.onChange = this.onChange.bind(this);

  }

  handleBack() {

    this.props.history.goBack();

  }

  handleNext(Routation)
  {
    this.props.history.push(Routation);
  }



  onChange(e) {
    if (e.target.id === 'name') {
    this.setState({ UserFullName: e.target.value });
    } else if (e.target.id === 'address') {
    this.setState({ UserAddress: e.target.value });
    } else if (e.target.id === 'zip') {
    this.setState({ UserZip: e.target.value});
    console.log(e.target.value);
    }else if (e.target.id === 'city') {
    this.setState({ UserCity: e.target.value});
    console.log(e.target.value);
    }else if (e.target.id === 'mobile') {
    this.setState({ UserPhone: e.target.value});
    console.log(e.target.value);
    }else if (e.target.id === 'alt_mobile') {
    this.setState({ UserAlternativePhone: e.target.value});
    console.log(e.target.value);
    }

}


  async componentDidMount()
  {

    var UserID = await cookies.get('UserID');
      this.setState({UserID})
  

  }




  render() {



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
                    <li class="breadcrumb-item active" aria-current="page">Address</li>
                </ol>
            </nav>
        </div>
    </div> 
</div>
</div>

<section class="contact-page register-page section-b-space my-4">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>SHIPPING ADDRESS</h3>
                    <form class="theme-form">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="name">Full Name</label>
                                <input onChange={this.onChange} type="email" id="name" class="form-control" placeholder="Full Name"
                                    required=""/>
                            </div>
                            <div class="col-md-6">
                                <label for="name">Address *</label>
                                <input onChange={this.onChange} type="address" id="address" class="form-control"  placeholder="Address"
                                    required=""/>
                            </div>
                            <div class="col-md-6">
                                <label for="email">Zip Code *</label>
                                <input onChange={this.onChange} type="zip" id="zip"  class="form-control"  placeholder="zip-code"
                                    required=""/>
                            </div>
                           
                            <div class="col-md-6">
                                <label for="review">City *</label>
                                <input onChange={this.onChange} type="city" id="city" class="form-control" placeholder="City" required=""/>
                            </div>

                            <div class="col-md-6 select_input">
                            <label for="review">Mobile *</label>
                            <input onChange={this.onChange} type="tel" id="mobile" class="form-control"  placeholder="mobile"
                                required=""/>
                           </div>

                            <div class="col-md-6">
                                <label for="review">Alt/Mobile *</label>
                                <input onChange={this.onChange} type="tel" id="alt_mobile"  class="form-control" placeholder="Alt/Mobile"
                                    required=""/>
                            </div>
                            <div class="col-md-12">
                            {this.state.isClickedAdd==false?(

                              <a onClick={() => this.SaveAddress()} class="btn btn-sm btn-solid" >Save Address</a>
                    
                            ):
                          (<div class="spinner-border m-5" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                    
                          )}
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

<ToastContainer />


</React.Fragment>



       
     
    );
  
  }

  async SaveAddress() {



    this.setState({isClickedAdd:true,})

    

    const { UserFullName,UserAddress,UserZip,UserPhone,UserCity,UserAlternativePhone} = this.state;

    var phoneno = /^\d{10}$/;

    if(UserFullName==="" ){
    
      this.setState({isClickedAdd:false,})
     var msg = '**Name Requird';
      toast.error(msg)
    }
    
    else if(UserAddress===''){
      this.setState({isClickedAdd:false,})

      var msg = '** Enter Address';
      toast.error(msg)
     
    }

    else if(UserZip===''){
      this.setState({isClickedAdd:false,})

      var msg = '** Enter Zip';
      toast.error(msg)
     
    }

    else if(UserCity===''){
      this.setState({isClickedAdd:false,})

      var msg = '** Enter City';
      toast.error(msg)
     
    }

    else if(!UserPhone.match(phoneno)){
      this.setState({isClickedAdd:false,})

      var msg = '** Enter Vaild Phone Number';
      toast.error(msg)
     
    }

  
   
    else{


      
    this.setState({isClickedAdd:true})
    fetch(URL+"/APP-API/App/insertUserAddress",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

          UserId:this.state.UserID,
          UserTitle:'',
          UserFullName:UserFullName,
          UserAddress:UserAddress,
          UserCity:UserCity,
          UserZip:UserZip,
          UserPhone:UserPhone,
          latitude:null,
          longitude:null,
          UserAlternativePhone:UserAlternativePhone,
          UserAddressType:'', 
      })
      

  }) .then((response) => response.json())
  .then((responseJson) => {

    this.setState({isClickedAdd:false})
  
    
   console.log(responseJson)

   if(responseJson.status=='done')
{

  var msg = 'Your address registerd successfully'
    toast.success(msg)
    
this.handleNext("/"+this.props.match.params.screen)

}



  })
  .catch((error) => {
    //  console.error(error);
       
  });

    }
  
      
  

  }



}

export default withRouter(AddAddress);