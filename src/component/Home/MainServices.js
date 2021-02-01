
import React, { Component } from 'react';
import URL from '../../URL'
import { Redirect, withRouter } from 'react-router-dom';

class MainServices extends Component {
	constructor(props) {

		super(props);

		this.state = {
			categoryId: null,
			categoryname: null,
			alert: null,
			ShowCategory: true,
			AddCategory: false,
			EditCategory: false,
			Categorys: []
		}
		this.handleNext = this.handleNext.bind(this);

	}


	componentDidMount() {


		this.fetchCategorys()


	}


	fetchCategorys() {
		fetch(URL + "/APP-API/Product/GetStoreCategory", {
			method: 'post',
			header: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify({


			})

		})
			.then((response) => response.json())
			.then((responseJson) => {


				// console.log('Categorys',responseJson)

				this.setState({ Categorys: responseJson.data, inMemoryrestorentData: responseJson.data });





			})
			.catch((error) => {
				//  console.error(error);

			});


	}

	render() {




		return (

			<section style={{ paddingTop: 64 }}>
				<div class="land-full land-packages">
					<div class="container">
						<div class="com-title">
							<h2>Popular <span>Services</span></h2>
							<p>Explore some of the best business from around the world from our partners and friends.</p>
						</div>
						<div class="land-pack">
							<ul>
								<li>
									<div class="land-pack-grid">
										<div class="land-pack-grid-img">
											<img src="images/services/20.jpg" alt="" />
										</div>
										<div class="land-pack-grid-text">
											<h4>Explore City</h4>
											<a href="service-booking.html" class="land-pack-grid-btn">Book Now</a></div>
									</div>
								</li>
								<li>
									<div class="land-pack-grid">
										<div class="land-pack-grid-img">
											<img src="images/services/p1.jpg" alt="" />
										</div>
										<div class="land-pack-grid-text">
											<h4>Second Hand</h4>
											<a href="service-booking.html" class="land-pack-grid-btn land-pack-grid-btn-blu">Book Now</a></div>
									</div>
								</li>
								<li>
									<div class="land-pack-grid">
										<div class="land-pack-grid-img">
											<img src="images/services/10.jpg" alt="" />
										</div>
										<div class="land-pack-grid-text">
											<h4>Health Check-up</h4>
											<a href="service-booking.html" class="land-pack-grid-btn land-pack-grid-btn-yel">Book Now</a></div>
									</div>
								</li>
								<li>
									<div class="land-pack-grid">
										<div class="land-pack-grid-img">
											<img src="images/services/ser5.jpg" alt="" />
										</div>
										<div class="land-pack-grid-text">
											<h4>Cab Booking</h4>
											<a href="service-booking.html" class="land-pack-grid-btn land-pack-grid-btn-red">Book Now</a></div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	};



	handleNext(categoryname) {
		const Routation = "/Categories/" + categoryname;
		this.props.history.push(Routation);

	}



}

export default withRouter(MainServices);
