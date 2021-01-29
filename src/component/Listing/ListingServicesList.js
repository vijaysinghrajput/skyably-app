
import React,{Component} from 'react';
import URL from '../../URL'
import { withRouter } from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class ListingServicesList extends Component{
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

<section class="cat-v2-hom com-padd mar-bot-red-m30">
		<div class="container">
			<div class="row">
				<div class="com-title">
					<h2>Find your <span>Services</span></h2>
					<p>Explore some of the best business from around the world from our partners and friends.</p>
				</div>
                <div class="container">
                 <div class="row">
                    { this.state.Categorys.map((item, key) => {
            return (
                <div class="col-xl-4 col-lg-4 col-sm-4 col-6">
						
                <div class="card" >
  <img class=" " src={URL + "/images/category_images/" + item.image} style={{width:"auto",margin:"auto",display:'block', height:200}} alt="Card image cap"/>
  <div class=" my-3 text-center">

   
    <a  class="text-center my-3" href="#" class="btn btn-primary"> {item.name} </a>
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

        )};

        handleNext(servicesname) {
          const Routation = "/services/"+servicesname;
          this.props.history.push(Routation);
      
        }

  }

export default withRouter(ListingServicesList);
