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

const bodyPartCheckBoxes = ["Full Body","Upper Body","Lower Body","Chest","Back","Shoulder","Legs","Abs","Biceps","Triceps","Lower Back"];
const levelCheckBoxes = ["Easy","Intermediate","Advance","Hard","Hell No"];
const equipmentCheckBoxes = ["No Equipment","Bar","Rings","Chair"];

const initialState = {
  bodyPart: {}, 
  level: {},
  equipment: {}  
};
let i;
for (i = bodyPartCheckBoxes.length - 1; i >= 0; i--) {
  initialState.bodyPart[bodyPartCheckBoxes[i].toLowerCase()] = false;
}
for (i = levelCheckBoxes.length - 1; i >= 0; i--) {
  initialState.level[levelCheckBoxes[i].toLowerCase()] = false;
}
for (i = equipmentCheckBoxes.length - 1; i >= 0; i--) {
  initialState.equipment[equipmentCheckBoxes[i].toLowerCase()] = false;
}

function LibraryNav(props){
  const [filters, setFilters] = useState(initialState);

  //filter = {type : filter}
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
            <ChooseButton boxName="BodyPart" checkBoxesValues={bodyPartCheckBoxes} changeFilters={changeFilters}/>
            <ChooseButton boxName="Level" checkBoxesValues={levelCheckBoxes} changeFilters={changeFilters}/>
            <ChooseButton boxName="Equipment" checkBoxesValues={equipmentCheckBoxes} changeFilters={changeFilters}/>
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