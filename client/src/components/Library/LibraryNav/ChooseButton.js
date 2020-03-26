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
        />
    )
  });
  return (
    <div>
        <Button className = "m-2" color="dark" onClick={toggle} style={{ marginBottom: '1rem' } }>{boxName}</Button>
        <Collapse isOpen={isOpen}>
          <Card className="border-0"color="info">
            {checkBoxes}
          </Card>
        </Collapse>
    </div>
  );
}


export default ChooseButton;