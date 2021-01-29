import React, { Component } from 'react';
import { Switch, Route,Router, BrowserRouter, withRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import SplshImage from './component/SplshImage';
import Theme from './component/Theme';

import HomePage from './Page/HomePage';
import LoginPage from './Page/LoginPage';
import ProductDetailsPage from './Page/ProductDetailsPage';
import CartPage from './Page/CartPage';
import SearchMachinePage from './Page/SearchMachinePage';
import SignUpPage from './Page/SignUpPage';
import ProfilePage from './Page/ProfilePage';
import OrderPage from './Page/OrderPage';
import SubCategoryListPage from './Page/SubCategoryListPage';
import OffersPage from './Page/OffersPage';

import AddAddressPage from './Page/AddAddressPage';
import EditAddressPage from './Page/EditAddressPage';
import NotFoundPage from './Page/NotFoundPage';
import OrderDetailsPage from './Page/OrderDetailsPage';
import BrandListPage from './Page/BrandListPage';

import ProductBySubCategoryPage from './Page/ProductBySubCategoryPage';
import ProductByBrandsPage from './Page/ProductByBrandsPage';

import CheackOutPage from './Page/CheackOutPage';

import Skyably from './Page/Skyably';

import Cookies from 'universal-cookie';

const cookies = new Cookies()


class App extends Component{
  constructor(props) {

    super(props);

      this.state = {
       
      }
 

  }


  async componentDidMount()
  {

    cookies.set("visited", true,{ maxAge: 999999999999 });


  }

  render() {
  return (

    <BrowserRouter>
  
    <LastLocationProvider>

    <SplshImage/>
  
  


    <Switch>
 
    <Route exact  path="/" >
    <HomePage />
    </Route>
    
    <Route exact path="/Products/:productId?" >
    <ProductDetailsPage/>
    </Route>

    <Route exact path="/Category/:categoryId?/:categoryName?" >
    <SubCategoryListPage/>
    </Route>


    <Route exact path="/SubCategorys/:categoryId?/:categoryName?" >
    <ProductBySubCategoryPage/>
    </Route>

    <Route exact path="/Brand/:brandId?/:brandName?" >
    <ProductByBrandsPage/>
    </Route>

    <Route exact path="/Brands" >
    <BrandListPage/>
    </Route>

    <Route exact path="/Offers" >
    <OffersPage/>
    </Route>


    <Route exact path="/Cart" >
    <CartPage/>
    </Route>

    <Route exact path="/Checkout" >
    <CheackOutPage/>
    </Route>

    <Route exact path="/Profile" >
    <ProfilePage/>
    </Route>

    <Route exact path="/Login" >
    <LoginPage/>
    </Route> 

    <Route exact path="/SignUp" >
    <SignUpPage/>
    </Route>


    <Route exact path="/Search" >
    <SearchMachinePage/>
    </Route>

    <Route exact path="/Order" >
    <OrderPage/>
    </Route>

    <Route exact path="/Order-Details/:order_number?/:address_id?/:Order_status?" >
    <OrderDetailsPage/>
    </Route>


    <Route exact path="/Add-Address/:screen?" >
    <AddAddressPage/>
    </Route>

    <Route exact path="/Edit-Address/:screen?/:addressId" >
    <EditAddressPage/>
    </Route>


    <Route exact path="/Skyably" >
    <Skyably/>
    </Route> 

    <Route path='*' exact={true}>
    <NotFoundPage/>
    </Route> 


    </Switch>

    
    
     
    

    <Theme/>
    </LastLocationProvider>>

    </BrowserRouter>
   
   );
}

}

export default App;
