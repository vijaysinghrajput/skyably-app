
import React,{Component} from 'react';
import URL from '../URL'
import { Redirect ,withRouter} from 'react-router-dom';
import {Img} from 'react-image'

class BrandList extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        categoryId:null,
        categoryname:null,
        alert: null,
        ShowCategory:true,
        AddCategory:false,
        EditCategory:false,
        Categorys:[]
      }
      this.handleNext = this.handleNext.bind(this);

  }


  componentDidMount()
  {  


      this.fetchCategorys()
    

  }


  fetchCategorys()
  {
    fetch(URL+"/APP-API/Product/GetStoreBrand",{
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
         
        
        // console.log('Categorys',responseJson)
    
        this.setState({ Categorys: responseJson });
    
    
         
         
         
       })
       .catch((error) => {
         //  console.error(error);
            
       });
      
 
  }

    render() { 



      
    return (

        <section class="section-b-space ratio_asos">

    

       <div class="title1 title5">
            <h4>Most Popular</h4>
            <h2 class="title-inner1">Brand Store</h2>
            <hr role="tournament6"/>
        </div>

        <div class="collection-wrapper">
            <div class="container">
                <div class="row">
                   
              
                                
                                  
                                    <div class="collection-product-wrapper">
                                       
                                        <div class="product-wrapper-grid">
                                            <div class="row margin-res ">
  
  
                                            { this.state.Categorys.slice(0,8).map((item, key) => {
                                              return (

                        <div class="col-xl-3 col-6 " style={{ padding: 2, marginTop: 1 }}>
                          <div class="product-box shadow-lg">
                            <div class="img-block  justify-content-center">
                              <div class="front justify-content-center">
                                <a onClick={() => this.handleNext(item.id,item.brand_name)}><Img 
                                src={URL+"/images/brand-images/"+item.brand_image} 
                                style={{width:"auto",margin:"auto",display:'block', height:200}} 
                                loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                              </div>
                              <div class="back justify-content-center">
                              <a onClick={() => this.handleNext(item.id,item.brand_name)}><Img 
                                src={URL+"/images/brand-images/"+item.brand_image} 
                                style={{width:"auto",margin:"auto",display:'block', height:200}} 
                                loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                                unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                                class="img-fluid blur-up lazyload bg-img" alt="" /></a>                              </div>

                              <div class="center d-flex justify-content-center my-2" >
                                <button onClick={() => this.handleNext(item.id,item.name)} class="shadow-lg btn btn-primary rounded" >{item.brand_name}</button>
                              </div>
                            </div>

                          </div>
                        </div>


                                  
                                          
                                                )
                                          })}
  
  
  
                                            </div>
                                        </div>
                                        <div class="product-pagination">
                                    
                                                <div class="row">
                                                    <div onClick={()=>this.props.history.push("/Brands")} class="col-xl-12 col-md-12 col-sm-12 btn btn-outline">
                                                    <a style={{textAlign:'center'}}> See All</a>
                                                    </div>
                                                   
                                                </div>
                                         
                                        </div>
                                    
                                </div>
                        
                </div>
            </div>
        </div>
    </section>
        )};



        handleNext(categoryId,categoryname) {
          const Routation = "/Brand/"+categoryId+"/"+categoryname;
          this.props.history.push(Routation);

        }



  }

export default withRouter(BrandList);
