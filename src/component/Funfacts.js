
import React, { Component } from 'react';
import URL from '../URL'
import { Redirect, withRouter } from 'react-router-dom';

class Funfacts extends Component {
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

      <section class="funfacts-area pb-70">
      <div class="container">
          <div class="row">
              <div class="col-lg-3 col-sm-6 col-6 col-md-3">
                  <div class="single-funfacts-box">
                      <div class="icon">
                          <img src="assets/img/funfacts/icon1.png" alt="Website Development Company in Gorakhpur"/>
                      </div>
                      <h3>3 Years</h3>
                      <p>On the market</p>
                  </div>
              </div>

              <div class="col-lg-3 col-sm-6 col-6 col-md-3">
                  <div class="single-funfacts-box">
                      <div class="icon">
                          <img src="assets/img/funfacts/icon2.png" alt="Website Designing Company in Gorakhpur"/>
                      </div>
                      <h3>6+</h3>
                      <p>Team members</p>
                  </div>
              </div>

              <div class="col-lg-3 col-sm-6 col-6 col-md-3">
                  <div class="single-funfacts-box">
                      <div class="icon">
                          <img src="assets/img/funfacts/icon3.png" alt="Website Development in Gorakhpur"/>
                      </div>
                      <h3>100%</h3>
                      <p>Satisfaction rate</p>
                  </div>
              </div>

              <div class="col-lg-3 col-sm-6 col-6 col-md-3">
                  <div class="single-funfacts-box">
                      <div class="icon">
                          <img src="assets/img/funfacts/icon4.png" alt="Website Designing in Gorakhpur"/>
                      </div>
                      <h3>40+</h3>
                      <p>Projects</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
    )
  };



  handleNext(categoryId, categoryname) {
    const Routation = "/Category/" + categoryId + "/" + categoryname;
    this.props.history.push(Routation);

  }



}

export default withRouter(Funfacts);
