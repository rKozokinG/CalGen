import React, { useState } from 'react';
import {
  Navbar,
  Button,
  Nav
} from 'reactstrap';
import ChooseButton from './ChooseButton'
import SearchForm from '../../SearchForm/SearchForm'

import { connect } from 'react-redux';
import { fetchExercisesSelective } from '../../../actions/exerciseActions';

import { BODY_PARTS, LEVELS_LABEL, LEVELS, EQUIPMENTS } from '../../../constants/exercisesConsts';

//initializing the sate of the component
const initialState = {
  bodyPart: {}, 
  level: {},
  EQUIPMENTS: {}  
};
let i;
for (i = BODY_PARTS.length - 1; i >= 0; i--) {
  initialState.bodyPart[BODY_PARTS[i]] = false;
}
for (i = LEVELS.length - 1; i >= 0; i--) {
  initialState.level[LEVELS[i]] = false;
}
for (i = EQUIPMENTS.length - 1; i >= 0; i--) {
  initialState.EQUIPMENTS[EQUIPMENTS[i]] = false;
}
//end of initializing the sate of the component

function LibraryNav(props){
  const [filters, setFilters] = useState(initialState);

  //filter = {
  //  filterType : filterType,
  //  filterName : filterName
  //}
  const changeFilters = (filter) => { 
    setFilters(preState => {
      var newState = {...preState};
      newState[filter.filterType][filter.filterName] = !newState[filter.filterType][filter.filterName]; 
      return {...newState};
    })
  }
  return (
    <div>
      <Navbar className = "shadow d-flex align-items-start" color="primary">
        <Nav className="mr-auto" >
            <ChooseButton boxValue="Body Part" boxName="bodyPart" checkBoxesValues={BODY_PARTS} checkBoxesLabels={BODY_PARTS} changeFilters={changeFilters}/>
            <ChooseButton boxValue="Level" boxName="level" checkBoxesValues={LEVELS} checkBoxesLabels={LEVELS_LABEL} changeFilters={changeFilters}/>
            <ChooseButton boxValue="EQUIPMENTS" boxName="EQUIPMENTS" checkBoxesValues={EQUIPMENTS} checkBoxesLabels={EQUIPMENTS} changeFilters={changeFilters}/>
            <div>
              <Button className="m-2" color="secondary" onClick={() => props.fetchExercisesSelective(filters)}>Filter</Button>
            </div>
        </Nav>      
        <div className="my-2">
            <SearchForm placeHolder="Exercise Search"/>
        </div>
      </Navbar>
    </div>
  );
}


export default connect(null,{ fetchExercisesSelective })(LibraryNav);