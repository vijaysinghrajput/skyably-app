import React, { Component } from 'react';
import SplshImage from './SplshImage';

import { Redirect ,withRouter} from 'react-router-dom';
import URL from '../URL'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class HomeSlider extends Component{
  constructor(props) {

    super(props);

      this.state = {
        isloaded:false,
        UserID:null,
        sliderData:[]
      }
      this.splashScreen = this.splashScreen.bind(this);

  }

splashScreen()
{





}

  async componentDidMount()
  {

  
    

       fetch(URL+"/APP-API/Product/OffersBanner",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

       
       
      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      
         console.log('sliderData',responseJson)
  
      this.setState({sliderData:responseJson,isloaded:true});

      // this.fetcProductByCategory()
    
    
    })
   
     .catch((error) => {
       //  console.error(error);
          
     });

  }




  render() {



    return ( 


     

      <section class="p-0 layout-7" >
      <div class="slide-1 home-slider">
      <Carousel 
      showArrows={true} showThumbs={false} showStatus={true}
      autoPlay={true}> 
      { this.state.sliderData.map((item, key) => {
          return (
  
      <img src={URL+"/images/offer-image/"+item.image} className="" alt="" class="bg-img blur-up lazyload" />     
  
  
        )
      })}
      </Carousel>
      </div>
  </section>
   
    );
  

}

}

export default withRouter(HomeSlider);