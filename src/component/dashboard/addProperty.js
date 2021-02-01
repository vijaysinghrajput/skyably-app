import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import URL from '../../URL'

import SideBaar from './sideBaar';

const cookies = new Cookies()

class AddProperty extends Component {

    constructor(props) {
        super(props);

        this.state = {

            type: '',
            Bedrooms: '',
            Bathrooms: '',
            kitchen: '',
            Furnishing: '',
            Listedby: '',
            BachelorsAllowed: '',
            Maintenance: '',
            Security: '',
            FloorNo: '',
            CarParking: '',
            Facing: '',
            Title: '',
            Details: '',
            Price: '',
            PriceType: '',
            featur_image: '',
            Address: '',
            City: '',
            state: '',
            zip: '',
            Owner_id: '',
            status: '',
            Add_date: '',
            Update_date: '',

        }
    }

    onChange(e) {

        if (e.target.id === 'type') {
            this.setState({ type: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'Title') {
            this.setState({ Title: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'bedrooms') {
            this.setState({ bedrooms: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'bathrooms') {
            this.setState({ bathrooms: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'kitchen') {
            this.setState({ kitchen: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'furnishing') {
            this.setState({ furnishing: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'listedby') {
            this.setState({ listedby: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'BachelorsAllowed') {
            this.setState({ BachelorsAllowed: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'Maintenance') {
            this.setState({ Maintenance: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'Security') {
            this.setState({ Security: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'FloorNo') {
            this.setState({ FloorNo: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'CarParking') {
            this.setState({ CarParking: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'Details') {
            this.setState({ Details: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'Price') {
            this.setState({ Price: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'PriceType') {
            this.setState({ PriceType: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'Address') {
            this.setState({ Address: e.target.value });
            console.log(e.target.value);
        } else if (e.target.id === 'city') {
            this.setState({ city: e.target.value });
            console.log(e.target.value);
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <section>
                    <div class="tz">
                        <SideBaar />
                        <div class="tz-2">
                            <div class="tz-2-com tz-2-main">
                                <h4>Sell or Rent your Property on Skyably Property Group</h4>
                                <div class="db-list-com tz-db-table">
                                    <div class="ds-boar-title">
                                        <h2>Personal & Property Details</h2>
                                    </div>
                                    <div class="hom-cre-acc-left hom-cre-acc-right">
                                        <div class="">
                                            <form class="">
                                                <div class="row">
                                                    <div class="input-field col s12">
                                                        <select id="type" onChange={this.onChange}>
                                                            <option value="" disabled selected>Choose Your Rent Type</option>
                                                            <option value="Rooms">Rooms</option>
                                                            <option value="Flats">Flats</option>
                                                            <option value="Shop">Shop</option>
                                                            <option value="Marriage Hall">Marriage Hall</option>
                                                            <option value="Banquet Hall">Banquet Hall</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s12">
                                                        <input id="Title" onChange={this.onChange} type="text" class="validate" />
                                                        <label for="Title">Title</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s6">
                                                        <input id="bedrooms" type="number" class="validate" />
                                                        <label for="bedrooms">Bedrooms</label>
                                                    </div>
                                                    <div class="input-field col s6">
                                                        <input id="bathrooms" type="number" class="validate" />
                                                        <label for="bathrooms">Bathrooms</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s6">
                                                        <input id="kitchen" type="number" class="validate" />
                                                        <label for="kitchen">Kitchen</label>
                                                    </div>
                                                    <div class="input-field col s6">
                                                        <select id="furnishing">
                                                            <option value="" disabled selected>Furnish Type</option>
                                                            <option value="Furnished">Furnished</option>
                                                            <option value="Semi-Furnished">Semi-Furnished</option>
                                                            <option value="Un-Furnished">Un-Furnished</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s6">
                                                        <select id="listedby">
                                                            <option value="" disabled selected>Listed By</option>
                                                            <option value="Owner">Owner</option>
                                                            <option value="Builder">Builder</option>
                                                            <option value="Dealer">Dealer</option>
                                                        </select>
                                                    </div>
                                                    <div class="input-field col s6">
                                                        <select id="BachelorsAllowed">
                                                            <option value="" disabled selected>Bachelors Allowed</option>
                                                            <option value="NO">NO</option>
                                                            <option value="YES">YES</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s6">
                                                        <input id="Maintenance" type="number" class="validate" />
                                                        <label for="Maintenance">Maintenance</label>
                                                    </div>
                                                    <div class="input-field col s6">
                                                        <input id="Security" type="number" class="validate" />
                                                        <label for="Security">Security</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s6">
                                                        <input id="FloorNo" type="number" class="validate" />
                                                        <label for="FloorNo">Floor No</label>
                                                    </div>
                                                    <div class="input-field col s6">
                                                        <select id="CarParking">
                                                            <option value="" disabled selected>Car Parking</option>
                                                            <option value="NO">NO</option>
                                                            <option value="YES">YES</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s12">
                                                        <textarea id="Details" class="materialize-textarea"></textarea>
                                                        <label for="Details">Details</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s6">
                                                        <input id="Price" type="number" class="validate" />
                                                        <label for="Price">Price</label>
                                                    </div>
                                                    <div class="input-field col s6">
                                                        <select id="PriceType">
                                                            <option value="" disabled selected>Price Type</option>
                                                            <option value="Months">Months</option>
                                                            <option value="Day">Day</option>
                                                            <option value="Hour">Hour</option>
                                                            <option value="Year">Year</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row"> </div>
                                                <div class="row">
                                                    <div class="input-field col s12">
                                                        <textarea id="Address" class="materialize-textarea"></textarea>
                                                        <label for="Address">Address</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s6">
                                                        <input id="city" type="text" class="validate" />
                                                        <label for="city">City</label>
                                                    </div>
                                                    <div class="input-field col s6">
                                                        <input id="state" type="text" class="validate" />
                                                        <label for="state">State</label>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s6">
                                                        <input id="zip" type="number" class="validate" />
                                                        <label for="zip">Zip</label>
                                                    </div>
                                                    <div class="input-field col s6">
                                                        <select id="Facing">
                                                            <option value="" disabled selected>Facing</option>
                                                            <option value="EAST">EAST</option>
                                                            <option value="WEST">WEST</option>
                                                            <option value="NORTH">NORTH</option>
                                                            <option value="SOUTH">SOUTH</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="input-field col s12 v2-mar-top-40"> <a
                                                        class="waves-effect waves-light btn-large full-btn"
                                                        href="db-payment.html">Submit Listing & Pay</a> </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </>
        )
    }

}

export default withRouter(AddProperty);