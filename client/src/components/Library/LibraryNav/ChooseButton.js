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
  const {boxValue,boxName, checkBoxesValues, checkBoxesLabels} = props;

  const checkBoxes = checkBoxesValues.map((box, index) => {
  	return (
        <CustomInput
          type="checkbox" 
	        id={box}
          key={box} 
	        label={checkBoxesLabels[index]} 
          onClick={() => props.changeFilters({filterType:boxName, filterName:box})}
        />
    )
  });
  return (
    <div>
        <Button className = "m-2" color="dark" onClick={toggle} style={{ marginBottom: '1rem' } }>{boxValue}</Button>
        <Collapse isOpen={isOpen}>
          <Card className=" p-1 text-light" color="dark">
            {checkBoxes}
          </Card>
        </Collapse>
    </div>
  );
}


export default ChooseButton;