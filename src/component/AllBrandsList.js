
import React,{Component} from 'react';
import URL from '../URL'
import SplshImage from './SplshImage';

import $ from 'jquery';
import { Redirect ,withRouter,Link} from 'react-router-dom';
import * as NumericInput from "react-numeric-input";
import Pagination from "react-js-pagination";
import {Img} from 'react-image'

import Cookies from 'universal-cookie';
const cookies = new Cookies();


class AllBrandsList extends Component{
  constructor(props) {

    super(props);
   
      this.state = {
        isFilterClicked:false,
        isloaded:false,
        backScreen:'',
        clickedfilter:false,
        UserID:null,
        productId:null,
        minPrice:0,
        maxPrice:5000,
        percatheDicount:0,
        Categorys:[],
        totalProductNumber:0,
        activePage: 1,
        ShowProductPerPage:12,
        inMemoryCategorysData:null,

      }
      this.FilterTakingInput = this.FilterTakingInput.bind(this);
      this.SearchProducts = this.SearchProducts.bind(this);
      this.handleBack = this.handleBack.bind(this); 
      this.handleNext = this.handleNext.bind(this);



      
  }



SearchProducts (e) {


    if(this.state.inMemoryCategorysData!==null)
    {
    
        if(e.target.id === 'name') {
            this.setState({ SearchValue: e.target.value });
        } 

    
      
      const filteredDatas = this.state.inMemoryCategorysData.filter(Data => {
        let DataLowercase = (
          Data.brand_name
        ).toLowerCase();
    
        let searchTermLowercase = e.target.value.toLowerCase();
    
        return DataLowercase.indexOf(searchTermLowercase) > -1;
      });
      setTimeout(()=>{this.setState({timePassed: true})}, 1000);
      this.setState({ Categorys: filteredDatas });
    }
   
  
  }


  
  FilterTakingInput(e)
  {
    if(e.target.id === 'shortby') {
       
      this.setState({isFilterClicked:true})


      if(e.target.value=="Alphabetical")
      {
       var Alphabetical =  this.state.Categorys.sort((a, b) => a.brand_name.toLowerCase().localeCompare(b.brand_name.toLowerCase()))
         this.setState({Categorys:Alphabetical})

      }
    }
}
  
  handleBack() {

    this.props.history.goBack();

  }

  handleNext(categoryId,categoryname) {
    const Routation = "/Brand/"+categoryId+"/"+categoryname;
    this.props.history.push(Routation);

  }




 async componentDidMount()
  {


      var UserID = await cookies.get('UserID');
    
       this.setState({UserID:Number(UserID),isFilterClicked:false})

      this.fetchCategorys()
    

  }
 
  clearFilter(){
this.fetchCategorys()
this.setState({clickedfilter:false})
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
    
        this.setState({ Categorys: responseJson,inMemoryCategorysData:responseJson, isloaded:true,totalProductNumber:Object.keys(responseJson).length });
    
    
         
         
         
       })
       .catch((error) => {
         //  console.error(error);
            
       });
      
 
  }



  // openFilter()
  // {
  //   $('.collection-filter').css("left", "-15px");
  // }

  // closeFilter()
  // {
  //   $('.collection-filter').css("left", "-365px");
  //   $('.sidebar-popup').trigger('click');
  // }

  gridLayout()
  {
    $('.collection-grid-view').css('opacity', '1');
    $('.product-wrapper-grid').removeClass("list-view");
    $(".product-wrapper-grid").children().children().removeClass();
    $(".product-wrapper-grid").children().children().addClass("col-lg-3");
  }

  listLayout()
  {  $('.collection-grid-view').css('opacity', '0');
  $(".product-wrapper-grid").css("opacity", "0.2");
  $('.shop-cart-ajax-loader').css("display", "block");
  $('.product-wrapper-grid').addClass("list-view");
  $(".product-wrapper-grid").children().children().removeClass();
  $(".product-wrapper-grid").children().children().addClass("col-lg-12");
  setTimeout(function() {
      $(".product-wrapper-grid").css("opacity", "1");
      $('.shop-cart-ajax-loader').css("display", "none");
  }, 500);}


  twoLayout()
  {
    if ($('.product-wrapper-grid').hasClass("list-view")) {} else {
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid").children().children().addClass("col-lg-6");
  }
  }
  threeLayout()
  {
    if ($('.product-wrapper-grid').hasClass("list-view")) {} else {
            $(".product-wrapper-grid").children().children().removeClass();
            $(".product-wrapper-grid").children().children().addClass("col-lg-4");
        }
  

}
  fourLayout()
  {
    if ($('.product-wrapper-grid').hasClass("list-view")) {} else {
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid").children().children().addClass("col-lg-3");
  }

  }

  SixLayout()
  {
    if ($('.product-wrapper-grid').hasClass("list-view")) {} else {
      $(".product-wrapper-grid").children().children().removeClass();
      $(".product-wrapper-grid").children().children().addClass("col-lg-2");
  }

  }

  handlePageChange(pageNumber) {
  
    this.setState({ShowProductPerPage: Number(pageNumber)*12});
  }


    render() { 


if(this.state.isloaded===false)
{
  return <SplshImage/>;
}
else
{
    
    return (
      <React.Fragment style={{marginBottom:50}}>
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
                          <li class="breadcrumb-item active" aria-current="page">Brands</li>
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
                                placeholder="Search Brands......"/>
                   
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
</section>

      <section class="section-b-space ratio_asos">
      <div class="collection-wrapper">
          <div class="container">
              <div class="row">
                 
                  <div class="collection-content col">
                      <div class="page-main-content">
                          <div class="row">
                              <div class="col-sm-12">
                                
                                  <div class="collection-product-wrapper">
                                      <div class="product-top-filter">
                                      
                                          <div class="row">
                                              <div class="col-12">
                                                  <div class="product-filter-content">
                                                      <div class="search-count">
                                                          <h5>Showing Products 1-{this.state.ShowProductPerPage>this.state.totalProductNumber?this.state.totalProductNumber:this.state.ShowProductPerPage} of {this.state.totalProductNumber} Result</h5>
                                                      </div>
                                                      {this.state.isFilterClicked==true?(
                                                        <div  class="search-count">
                                                    
                                                        <a onClick={()=>this.componentDidMount()}  class="btn btn-outline mr-3">Clear Filter</a>

                                                        </div>
                                                      ):null}
                                                      <div class="collection-view">
                                                          <ul>
                                                              <li onClick={()=>this.gridLayout()}><i class="fa fa-th grid-layout-view"></i></li>
                                                              <li onClick={()=>this.listLayout()}><i class="fa fa-list-ul list-layout-view"></i></li>
                                                          </ul>
                                                      </div>
                                                      <div class="collection-grid-view">
                                                          <ul>
                                                              <li onClick={()=>this.twoLayout()}><img src="/assets/images/icon/2.png" alt="" class="product-2-layout-view"/></li>
                                                              <li onClick={()=>this.threeLayout()}><img src="/assets/images/icon/3.png" alt="" class="product-3-layout-view"/></li>
                                                              <li onClick={()=>this.fourLayout()}><img src="/assets/images/icon/4.png" alt="" class="product-4-layout-view"/></li>
                                                              <li onClick={()=>this.SixLayout()}><img src="/assets/images/icon/6.png" alt="" class="product-6-layout-view"/></li>
                                                          </ul>
                                                      </div>

                                                      <div class="product-page-per-view">
                                                      <select onChange={this.FilterTakingInput} id="shortby">
                                                      <option value="null"> Short By </option>
                                                      <option value="Alphabetical">Alphabetical </option>
                                                         
                                                      </select>
                                                  </div>
                                     
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="product-wrapper-grid">
                                          <div class="row margin-res ">


                                          
                                          { this.state.Categorys.slice(0,this.state.ShowProductPerPage).map((item, key) => {
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
                            class="img-fluid blur-up lazyload bg-img" alt="" /></a>                            </div>
                            <div class="back justify-content-center">
                            <a onClick={() => this.handleNext(item.id,item.brand_name)}><Img 
                            src={URL+"/images/brand-images/"+item.brand_image} 
                            style={{width:"auto",margin:"auto",display:'block', height:200}} 
                            loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/loding.gif" />}
                            unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}
                            class="img-fluid blur-up lazyload bg-img" alt="" /></a>                            </div>

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
                                          <div class="theme-paggination-block">
                                              <div class="row">
                                                  <div class="col-xl-12 col-md-12 col-sm-12">
                                                  <nav aria-label="Page navigation">
                                                 
                                                  <Pagination
          activePage={this.state.activePage}
          innerClass="pagination"
          activeClass="page-item active"
          activeLinkClass="page-link"
          itemClass="page-item"
          itemClassFirst="page-item"
          itemClassPrev="page-item sr-only"
          itemClassNext="page-item sr-only"
          itemClassLast="page-item"
          linkClass	="page-link"
linkClassFirst	="page-link"
linkClassPrev="page-link"
linkClassNext	="page-link"
linkClassLast="page-link"
          itemsCountPerPage={12}
          totalItemsCount={this.state.totalProductNumber}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      
        </nav>
                                                  </div>
                                                 
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  </React.Fragment>
        )};
    }

    getTitle(product_name,product_size,product_unit)
    {
      var heading = null;
      var contentwidth = window.innerWidth
      if ((contentwidth) < '750') {
         var heading = <h6>{product_name.substring(0, 15)} {product_size} {product_unit}</h6>
      } 
      else {
         var heading = <h6>{product_name.substring(0, 25)} {product_size} {product_unit}</h6>

      }

      return heading
  
      
  
    }

  }

export default withRouter(AllBrandsList);
