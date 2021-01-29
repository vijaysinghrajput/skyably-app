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

                <div class="container h4-ser" style={{ paddingBottom: "70px" }}>
                    <div class="com-title" style={{ paddingTop: "150px" }}>
                        <h2>Find your <span>Services</span></h2>
                        <p>Explore some of the best properties on rent or on sale as well..!!</p>
                    </div>
                    <div class="dir-hli">
                        <ul>
                            <li class="col-md-3 col-sm-6">
                                <a href="list-grid.html">
                                    <div class="dir-hli-5">
                                        <div class="dir-hli-1">
                                            <div class="dir-hli-3"><img src="images/hci1.png" alt="" /> </div>
                                            <div class="dir-hli-4"> </div> <img src="images/services/12.jpg" alt="" /> </div>
                                        <div class="dir-hli-2">
                                            <h4>Rent: 1BHK <span class="dir-ho-cat"> ₹9999/month</span></h4> </div>
                                    </div>
                                </a>
                            </li>
                            <li class="col-md-3 col-sm-6">
                                <a href="list-grid.html">
                                    <div class="dir-hli-5">
                                        <div class="dir-hli-1">
                                            <div class="dir-hli-3"><img src="images/hci1.png" alt="" /> </div>
                                            <div class="dir-hli-4"> </div> <img src="images/services/12.jpg" alt="" /> </div>
                                        <div class="dir-hli-2">
                                            <h4>Rent: 2BHK <span class="dir-ho-cat"> ₹9999/month</span></h4> </div>
                                    </div>
                                </a>
                            </li>
                            <li class="col-md-3 col-sm-6">
                                <a href="list-grid.html">
                                    <div class="dir-hli-5">
                                        <div class="dir-hli-1">
                                            <div class="dir-hli-3"><img src="images/hci1.png" alt="" /> </div>
                                            <div class="dir-hli-4"> </div> <img src="images/services/12.jpg" alt="" /> </div>
                                        <div class="dir-hli-2">
                                            <h4>Rent: 3BHK <span class="dir-ho-cat"> ₹9999/month</span></h4> </div>
                                    </div>
                                </a>
                            </li>
                            <li class="col-md-3 col-sm-6">
                                <a href="list-grid.html">
                                    <div class="dir-hli-5">
                                        <div class="dir-hli-1">
                                            <div class="dir-hli-3"><img src="images/hci1.png" alt="" /> </div>
                                            <div class="dir-hli-4"> </div> <img src="images/services/12.jpg" alt="" /> </div>
                                        <div class="dir-hli-2">
                                            <h4>Rent: 4BHK <span class="dir-ho-cat"> ₹9999/month</span></h4> </div>
                                    </div>
                                </a>
                            </li>
                            <li class="col-md-3 col-sm-6">
                                <a href="list-grid.html">
                                    <div class="dir-hli-5">
                                        <div class="dir-hli-1">
                                            <div class="dir-hli-3"><img src="images/hci1.png" alt="" /> </div>
                                            <div class="dir-hli-4"> </div> <img src="images/services/12.jpg" alt="" /> </div>
                                        <div class="dir-hli-2">
                                            <h4>Real Estate: 1500/sq <span class="dir-ho-cat"> ₹99/acre</span></h4> </div>
                                    </div>
                                </a>
                            </li>
                            <li class="col-md-3 col-sm-6">
                                <a href="list-grid.html">
                                    <div class="dir-hli-5">
                                        <div class="dir-hli-1">
                                            <div class="dir-hli-3"><img src="images/hci1.png" alt="" /> </div>
                                            <div class="dir-hli-4"> </div> <img src="images/services/12.jpg" alt="" /> </div>
                                        <div class="dir-hli-2">
                                            <h4>Real Estate: 1500/sq <span class="dir-ho-cat"> ₹99/acre</span></h4> </div>
                                    </div>
                                </a>
                            </li>
                            <li class="col-md-3 col-sm-6">
                                <a href="list-grid.html">
                                    <div class="dir-hli-5">
                                        <div class="dir-hli-1">
                                            <div class="dir-hli-3"><img src="images/hci1.png" alt="" /> </div>
                                            <div class="dir-hli-4"> </div> <img src="images/services/12.jpg" alt="" /> </div>
                                        <div class="dir-hli-2">
                                            <h4>Real Estate: 1500/sq <span class="dir-ho-cat"> ₹99/acre</span></h4> </div>
                                    </div>
                                </a>
                            </li>
                            <li class="col-md-3 col-sm-6">
                                <a href="list-grid.html">
                                    <div class="dir-hli-5">
                                        <div class="dir-hli-1">
                                            <div class="dir-hli-3"><img src="images/hci1.png" alt="" /> </div>
                                            <div class="dir-hli-4"> </div> <img src="images/services/12.jpg" alt="" /> </div>
                                        <div class="dir-hli-2">
                                            <h4>Real Estate: 1500/sq <span class="dir-ho-cat"> ₹99/acre</span></h4> </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

}

export default withRouter(Offers);
