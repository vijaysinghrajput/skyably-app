
import React,{Component} from 'react';
import URL from '../URL'
import { Redirect ,withRouter} from 'react-router-dom';
import SplshImage from './SplshImage';

class SubCategoryList extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        isloaded:false,
        categoryId:null,
        categoryname:null,
        alert: null,
        ShowCategory:true,
        AddCategory:false,
        EditCategory:false,
        Categorys:[]
      }
      this.handleBack = this.handleBack.bind(this); 
      this.handleNext = this.handleNext.bind(this);

  }
  handleBack() {

    this.props.history.goBack();

  }


  componentDidUpdate(prevProps) {
    if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
      this.setState({isloaded:false})

      this.fetchSubCategorys()

    }
}


  async componentDidMount()
  {  
  
      this.fetchSubCategorys()
    

  }


  fetchSubCategorys()
  {
   fetch(URL+"/APP-API/Product/GetStoreSubCategoryByID",{
     method:'post',
     header:{
       'Accept': 'application/json',
       'Content-type': 'application/json'
     },
     body:JSON.stringify({

       cats_id:this.props.match.params.categoryId,

     })
     
   })
    .then((response) => response.json())
    .then((responseJson) => {
      
     
     // console.log('ShowSubCategory',responseJson)
 
     this.setState({ Categorys: responseJson.data ,isloaded:true });
 
 
      
      
      
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
        <React.Fragment style={{marginBottom:160}}>
        

<div class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="page-title">
                        <h2  onClick={()=>this.handleBack()} >BACK</h2>
                    </div>
                </div>
                <div class="col-sm-6">
                    <nav aria-label="breadcrumb" class="theme-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">{this.props.match.params.categoryName}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    
    <section class="section-b-space ratio_asos">
     
      <div class="collection-wrapper">
          <div class="container">
              <div class="row">
                 
            
                              
                                
                                  <div class="collection-product-wrapper">
                                     
                                      <div class="product-wrapper-grid">
                                          <div class="row margin-res ">


                                          { this.state.Categorys.map((item, key) => {
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
  </React.Fragment>
        )
    }};



        handleNext(categoryId,categoryname) {
          const Routation = "/SubCategorys/"+categoryId+"/"+categoryname;
          this.props.history.push(Routation);

        }



  }

export default withRouter(SubCategoryList);
