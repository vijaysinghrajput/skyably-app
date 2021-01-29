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
            UserName: null,
            UserPhone: null,
            UserEmail: null,
            UserPassword: null,
            UserCPassword: null,
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

        if (e.target.id === 'name') {
            this.setState({ UserName: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'email') {
            this.setState({ UserEmail: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'phone') {
            this.setState({ UserPhone: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'password') {
            this.setState({ UserPassword: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'c_password') {
            this.setState({ UserCPassword: e.target.value });
            console.log(e.target.value);
        }
    }


    async componentDidMount() {

        this.setState({ isloading: false });

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
                            <h4>Create an Account</h4>
                            <form class="s12">
                                <div>
                                    <div class="input-field s12">
                                        <input type="text" id="name" onChange={this.onChange} class="validate" />
                                        <label>Name</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="input-field s12">
                                        <input type="number" id="phone" onChange={this.onChange} class="validate" />
                                        <label>Phone</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="input-field s12">
                                        <input type="email" id="email" onChange={this.onChange} class="validate" />
                                        <label>Email id</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="input-field s12">
                                        <input type="password" id="password" onChange={this.onChange} class="validate" />
                                        <label>Password</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="input-field s12">
                                        <input type="password" id="c_password" onChange={this.onChange} class="validate" />
                                        <label>Confirm password</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="input-field s4">
                                        <i class="waves-effect waves-light log-in-btn waves-input-wrapper">
                                            <div id="button" onClick={() => this.LoginFunction()} value="Register" class="waves-effect waves-light log-in-btn" >Register</div>
                                        </i>
                                    </div>
                                </div>
                                <div>
                                    <div class="input-field s12"> <Link to="/Login">Are you a already member ? Login</Link> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <ToastContainer />

            </>

        );

    }

    async LoginFunction() {

        this.setState({ isloading: true });

        var mobileno = /^\d{10}$/;
        if (this.state.UserName === null) {

            this.setState({ isloading: false, });
            var msg = 'Please fill your name';
            toast.error(msg);

        }


        else if (this.state.UserPhone === null) {
            this.setState({ isloading: false, })
            var msg = 'Please Enter Mobile Number'
            toast.error(msg)

        }


        else if (!this.state.UserPhone.match(mobileno)) {
            this.setState({ isloading: false, })

            var msg = 'Please Enter Vaild 10 digit mobile Number'
            toast.error(msg)

        }

        else if (this.state.UserEmail === null) {

            this.setState({ isloading: false, });
            var msg = 'Email Requird';
            toast.error(msg);

        }

        else if (this.state.UserPassword === null) {

            this.setState({ isloading: false, });
            var msg = 'Password Requird';
            toast.error(msg);

        }

        else if (this.state.UserPassword !== this.state.UserCPassword) {

            this.setState({ isloading: false, });
            var msg = 'Password Does not matched!!';
            toast.error(msg);

        }

        else {

            this.setState({ isloading: true });

            fetch(URL + "/APP-API/App/InsertUser", {

                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({

                    name: this.state.UserName,
                    phone: this.state.UserPhone,
                    email: this.state.UserEmail,
                    password: this.state.UserPassword

                })


            }).then((response) => response.json())
                .then((responseJson) => {

                    console.log("data", responseJson);

                    if (responseJson.SignUp) {

                        var msg = 'You have Logged successfully';
                        toast.success(msg);

                        cookies.set("isLogged", true, { maxAge: 999999999999 });
                        cookies.set("UserID", responseJson.data[0].customer_id, { maxAge: 999999999999 });
                        cookies.set("user_mobile_number", this.state.UserPhone, { maxAge: 999999999999 });
                        cookies.set("user_name", responseJson.data[0].name, { maxAge: 999999999999 });

                        this.handleNext("/")


                    }
                    else {
                        var msg = 'Something went wrong!!';
                        toast.error(msg)
                    }



                })
                .catch((error) => {
                    //  console.error(error);

                });

        }


    }



}

export default withRouter(Login);