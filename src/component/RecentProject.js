
import React,{Component} from 'react';
import URL from '../URL'
import { withRouter } from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import SplshImage from './SplshImage';
import {Img} from 'react-image'

import Cookies from 'universal-cookie';
const cookies = new Cookies();


class RecentProject extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        isloaded:false,
        UserID:null,
        SaverTodayDetails:[],
      }

      this.handleNext = this.handleNext.bind(this);


    }
 
    handleNext(categoryId,categoryname) {
        const Routation = "/SubCategorys/"+categoryId+"/"+categoryname;
        this.props.history.push(Routation);

      }

      async componentDidMount()
      {
      
    
        this.fetchSaverProducts()
        
      
      }
       
      
      fetchSaverProducts()
      {
        fetch(URL+"/APP-API/Product/GetAllSaverProduct",{
        method:'post',
          header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
          },
          body:JSON.stringify({
          
          UserID:this.state.UserID
      
           
          })
          
        })
         .then((response) => response.json())
         .then((responseJson) => {
           
          
          console.log('Categorys',responseJson)
        // alert('yes')
          this.setState({ SaverTodayDetails: responseJson ,isloaded:true });
        
        
           
           
           
         })
         .catch((error) => {
           //  console.error(error);
            
         });
        
       
      }
      
    
    render() { 


      if(this.state.isloaded===false)
      {
        return <SplshImage/>;
      }
      else
      {
    
    
    return (
      <section class="com-padd com-padd-redu-bot">
      <div class="container dir-hom-pre-tit">
        <div class="row">
          <div class="com-title">
            <h2>Top Trendings for <span>your City</span></h2>
            <p>Explore some of the best tips from around the world from our partners and friends.</p>
          </div>
          <div class="col-md-6">
            <div>
              

            { this.state.SaverTodayDetails.map((item, key) => {
              return ( 

              <div class="home-list-pop">
                
                <div class="col-md-3"> <img src="images/services/tr1.jpg" alt="" /> </div>
                
                <div class="col-md-9 home-list-pop-desc"> <a href="automobile-listing-details.html"><h3>Import Motor America</h3></a>
                  <h4>Express Avenue Mall, Santa Monica</h4>
                  <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p> <span class="home-list-pop-rat">4.2</span>
                  <div class="hom-list-share">
                    <ul>
                      <li><a href="#!"><i class="fa fa-bar-chart" aria-hidden="true"></i> 52</a> </li>
                      <li><a href="#!"><i class="fa fa-heart-o" aria-hidden="true"></i> 32</a> </li>
                      <li><a href="#!"><i class="fa fa-eye" aria-hidden="true"></i> 420</a> </li>
                      <li><a href="#!"><i class="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li>
                    </ul>
                  </div>
                </div>
              </div>
                 )
                  })}
                  

            </div>
          </div>
        </div>
      </div>
    </section>
        )
    }}
    
  ;



  

  }

export default withRouter(RecentProject);
