import React, { useState } from 'react';
import {
  Input
} from 'reactstrap';


function SearchForm(props){
  return (
    <div>
    	<Input type="text" name={props.placeHolder} id="" placeholder={props.placeHolder} />
    </div>
  );
}


export default SearchForm;