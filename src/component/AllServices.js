
import React,{Component} from 'react';
import URL from '../URL'
import { withRouter } from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class AllServices extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        Categorys:[]
      }
    

      this.handleNext = this.handleNext.bind(this);


    }




    async  componentDidMount() {

      await  this.fetchCategorys()
   
       
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
   
   
            console.log('Categorys',responseJson)
   
           this.setState({ Categorys: responseJson.data, inMemoryrestorentData: responseJson.data });
   
   
   
   
   
         })
         .catch((error) => {
           //  console.error(error);
   
         });
   
   
     }
   
   

    render() { 



    
    return (
    <React.Fragment>
    <section class="page-title-area">
    <div class="container">
        <div class="page-title-content text-center">
            <h2>Services</h2>
            <ul>
                <li><a  href="" onClick={()=>this.props.history.push("/")}>Home</a></li>
                <li>Services</li>
            </ul>
        </div>
    </div>

    <div class="shape-img1"><img src="/assets/img/shape/shape1.svg" /></div>
    <div class="shape-img2"><img src="/assets/img/shape/shape2.png" /></div>
    <div class="shape-img3"><img src="/assets/img/shape/shape3.png" /></div>
</section>
 

<section class="services-area pt-100 pb-70 bg-f1f8fb">
<div class="container">
    <div class="row">

    { this.state.Categorys.map((item, key) => {
        return (
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-services-box wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div class="icon">
                    <img src={URL + "/images/category_images/" + item.image}    style={{width:"auto",margin:"auto",display:'block', height:150}} alt={item.name+" in Gorakhpur"} />
                </div>
                <h3><a href="" onClick={()=>this.handleNext(item.name)}>{item.name}</a></h3>
                <p>{item.description.substring(0, 200)}</p>
                <a href="" onClick={()=>this.handleNext(item.name)} class="read-more-btn">Read More <i class="flaticon-right"></i></a>
            </div>
        </div>
        )
    })}
    
    </div>
</div>

<div class="circle-shape2"><img src="/assets/img/shape/circle-shape2.png" /></div>
<div class="lines">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>
</section>
    </React.Fragment>

        )};

        handleNext(servicesname) {
          const Routation = "/services/"+servicesname;
          this.props.history.push(Routation);
      
        }

  }

export default withRouter(AllServices);
