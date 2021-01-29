


import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';
import $ from 'jquery';
import Cookies from 'universal-cookie';
const cookies = new Cookies()
class NotFound extends Component{
    constructor(props) {

        super(props);
    
          this.state = {
            user_name:null
          }
          this.onChange = this.onChange.bind(this);
      }
  async  componentDidMount(){

        var user_name = await cookies.get('user_name');
        this.setState({user_name})
    }


    onChange(e)
    {
    /* menu open close wrapper screen click close menu */
    $('.menu-btn').on('click', function (e) {
        e.stopPropagation();
        if ($('body').hasClass('sidemenu-open') == true) {
            $('body, html').removeClass('sidemenu-open');
            setTimeout(function () {
                $('body, html').removeClass('menuactive');
            }, 500);
        } else {
            $('body, html').addClass('sidemenu-open menuactive');
        }
    });
    
    $('.wrapper').on('click', function () {

        if ($('body').hasClass('sidemenu-open') == true) {

            $('body, html').removeClass('sidemenu-open');
            setTimeout(function () {
                $('body, html').removeClass('menuactive');
            }, 500);
        }
    });
  

    }
render() {

    return ( 
 
        <div class="text-center mt-4">
        <div class="figure-profile shadow my-4">
            <figure><img src="/img/notfound.png" alt=""/></figure>
        </div>
        <h3 class="mb-1 mt-4">Opps Something Went Wrong</h3>
        <Link to="/"  > 
                <a class="btn btn-danger mt-4" role="button">Home</a>
            </Link>
    </div>
    );
}


}



export default withRouter(NotFound);
