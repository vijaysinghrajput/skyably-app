import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import URL from '../URL'

const cookies = new Cookies()


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {

      UserEmail: '',
      password: '',
      isloading: true
    }
    this.onChange = this.onChange.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);


  }
  handleBack() {

    this.props.history.goBack();

  }

  handleNext(Routation) {
    this.props.history.push(Routation);
  }

  onChange(e) {

    if (e.target.id === 'email') {
      this.setState({ UserEmail: e.target.value });
    } else if (e.target.id === 'password') {
      this.setState({ password: e.target.value });
    }
  }


  async componentDidMount() {


  }




  render() {


    return (
      <>

        <section class="tz-register">
          <div class="log-in-pop">
            <div class="log-in-pop-left">
              <h1>Hello... <span></span></h1>
              <p>Don't have an account? Create your account. It's take less then a minutes</p>
              <h4>Login with social media</h4>
              <ul>
                <li><a href="#"><i class="fa fa-facebook"></i> Facebook</a>
                </li>
                <li><a href="#"><i class="fa fa-google"></i> Google+</a>
                </li>
                <li><a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                </li>
              </ul>
            </div>
            <div class="log-in-pop-right">
              <a href="#" class="pop-close" data-dismiss="modal"><img src="images/cancel.html" alt="" />
              </a>
              <h4>Login</h4>
              <p>Don't have an account? Create your account. It's take less then a minutes</p>
              <form class="s12">
                <div>
                  <div class="input-field s12">
                    <input type="email" id="email" onChange={this.onChange} class="validate" />
                    <label>Email</label>
                  </div>
                </div>
                <div>
                  <div class="input-field s12">
                    <input type="password" id="password" onChange={this.onChange} class="validate" />
                    <label>Password</label>
                  </div>
                </div>
                <div>
                  <div class="input-field s4">
                    <i class="waves-effect waves-light log-in-btn waves-input-wrapper">
                      <div id="button" onClick={() => this.LoginFunction()} value="Login" class="waves-effect waves-light log-in-btn" >Login</div>
                    </i>
                  </div>
                </div>
                <div>
                  <div class="input-field s12"> <a href="forgot-pass.html">Forgot password</a> | <Link to="/CreateAccount">Create a new account</Link> </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <ToastContainer />

      </>

    );

  }

  LoginFunction = () => {

    this.setState({ isloading: true });

    if (this.state.UserEmail === '') {

      this.setState({ isloading: false, })
      var msg = 'Please enter your email!!'
      toast.error(msg)

    }

    else if (this.state.password === '') {

      this.setState({ isloading: false, })
      var msg = 'Password Requird'
      toast.error(msg)

    } else {

      this.setState({ isloading: true });

      fetch(URL + "/APP-API/App/Login", {

        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({

          email: this.state.UserEmail,
          password: this.state.password

        })


      }).then((response) => response.json())
        .then((responseJson) => {

          console.log("result", responseJson);
          if (responseJson.Login) {

            var msg = 'You have Logged successfully'
            toast.success(msg)


            cookies.set("isLogged", true, { maxAge: 999999999999 });
            cookies.set("UserID", responseJson.data[0].customers_id, { maxAge: 999999999999 });
            cookies.set("user_mobile_number", this.state.UserEmail, { maxAge: 999999999999 });
            cookies.set("user_name", responseJson.data[0].name, { maxAge: 999999999999 });

            // window.location.reload();

            this.handleNext("/")


          }
          else {
            var msg = 'Phone or Password not Matched';
            toast.error(msg);
          }

        })
        .catch((error) => {
          //  console.error(error);

        });

    }


  }



}

export default withRouter(Login);