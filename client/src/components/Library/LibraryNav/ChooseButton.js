import React, { useState } from 'react';
import {
  Collapse,
  Button,
  Card,
  CustomInput
} from 'reactstrap';


function ChooseButton(props){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {boxName, checkBoxesValues} = props;

  const checkBoxes = checkBoxesValues.map(box => {
  	return (
        <CustomInput
          type="checkbox" 
	        id={box}
          key={box} 
	        label={box} 
          onClick={() => props.changeFilters({filterType:boxName.toLowerCase(), filterName:box.toLowerCase()})}
        />
    )
  });
  return (
    <div>
        <Button className = "m-2" color="dark" onClick={toggle} style={{ marginBottom: '1rem' } }>{boxName}</Button>
        <Collapse isOpen={isOpen}>
          <Card className=" p-1 text-light" color="dark">
            {checkBoxes}
          </Card>
        </Collapse>
    </div>
  );
}


export default ChooseButton;