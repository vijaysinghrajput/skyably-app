
import React, { Component } from 'react';
import URL from '../URL'
import { Redirect, withRouter } from 'react-router-dom';

class CategoryList extends Component {
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

      <section class="section-b-space ratio_asos">


        <div class="title4">
          <h2 class="title-inner4">SHOP BY CATEGORY</h2>
          <div class="line">
            <span>
            </span>
          </div>
        </div>

        <div class="collection-wrapper">
          <div class="container">
            <div class="row">




              <div class="collection-product-wrapper">

                <div class="product-wrapper-grid">
                  <div class="row margin-res " style={{ margin: 0.1 }}>


                    {this.state.Categorys.map((item, key) => {
                      return (

                        <div class="col-xl-3 col-6 " style={{ padding: 2, marginTop: 1 }}>
                          <div class="product-box shadow-lg">
                            <div class="img-block  justify-content-center">
                              <div class="front justify-content-center">
                                <a onClick={() => this.handleNext(item.id, item.name)}><img src={URL + "/images/category_images/" + item.image} class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                              </div>
                              <div class="back justify-content-center">
                                <a onClick={() => this.handleNext(item.id, item.name)}><img src={URL + "/images/category_images/" + item.image} class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                              </div>

                              <div class="center d-flex justify-content-center my-2" >
                                <button onClick={() => this.handleNext(item.id, item.name)} class="shadow-lg btn btn-primary rounded" >{item.name}</button>
                              </div>
                            </div>

                          </div>
                        </div>

                      )
                    })}



                  </div>
                </div>


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

export default withRouter(CategoryList);
