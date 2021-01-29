


import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import URL from '../URL'
import * as NumericInput from "react-numeric-input";

import Cookies from 'universal-cookie';
const cookies = new Cookies()


class GetSubCategory extends Component {
  constructor(props) {

    super(props);

    this.state = {
    
      CategoryID: 0,
      Categorys: []
    }

   
    this.handleNext = this.handleNext.bind(this);

  }


 async componentWillReceiveProps(newProps) {
   await this.setState({ CategoryID: newProps.CategoryID })
  await  this.fetchCategorys()

  }

  handleNext(servicesname) {
    const Routation = "/services/"+servicesname;
    this.props.history.push(Routation);


  }

  async  componentDidMount() {
   await this.setState({ CategoryID: this.props.CategoryID })
     await  this.fetchCategorys()
 
  }

  fetchCategorys() {
    fetch(URL+"/APP-API/Product/GetStoreSubCategoryByID",{
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        cats_id:this.state.CategoryID,
 
      })

    })
      .then((response) => response.json())
      .then((responseJson) => {


        // console.log('Categorys',responseJson)

        this.setState({ Categorys: responseJson.data });





      })
      .catch((error) => {
        //  console.error(error);

      });


  }
 


  render() {

    return (



      <ul >
      {this.state.Categorys.map((item, key) => {
        return (

      <li><a  onClick={()=>this.handleNext(item.url)} href="" >{item.name}</a></li>

      )
    })}
  </ul>

  
    );
  }


}



export default withRouter(GetSubCategory);
