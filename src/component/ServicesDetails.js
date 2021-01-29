

import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';

import SplshImage from './SplshImage';

import $ from 'jquery';
import {Helmet} from "react-helmet";


class ServicesDetails extends Component{
    constructor(props) {

        super(props);
    
          this.state = {
              isloaded:false,
              cat_id:null,
              Categorys:[],
              CategorysByName:[],
              SubCategorys:[]
          }
  
          this.handleNext = this.handleNext.bind(this);
        //   this.handleBack = this.handleBack.bind(this); 

          
      }



      componentDidUpdate(prevProps) {
        if (this.props.match.params.servicesName !== prevProps.match.params.servicesName) {
          this.setState({isloaded:false})
          
          this.fetchCategorysByName()
    
        }
    }

        
  async  componentDidMount() {

      this.fetchCategorys()
      
      this.fetchCategorysByName()
 
     
   }
 
   async fetchCategorys() {
   await  fetch(URL + "/APP-API/Product/GetStoreCategory", {
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
 
 
        //   console.log('Categorys',responseJson)
 
         this.setState({ Categorys: responseJson.data,});
 
 
 
 
 
       })
       .catch((error) => {
         //  console.error(error);
 
       });
 
 
   }

   async fetchCategorysByName() {
    await  fetch(URL + "/APP-API/Product/GetCategoryByName", {
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
            cats_name:this.props.match.params.servicesName
  
        })
  
      })
        .then((response) => response.json())
        .then((responseJson) => {
  
  
          this.setState({ CategorysByName: responseJson.data[0],cat_id:responseJson.data[0].id, isloaded:true});
  
          this.fetchSubCategorys()
  
  
  
        })
        .catch((error) => {
          //  console.error(error);
  
        });
  
  
    }

    fetchSubCategorys() {
        fetch(URL+"/APP-API/Product/GetStoreSubCategoryByID",{
          method: 'post',
          header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            cats_id:this.state.cat_id,
     
          })
    
        })
          .then((response) => response.json())
          .then((responseJson) => {
    
    
            // console.log('Categorys',responseJson)
    
            this.setState({ SubCategorys: responseJson.data });
    
    
    
    
    
          })
          .catch((error) => {
            //  console.error(error);
    
          });
    
    
      }

   handleNext(servicesname) {
    const Routation = "/services/"+servicesname;
    this.props.history.push(Routation);

  }
   
render() {


    if(this.state.isloaded===false)
{
  return <SplshImage/>;
}
else
{
    return (  
  
       <React.Fragment>


       <Helmet>
       <meta charSet="utf-8" />
       <title>{this.props.match.params.servicesName} in Gorakhpur </title>
      
       <link rel="icon" type="image/png" href="/assets/img/favicon.png"/>
       
       <meta name="description" content={this.state.CategorysByName.description.substring(0, 160)}/>
       
       <meta name="keywords" content="
       Website Designing in Gorakhpur,
       Website Development in Gorakhpur,
       Website Designing Company in Gorakhpur,
       Website Development Company in Gorakhpur,
       Software Development Company in Gorakhpur,
       Software Development in Gorakhpur,
       Ecommerce Website Portal in Gorakhpur,
       Ecommerce Website Development in Gorakhpur,
       Mobile App Developer in Gorakhpur,
       Mobile App Development in Gorakhpur,
       Android App Developer in Gorakhpur,
       Android App Development in Gorakhpur,
       Mobile App Developer Company in Gorakhpur,
       Mobile App Development Company in Gorakhpur,
       Android App Developer Company in Gorakhpur,
       Android App Development Company in Gorakhpur,
       Digital Promotion Company in Gorakhpur,
       Digital Promotion Agency in Gorakhpur,
       Facebook Promotion Company in Gorakhpur,
       Facebook Promotion Agency in Gorakhpur,
       Facebook Management Company in Gorakhpur,
       Facebook Management Agency in Gorakhpur"/>
       <meta name="author" content="Skyably IT Solution"/>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       
       
       </Helmet>


       <section class="page-title-area">
       <div class="container">
           <div class="page-title-content">
               <h2>Service Details</h2>
               <ul>
                   <li><a href="" onClick={()=>this.props.history.push("/")}>Home</a></li>
                   <li><a href="" onClick={()=>this.props.history.push("/service")}>Service</a></li>
                   <li>{this.props.match.params.servicesName}</li>
               </ul>
           </div>
       </div>

       <div class="shape-img1"><img src="/assets/img/shape/shape1.svg" alt="image"/></div>
       <div class="shape-img2"><img src="/assets/img/shape/shape2.png" alt="image"/></div>
       <div class="shape-img3"><img src="/assets/img/shape/shape3.png" alt="image"/></div>
   </section>


   <section class="services-details-area ptb-100">
   <div class="container">
       <div class="row">
           <div class="col-lg-8 col-md-12">
               <div class="services-details-image">
                   <img src={URL + "/images/category_images/" + this.state.CategorysByName.image} alt={this.state.CategorysByName.name+" in Gorakhpur"}/>
               </div>
               <div class="services-details-desc">
                   <h1 >{this.state.CategorysByName.name} in Gorakhpur</h1>
                   <h3>About this Services</h3>
                   <p>{this.state.CategorysByName.description}</p>
                
                 {this.state.CategorysByName.parent_id==0?
                    (
                        <div>
                        <h3>{this.props.match.params.servicesName} Branch</h3>
                        <div class="row">
     
                        { this.state.SubCategorys.map((item, key) => {
                         return (
                            
                            <div class="col-lg-4 col-sm-6 col-md-6">
                            <a onClick={()=>this.handleNext(item.name)} href="">
                                <div class="single-industries-serve-box wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                  
                                   <p>  {item.name}  </p>
                                </div>
                                </a> 
                            </div>
                         
                            )
                         })}
                         
                        </div>
                        </div>
                    )
                    :null}
                  
                 
                   
               </div>
           </div>

           <div class="col-lg-4 col-md-12">
               <div class="services-details-info">
                   <ul class="services-list">
                   { this.state.Categorys.map((item, key) => {
                    return (

                    <li><a onClick={()=>this.handleNext(item.name)}>{item.name}</a></li>


                    )
                })}
                   </ul>

              

                   <div class="services-contact-info">
                       <h3>Contact Info</h3>
                       
                       <ul>
                           <li>
                               <div class="icon">
                                   <i class='bx bx-user-pin'></i>
                               </div>
                               <span>Phone:</span>
                               <a href="tel:7985130789" target="_blank">7985130789</a>
                           </li>
                           <li>
                               <div class="icon">
                                   <i class='bx bx-map'></i>
                               </div>
                               <span>Location:</span>
                               Rustampur, Gorakhpur
                           </li>
                           <li>
                               <div class="icon">
                                   <i class='bx bx-envelope'></i>
                               </div>
                               <span>Email:</span>
                               <a href="mailto:contact@skyably.com">contact@skyably.com</a>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>

       </React.Fragment>
    );
            }
}

 
}



export default withRouter(ServicesDetails);
