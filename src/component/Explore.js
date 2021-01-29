import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Offers extends Component {
    constructor(props) {

        super(props);

        this.state = {

        }

    }

    async componentDidMount() {

    }


    render() {

        return (
            <>
                <section class="com-padd com-padd-redu-top">
                    <div class="container">
                        <div class="row">
                            <div class="com-title">
                                <h2>Explore your <span>City Listings</span></h2>
                                <p>Explore some of the best business from around the world from our partners and friends.</p>
                            </div>
                            <div class="col-md-6">
                                <a href="list-lead.html">
                                    <div class="list-mig-like-com">
                                        <div class="list-mig-lc-img"> <img src="images/listing/home.jpg" alt="" /> </div>
                                        <div class="list-mig-lc-con">
                                            <div class="list-rat-ch list-room-rati"> <span>4.0</span> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </div>
                                            <h5>United States</h5>
                                            <p>21 Cities . 2045 Listings . 3648 Users</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="list-lead.html">
                                    <div class="list-mig-like-com">
                                        <div class="list-mig-lc-img"> <img src="images/listing/home2.jpg" alt="" /> </div>
                                        <div class="list-mig-lc-con list-mig-lc-con2">
                                            <h5>United Kingdom</h5>
                                            <p>18 Cities . 1454 Listings</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="list-lead.html">
                                    <div class="list-mig-like-com">
                                        <div class="list-mig-lc-img"> <img src="images/listing/home3.jpg" alt="" /> </div>
                                        <div class="list-mig-lc-con list-mig-lc-con2">
                                            <h5>Australia</h5>
                                            <p>14 Cities . 1895 Listings</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="list-lead.html">
                                    <div class="list-mig-like-com">
                                        <div class="list-mig-lc-img"> <img src="images/listing/home4.jpg" alt="" /> </div>
                                        <div class="list-mig-lc-con list-mig-lc-con2">
                                            <h5>Germany</h5>
                                            <p>12 Cities . 1260 Listings</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="list-lead.html">
                                    <div class="list-mig-like-com">
                                        <div class="list-mig-lc-img"> <img src="images/listing/home1.jpg" alt="" /> </div>
                                        <div class="list-mig-lc-con list-mig-lc-con2">
                                            <h5>India</h5>
                                            <p>24 Cities . 4152 Listings</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default withRouter(Offers);
