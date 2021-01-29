
import React, { Component } from 'react';
import URL from '../URL'
import { Redirect, withRouter } from 'react-router-dom';

class TestMonial extends Component {
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

        <section class="testimonials-area bg-color pt-100 bg-fafafb">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title"><img src="assets/img/star-icon.png" alt="image"/> Testimonials</span>
                    <h2>What Our Clients are Saying?<span class="overlay"></span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div class="testimonials-slides owl-carousel owl-theme">
                    <div class="single-testimonials-box">
                        <img src="assets/img/testimonials/img1.jpg" class="shadow-sm" alt="image"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <div class="client-info">
                            <h3>Alex Maxwell</h3>
                            <span>CEO at EnvyTheme</span>
                        </div>
                    </div>

                    <div class="single-testimonials-box">
                        <img src="assets/img/testimonials/img2.jpg" class="shadow-sm" alt="image"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <div class="client-info">
                            <h3>David Warner</h3>
                            <span>CEO at Envato</span>
                        </div>
                    </div>

                    <div class="single-testimonials-box">
                        <img src="assets/img/testimonials/img3.jpg" class="shadow-sm" alt="image"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <div class="client-info">
                            <h3>Sarah Taylor</h3>
                            <span>CEO at ThemeForest</span>
                        </div>
                    </div>
                </div>

                <div class="testimonials-view-btn text-center">
                    <a href="testimonials.html" class="default-btn"><i class="flaticon-view"></i>Check Out All Reviews<span></span></a>
                </div>
            </div>

            <div class="shape-img1"><img src="assets/img/shape/shape1.svg" alt="image"/></div>
        </section>
    )
  };



  handleNext(categoryId, categoryname) {
    const Routation = "/Category/" + categoryId + "/" + categoryname;
    this.props.history.push(Routation);

  }



}

export default withRouter(TestMonial);
