import React from 'react';
import {
  Navbar,
  Button,
  Nav
} from 'reactstrap';
import ChooseButton from './ChooseButton'
import SearchForm from '../../SearchForm/SearchForm'


function LibraryNav(props){
  const bodyPartCheckBoxes = ["Full Body","Upper Body","Lower Body","Chest","Back","Shoulder","Legs","Abs","Biceps","Triceps","Lower Back"];
  const LevelCheckBoxes = ["Easy","intermediate","Advance","Hard","Hell No"];
  const EquipmentCheckBoxes = ["No Equipment","Bar","Rings","Chair"];

  return (
    <div>
      <Navbar className = "shadow d-flex align-items-start" color="info">
        <Nav className="mr-auto" >
            <ChooseButton boxName="Body Part" checkBoxesValues={bodyPartCheckBoxes} />
            <ChooseButton boxName="Level" checkBoxesValues={LevelCheckBoxes} />
            <ChooseButton boxName="Equipment" checkBoxesValues={EquipmentCheckBoxes} />
        </Nav>
        <Button className="m-2" color="primary" style={{ marginBottom: '1rem' } }>Filter</Button>
        <div className="my-2">
            <SearchForm placeHolder="Exercise Search"/>
        </div>
      </Navbar>
    </div>
  );
}


export default LibraryNav;