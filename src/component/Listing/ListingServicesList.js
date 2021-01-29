
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
				<div class="dir-hli">
					<ul>
                    { this.state.Categorys.map((item, key) => {
            return (
                <li class="col-lg-4 col-md-6 col-sm-6">
							<a href="list.html">
								<div class="dir-hli-5">
									<div class="dir-hli-1">
										<div class="dir-hli-3"><img src={URL + "/images/category_images/" + item.image}alt=""/> </div>
										<div class="dir-hli-4"> 
                                        </div> <img src={URL + "/images/category_images/" + item.image} alt=""/> </div>
									<div class="dir-hli-2">
										<h4> {item.name} </h4> </div>
								</div>
							</a>
						</li>


						   )
            })}
            
					</ul>
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
