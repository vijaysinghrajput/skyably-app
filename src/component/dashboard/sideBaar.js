import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class sideBaar extends Component {

    render() {
        return (
            <>
                <div class="tz-l">
                    <div class="tz-l-1">
                        <ul>
                            <li><img src="images/db-profile.jpg" alt="" /> </li>
                            <li><span>Hey!!</span>{cookies.get('user_name')}</li>
                        </ul>
                    </div>
                    <div class="tz-l-2">
                        <ul>
                            <li>
                                <a href="dashboard.html"><img src="images/icon/dbl1.png" alt="" /> My Dashboard</a>
                            </li>
                            <li>
                                <a href="db-all-listing.html"><img src="images/icon/dbl2.png" alt="" /> All Listing</a>
                            </li>
                            <li>
                                <a href="db-listing-add.html" class="tz-lma"><img src="images/icon/dbl3.png" alt="" /> Add
								New Listing</a>
                            </li>
                            <li>
                                <a href="db-message.html"><img src="images/icon/dbl14.png" alt="" /> Messages(12)</a>
                            </li>
                            <li>
                                <a href="db-review.html"><img src="images/icon/dbl13.png" alt="" /> Reviews(05)</a>
                            </li>
                            <li>
                                <a href="db-my-profile.html"><img src="images/icon/dbl6.png" alt="" /> My Profile</a>
                            </li>
                            <li>
                                <a href="db-post-ads.html"><img src="images/icon/dbl11.png" alt="" /> Ad Summary</a>
                            </li>
                            <li>
                                <a href="db-payment.html"><img src="images/icon/dbl9.png" alt="" /> Check Out</a>
                            </li>
                            <li>
                                <a href="db-invoice-all.html"><img src="images/icon/db21.png" alt="" /> Invoice</a>
                            </li>
                            <li>
                                <a href="db-claim.html"><img src="images/icon/dbl7.png" alt="" /> Claim & Refund</a>
                            </li>
                            <li>
                                <a href="db-setting.html"><img src="images/icon/dbl210.png" alt="" /> Setting</a>
                            </li>
                            <li>
                                <a href="#!"><img src="images/icon/dbl12.png" alt="" /> Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(sideBaar);