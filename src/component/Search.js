import React from 'react';
import { Link} from "react-router-dom";


function Search() {
    return (
      <Link to="/Search"  > 
        <input type="text" class="form-control form-control-lg search my-3" placeholder="Search"/>
      </Link>  
        );
  }

export default Search;
