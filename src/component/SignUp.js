import React, { Component } from 'react';
import { Redirect ,withRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'universal-cookie';
import URL from '../URL'

const cookies = new Cookies()


class SignUp extends Component{
  constructor(props) {

    super(props);

      this.state = {
        isClickedShinUp:false,
        UserPhone:'',
        UserFullName:'',
        UserAddress:'',
        password:''
      }
      this.onChange = this.onChange.bind(this);
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


  onChange(e) {
    if (e.target.id === 'name') {
        this.setState({ UserFullName: e.target.value });
    } else if (e.target.id === 'mobile') {
        this.setState({ UserPhone: e.target.value });
    } else if (e.target.id === 'password') {
        this.setState({ password: e.target.value});
        console.log(e.target.value);
    }
}


  async componentDidMount()
  {


  }




  render() {


    return ( 
<div style={{marginBottom:50}}>


<div class="breadcrumb-section">
<div class="container" >
    <div class="row">
    
        <div class="col-sm-6">
            <nav aria-label="breadcrumb" class="theme-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a onClick={()=>this.handleBack()}>Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">create account</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
</div>

<section class="login-page section-b-space">
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <h3>CREATE ACCOUNT</h3>
            <div class="theme-card">
                <form class="theme-form">
                    <div class="form-group">
                        <label for="email">Name</label>
                        <input type="name" onChange={this.onChange}  class="form-control" id="name" placeholder="Name" required="" />
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Mobile Number </label>
                        <input type="tel" onChange={this.onChange}  class="form-control" id="mobile" placeholder="Mobile Number" required="" />
                    </div>
                    
                    
                    <div class="form-group">
                        <label for="review">Password</label>
                        <input type="password"  onChange={this.onChange}  class="form-control" id="password"
                            placeholder="Enter your password" required="" />
                    </div>
                    
                    
                         {this.state.isClickedShinUp==false?
(<a onClick={() => this.CheackMobileOfUser()} class="btn btn-solid">Sign Up</a>):
(
                
                    <div class="pre-loader"></div>
      
)}

                    
                    
                    
                    
                </form>
            </div>
        </div>
        <div class="col-lg-6 right-login" >
            <h3>Alreday Customer</h3>
            <div class="theme-card authentication-right">
                <h6 class="title-font">Login in Account</h6>
                <p>Login in your account at our store. It allows you to be
                    able to order from our shop. To start shopping click login.</p><a onClick={() =>   this.handleNext("/Login")} 
                    class="btn btn-solid">Login</a>
            </div>
        </div>
    </div>
</div>
</section>


<ToastContainer />


</div>



       
     
    );
  
  }

  async CheackMobileOfUser(){

    this.setState({isClickedShinUp:true,errorr:''})


 
    var mobileno = /^\d{10}$/;
    if( this.state.UserPhone=="" ){
    

      this.setState({isloading:false,})
      var msg = 'Please fill mobile number'
      toast.error(msg)
  
    }
    
  
  
    else if(!this.state.UserPhone.match(mobileno)){
      this.setState({isloading:false,})

      var msg = 'Please Enter Vaild 10 digit mobile Number'
      toast.error(msg)

    }
 
      
    else if(this.state.UserFullName==''){
      this.setState({isloading:false,})
      var msg = 'Please Enter Name'
      toast.error(msg)

    }



    else if(this.state.password==''){

        this.setState({isloading:false,})
        var msg = 'Password Requird'
        toast.error(msg)
  
       
      }


 

  
    else{
  
  
      
    

    fetch(URL+"/APP-API/App/CheackMobileOfUser", {

      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
      
       
        mobile:this.state.UserPhone,
       

      
       
      })
      

  }) .then((response) => response.json())
  .then((responseJson) => {

 
   if(responseJson.phone=='exists')
    {

      this.setState({isClickedShinUp:false})

        var msg = 'You already registerd please Login'
        toast.error(msg)

  
        this.handleNext("/Login")

    }
    else if(responseJson.phone=='no')
    {
          
this.insertUserFun()
  
         
    }
  
  


  })
  .catch((error) => {
    //  console.error(error);
       
  });

    }
  
      
  }


  
  insertUserFun()
  {
    fetch(URL+"/APP-API/App/InsertUser", {
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
       body:JSON.stringify({
        UserFullName:this.state.UserFullName,  
        mobile:this.state.UserPhone,
        password:this.state.password,
      
      })
      
  
  }) .then((response) => response.json())
  .then((responseJson) => {
  
  
  
  if(responseJson.SignUp=='done')
  { 
  
    var msg = 'You have registerd successfully'
    toast.success(msg)
    

          
    cookies.set("isLogged", true,{ maxAge: 999999999999 });
    cookies.set("UserID", responseJson.data[0].customers_id,{ maxAge: 999999999999 });
    cookies.set("user_mobile_number",this.state.UserPhone,{ maxAge: 999999999999 });
    cookies.set("user_name",this.state.UserFullName,{ maxAge: 999999999999 });

    this.setState({isClickedShinUp:false})

    // window.location.reload();

    this.handleNext("/")

  
  }


  
  
  
  })
  .catch((error) => {
    //  console.error(error);
       
  });
  }

}

export default withRouter(SignUp);