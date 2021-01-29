import React, { Component } from 'react';
import { Redirect ,Link,withRouter} from 'react-router-dom';
import SplshImage from './SplshImage';


import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import URL from '../URL'

const cookies = new Cookies()


class SearchMachine extends Component{
  constructor(props) {

    super(props);

      this.state = {
        isloaded:false,
        Id:'',
        SaverToday:null,
        inMemoryrestorentData:null,
        UserID:null,
        SearchValue:''
       
      }
      this.SearchProducts = this.SearchProducts.bind(this);
      this.handleBack = this.handleBack.bind(this); 


      this.handleNext = this.handleNext.bind(this);


  }

  handleBack() {

    this.props.history.goBack();

  }

  handleNext(Routation)
  {
    this.props.history.push(Routation);
  }


 

SearchProducts (e) {


    if(this.state.inMemoryrestorentData!==null)
    {
    
        if(e.target.id === 'name') {
            this.setState({ SearchValue: e.target.value });
        } 

    
      
      const filteredClubs = this.state.inMemoryrestorentData.filter(Club => {
        let ClubLowercase = (
          Club.name
        ).toLowerCase();
    
        let searchTermLowercase = e.target.value.toLowerCase();
    
        return ClubLowercase.indexOf(searchTermLowercase) > -1;
      });
      setTimeout(()=>{this.setState({timePassed: true})}, 1000);
      this.setState({ SaverToday: filteredClubs });
    }
   
  
  }


  async componentDidMount()
  {


    var UserID = await cookies.get('UserID');
      this.setState({UserID})
      this.fetchData()

  }

  fetchData(){

    console.log('store_code',this.state.store_code)

    fetch(URL+"/APP-API/Product/SearchMachine",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

        
        store_code:this.state.store_code,
        
       
      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      
      //  console.log('SaverToday',responseJson)
  
      this.setState({ SaverToday: responseJson ,inMemoryrestorentData:responseJson });
  
        this.setState({isFilterClicked:false,clearFilterOn:false,isloaded:true})
       
       
     })
     .catch((error) => {
        // console.error(error);
          
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
<div style={{marginBottom:50}}>
<div class="breadcrumb-section">
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <div class="page-title">
                <h2 onClick={()=>this.handleBack()}>BACK</h2>
            </div>
        </div>
        <div class="col-sm-6">
            <nav aria-label="breadcrumb" class="theme-breadcrumb">
                <ol class="breadcrumb">
                   
                    <li class="breadcrumb-item active">search</li>
                </ol>
            </nav>
            
         
            
            
        </div>
    </div>
</div>
</div>

<section class="authentication-page">
<div class="container">
    <section class="search-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <form class="form-header">
                        <div class="input-group">
                            <input autocomplete="off" onChange={this.SearchProducts} id="name" type="text" class="form-control" aria-label="Amount (to the nearest dollar)"
                                placeholder="Search Products......"/>
                   
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
</section>





<div class="container category-button">
<section class="section-b-space">
    <div class="row partition1">
    

    
{ this.state.SaverToday.map((item, key) => {
return (
    
    
        <React.Fragment>

        {key<20?(
          <React.Fragment onClick={() => this.productDetailsAction(item.id,item.type,item.name)}>
          {item.type=='Categorys'?(
                           <div class="col mb-2" onClick={() => this.productDetailsAction(item.id,item.type,item.name)}><a  class="btn btn-outline btn-block">{item.name}</a></div>
      
          ):null}
      
         </React.Fragment>

        ):null}
   
   
        {key<20?(
     <React.Fragment onClick={() => this.productDetailsAction(item.id,item.type,item.name)}>
     {item.type=='Brands'?(
    
    
                                <div class="col mb-2" onClick={() => this.productDetailsAction(item.id,item.type,item.name)}><a  class="btn btn-outline btn-block">{item.name}</a></div>

        
     ):null}
     </React.Fragment>
     ):null}
     {key<20?(
     <React.Fragment onClick={() => this.productDetailsAction(item.id,item.type,item.name)}>
     {item.type=='Product'?(
    
    
       <div class="col mb-2" onClick={() => this.productDetailsAction(item.id,item.type,item.name)}><a  class="btn btn-outline btn-block">{item.name}</a></div>

        
     ):null}
     </React.Fragment>
     ):null}
    </React.Fragment>
    
    
        
       )
})}
 </div>
</section>
</div>



</div>



       
     
    );
    }
  }


  productDetailsAction(Id,type,name) 
{

  if(type=='Product')
  {
    this.handleNext("/Products/"+Id)



  }
  else if(type=='Categorys')
  {
    this.handleNext("/SubCategorys/"+Id+"/"+name)

  }
  else
  {
    this.handleNext("/Brand/"+Id+"/"+name)
  }



}


}

export default withRouter(SearchMachine);