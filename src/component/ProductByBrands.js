
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


class ProductByBrands extends Component{
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
        SaverTodayDetails:[],
        inMemorySaverTodaysData:null,
        totalProductNumber:0,
        activePage: 1,
        ShowProductPerPage:12,

      }
      this.onChange = this.onChange.bind(this);
      this.SearchProducts = this.SearchProducts.bind(this);
      this.FilterTakingInput = this.FilterTakingInput.bind(this);
      this.FilterRefinebyInput = this.FilterRefinebyInput.bind(this);
      this.handleBack = this.handleBack.bind(this); 
      this.handleNext = this.handleNext.bind(this);



      
  }

  SearchProducts (e) {


    if(this.state.inMemorySaverTodaysData!==null)
    {
    
        if(e.target.id === 'name') {
            this.setState({ SearchValue: e.target.value });
        } 

    
      
      const filteredDatas = this.state.inMemorySaverTodaysData.filter(Data => {
        let DataLowercase = (
          Data.product_name
        ).toLowerCase();
    
        let searchTermLowercase = e.target.value.toLowerCase();
    
        return DataLowercase.indexOf(searchTermLowercase) > -1;
      });
      setTimeout(()=>{this.setState({timePassed: true})}, 1000);
      this.setState({ SaverTodayDetails: filteredDatas });
    }
   
  
  }

  handleSort = ascending => {
  
    this.setState( {
        sortValue: ascending 
                   ? this.state.SaverTodayDetails.sort((a,b) => (parseFloat(a.price) - parseFloat(b.price)))
                   : this.state.SaverTodayDetails.sort((a,b) => (parseFloat(b.price) - parseFloat(a.price)))
    } )
  
  }


  handleDiscountSort = ascending => {

    this.setState( {
        sortValue: ascending 
                   ? this.state.SaverTodayDetails.sort((a,b) => (parseFloat(a.discount) - parseFloat(b.discount)))
                   : this.state.SaverTodayDetails.sort((a,b) => (parseFloat(b.discount) - parseFloat(a.discount)))
    } )
  
   
  }

  
  handleBack() {

    this.props.history.goBack();

  }

  handleNext(path) {
      
    this.props.history.push(path);
  }

  FilterRefinebyInput(e)
  {
    if(e.target.id === 'Refineby') {

      this.setState({isFilterClicked:true})
       
      if(e.target.value=="priceLess50")
      {
        const filteredClubs = this.state.SaverTodayDetails.filter(Club => {
     
          if(Club.price<=50)
          {
            return Club;
          }
        
         
        });
        this.setState({ SaverTodayDetails: filteredClubs });

      }

        if(e.target.value=="priceRs50toRs250")
        {
          const filteredClubs = this.state.SaverTodayDetails.filter(Club => {
     
            if(Club.price>51 && Club.price <=250)
            {
              return Club;
            }
          
           
          });
          this.setState({ SaverTodayDetails: filteredClubs });
        }
        if(e.target.value=="priceRs250toRs500")
        {
          const filteredClubs = this.state.SaverTodayDetails.filter(Club => {
     
            if(Club.price>250 && Club.price <=500)
            {
              return Club;
            }
          
           
          });
          this.setState({ SaverTodayDetails: filteredClubs });
        }
        if(e.target.value=="priceMorethanRs500")
        {
          const filteredClubs = this.state.SaverTodayDetails.filter(Club => {
     
            if(Club.price>=500 )
            {
              return Club;
            }
          
           
          });
          this.setState({ SaverTodayDetails: filteredClubs });
        }
        if(e.target.value=="DiscountUpto20")
        {
          const filteredClubs = this.state.SaverTodayDetails.filter(Club => {
     
            if(Club.discount<=20 )
            {
              return Club;
            }
          
           
          });
          this.setState({ SaverTodayDetails: filteredClubs });
        }
        if(e.target.value=="Discount2150")
        {
          const filteredClubs = this.state.SaverTodayDetails.filter(Club => {
     
            if(Club.discount>=21 && Club.discount<=50 )
            {
              return Club;
            }
          
           
          });
          this.setState({ SaverTodayDetails: filteredClubs });
        }
        if(e.target.value=="DiscountMorethan51")
        {
          var filteredClubs = this.state.SaverTodayDetails.filter(Club => {
     
            if(Club.discount>=51)
            {
              return Club;
            }
            else
            {
              return this.state.SaverTodayDetails
            }
          
           
          });
          this.setState({ SaverTodayDetails: filteredClubs });
        }
        


    } 
   
  }


  FilterTakingInput(e)
  {
    if(e.target.id === 'shortby') {
       
      this.setState({isFilterClicked:true})


      if(e.target.value=="Alphabetical")
      {
       var Alphabetical =  this.state.SaverTodayDetails.sort((a, b) => a.product_name.toLowerCase().localeCompare(b.product_name.toLowerCase()))
         this.setState({SaverTodayDetails:Alphabetical})

      }

        if(e.target.value=="priceTrue")
        {
           this.handleSort(true)
        }
        if(e.target.value=="priceFalse")
        {
           this.handleSort(false)
        }
        if(e.target.value=="savingFalse")
        {
           this.handleDiscountSort(false)
        }
        if(e.target.value=="savingTrue")
        {
           this.handleDiscountSort(true)
        }
        


    } 
   
  }

  ActionClickedFilter()
  {
   


   this.setState({clickedfilter:true})
    const filteredProducts = this.state.SaverTodayDetails.filter(Product => {
   
      if( ((Product.price -(Product.price * (Product.discount / 100)))>this.state.minPrice && (Product.price -(Product.price * (Product.discount / 100))) <this.state.maxPrice) && Product.discount>this.state.percatheDicount)
      {
        return Product;
      }
    
    //   || Product.discount<=this.state.percatheDicount
    });
    this.setState({ SaverTodayDetails: filteredProducts });
 

  }

  productDetailsAction(productId) 
{


  this.handleNext("/Products/"+productId)


}


 async componentDidMount()
  {


      var UserID = await cookies.get('UserID');
    
       this.setState({UserID:Number(UserID),isFilterClicked:false})

      this.fetchSaverProducts()
    

  }
 
  clearFilter(){
this.fetchSaverProducts()
this.setState({clickedfilter:false})
  }

  fetchSaverProducts(){

    fetch(URL+"/APP-API/Product/GetStoreProductByBrand",{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

        brand_id:this.props.match.params.brandId,
        UserID:this.state.UserID
        
       
      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      

  
      this.setState({ SaverTodayDetails: responseJson, inMemorySaverTodaysData:responseJson, isloaded:true,totalProductNumber:Object.keys(responseJson).length});
  
    
       
       
     })
     .catch((error) => {
        // console.error(error);
          
     });
    

  }

  onClickFilter()
  {
          /* filter click open filter */
    if ($('body').hasClass('filtermenu-open') == true) {
        $('.filter-btn').find('i').html('close');
    }
    $('.filter-btn').on('click', function () {
        if ($('body').hasClass('filtermenu-open') == true) {
            $('body').removeClass('filtermenu-open');
            $(this).find('i').html('filter_list')

        } else {
            $('body').addClass('filtermenu-open');
            $(this).find('i').html('close')
        }
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
                          <li class="breadcrumb-item active" aria-current="page">{this.props.match.params.brandName}</li>
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
                                placeholder={"Search Product in "+this.props.match.params.brandName}/>
                   
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
</section>

      <section class="section-b-space ratio_asos">
      <div class="collection-wrapper shadow-lg">
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
                                                              <li onClick={()=>this.SixLayout()}> <img src="/assets/images/icon/6.png" alt="" class="product-6-layout-view"/></li>
                                                          </ul>
                                                      </div>
                                                      <div class="product-page-per-view">
                                                          <select onChange={this.FilterTakingInput} id="shortby">
                                                          <option value="null"> Short By </option>
                                                          <option value="Alphabetical">Alphabetical </option>
                                                              <option  value="priceTrue">Price- Low to High</option>
                                                              <option  value="priceFalse">Price- High to low </option>
                                                              <option  value="savingFalse">Price Saving- High to low </option>
                                                              <option  value="savingTrue">Price Saving- Low to High</option>
                                                          </select>
                                                      </div>
                                                      <div class="product-page-filter">
                                                      <select onChange={this.FilterRefinebyInput} id="Refineby">
                                                      <option value="null"> Refine By </option>
                                                      
                                                          <option  value="priceLess50">Price- Less than Rs 50</option>
                                                          <option  value="priceRs50toRs250">Price- Rs 50 to Rs 250 </option>
                                                          <option  value="priceRs250toRs500">Price- Rs 250 to Rs 500 </option>
                                                          <option  value="priceMorethanRs500">Price- More than Rs 500 </option>
                                                          <option  value="DiscountUpto20">Discount- UpTo 20% </option>
                                                          <option  value="Discount2150">Discount- 21 % To 50 %</option>
                                                          <option  value="DiscountMorethan51">Discount- More than 51 %</option>
                                                      </select>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="product-wrapper-grid">
                                          <div class="row margin-res ">


                                          { this.state.SaverTodayDetails.slice(0,this.state.ShowProductPerPage).map((item, key) => {
                                            return (
                                                
                                              <div class="col-xl-3 col-lg-3 col-sm-4 col-6">
                                              <div class="product-box shadow-lg">
                                                    <div class="img-block  justify-content-center">
                            
                            
                                                    {Number(item.discount)!==0?
                                                      (
                                                      <div>
                                                      {item.discount % 1 === 0?(
                                                        <div class="lable-wrapper"><span class="lable1">{Math.round(item.discount)} %</span> <span class="lable2">
                                                        off</span></div>
                                                      ):(
                                                      <div class="lable-wrapper"><span class="lable1">{Number(item.discount).toFixed(2)} %</span> <span class="lable2">
                                                      off</span></div>
                                                      )} 
                                                      
                                                      </div>
                                                      ):null}
                            
                            
                                                  <div class="front justify-content-center">
                                                      <a onClick={() => this.productDetailsAction(item.id)}><Img 
                                                      style={{width:"auto",margin:"auto",display:'block', height:200}} 
                                                      src={URL+"/images/product-images/"+item.product_image} 
                                                      class="img-fluid blur-up lazyload bg-img" 
                                                      loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}} src="/assets/images/icon/loding.gif" />}
                                                      unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}

                                                      alt=""/></a>
                                                  </div>
                                                  <div class="back justify-content-center">
                                                  <a onClick={() => this.productDetailsAction(item.id)}><Img 
                                                  style={{width:"auto",margin:"auto",display:'block', height:200}} 
                                                  src={URL+"/images/product-images/"+item.product_image} 
                                                  class="img-fluid blur-up lazyload bg-img" 
                                                  loader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}} src="/assets/images/icon/loding.gif" />}
                                                  unloader={<Img style={{width:"auto",margin:"auto",display:'block', height:200}}  src="/assets/images/icon/sorry.png" />}

                                                  alt=""/></a>                                                  </div>
                            
                             
                            
                                                   
                            
                                                      <div class="product-detail center d-flex justify-content-center my-1">
                                                      <div>
                                                          <a >
                                                          {this.getTitle(item.product_name,item.product_size,item.product_unit)}
                                                       
                                                          </a>
                                                        
                                                          <h4><del>₹ {item.price}</del><span>  ₹ {this.discountedPrice(item.price,item.discount)} </span></h4>
                                                         
                                                      </div>
                                                    </div>
                            
                            
                                                    <div class="center d-flex justify-content-center my-2" >
                                                    {item.addedtocart==1?(
                                            
                                                      <div class="center d-flex justify-content-center">
                                                      <NumericInput 
                                                      onChange={(e) =>this.onChange(e,item.id,item.quantity)}
                                                      className="btn btn-solid center d-flex justify-content-center " 
                                                      min={0}
                                                      size="10"
                                                      max={Number(item.quantity)<=0?1:Number(item.quantity)}
                                                      value={Number(item.cartQunatity)}
                                                      step={1}
                                                      
                                                      mobile
                                                      valueType='real' 
                                                      />
                                                    
                                                     </div>
                                                      ):(
                                                    
                                                        <div>
                                                        <div  onClick={() => this.isCartCheckedOrNot(item,key,)}  class="btn btn-solid center d-flex justify-content-center">add to cart</div>
                                                        </div>
                                                    
                                                    
                                                        )}
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
         var heading = <h6>{product_name.substring(0, 20)} {product_size} {product_unit}</h6>

      }

      return heading
  
      
  
    }

discountedPrice(price,dis)
{
const  discount = price * (dis / 100)
 const net = price - discount
 return Number(net).toFixed(0); 
}

onChange(counterValue,productId,quantity) {

  if(counterValue<=0)
  {
this.deleteCartItem(productId)
  }
else{
this.addQuantity(counterValue,productId,quantity)
}

}
  


   async isCartCheckedOrNot(item,index) {
      
      var isLogged = await cookies.get('isLogged')
      // alert(isLogged)
      if(isLogged===undefined)
      {
        // alert('not loged')
        this.handleNext("/Login")
     


      }
else{





     this.setState(state => ({
      SaverTodayDetails: state.SaverTodayDetails.map(q => {
        if (q.id === item.id) {
          return {...q, addedtocart: 1};
        }
        return q;
      })
    }), () => {
      // console.log(this.state.SaverTodayDetails[1]);
    });

     this.setState(state => ({
      SaverTodayDetails: state.SaverTodayDetails.map(q => {
        if (q.id === item.id) {
          return {...q, cartQunatity: 1,};
        }
        return q;
      })
    }), () => {
 
    });

 
  
    this.props.CartHandler(1);

    this.addCartItem(item.id)
 
     
      
}


  }

 

  addCartItem(productId)
  {
    fetch(URL+"/APP-API/Product/AddCart",{

         method:'post',
         header:{
           'Accept': 'application/json',
           'Content-type': 'application/json'
         },
         body:JSON.stringify({

          customerID:this.state.UserID,
          productId:productId,
          Store_code:this.state.Store_code,



         })
         
       })
        .then((response) => response.json())
        .then((responseJson) => {


          // console.log('Add cart res',responseJson)
          this.fetchSaverProducts()
          
         

        })

  }


  async deleteCartItem(productId)
  {


    this.props.CartHandler(-1);


   await this.setState(state => ({
      SaverTodayDetails: state.SaverTodayDetails.map(q => {
        if (q.id === productId) {
          return {...q, addedtocart: 0,};
        }
        return q;
      })
    }), () => {
      // console.log(this.state.SaverTodayDetails[1]);
    });
 
   await this.setState(state => ({
      SaverTodayDetails: state.SaverTodayDetails.map(q => {
        if (q.id === productId) {
          return {...q, cartQunatity: 1,};
        }
        return q;
      })
    }), () => {
      // console.log(this.state.SaverTodayDetails[1]);
    });


 



    fetch(URL+"/APP-API/Product/AddCartRemove",{

      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({

       customerID:this.state.UserID,
       productId:productId,
       Store_code:this.state.Store_code,
      
     
      })
      
    })
     .then((response) => response.json())
     .then((responseJson) => {
       
      
this.fetchSaverProducts()

     })

  

  }

  async addQuantity(value,productId,quantity)
  {
if(Number(quantity)>0)
{

  await  this.setState(state => ({
    SaverTodayDetails: state.SaverTodayDetails.map(q => {
      if (q.id === productId) {
        return {...q, cartQunatity: value};
      }
      return q;
    })
  }), () => {
    // console.log(this.state.SaverTodayDetails[1]); 
  });





   await fetch(URL+"/APP-API/Product/AddCartIncrement",{

         method:'post',
         header:{
           'Accept': 'application/json',
           'Content-type': 'application/json'
         },
         body:JSON.stringify({

          customerID:this.state.UserID,
          productId:productId,
          Store_code:this.state.Store_code,
          qty:value
       })
       
     })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)


      })

}

}  

  }

export default withRouter(ProductByBrands);
