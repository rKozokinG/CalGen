import React, { useState } from 'react';
import {
	Button,
	CustomInput,
	Container, 
	Row, 
	Col
} from 'reactstrap';

import { EQUIPMENTS } from '../../../constants/exercisesConsts';
import { SKILL_OR_STRENGTH } from '../../../constants/routes';


import { connect } from 'react-redux';
import { changeGeneratorRoute } from '../../../actions/routeActions';
import { setWorkoutEquipment } from '../../../actions/generatorActions';

const initialState = {};

let i;

for (i = EQUIPMENTS.length - 1; i >= 0; i--) {
  initialState[EQUIPMENTS[i]] = false;
}
//end of initializing the sate of the component


function WorkoutEquipment (props){
	const [Equipment, setEquipment] = useState(initialState);
	const checkBoxes = EQUIPMENTS.map(equip => {
		return(
			<Col key={equip}>
				<CustomInput 
				type="switch"
				onClick = {() => changebodyPart(equip)} 
				id={equip} 
				label={equip} />
			</Col>
		)
	})
	const changebodyPart = (equip) => {
		setEquipment(preState => {
			var newState = {...preState};
			newState[equip] = !newState[equip];
			return newState;
    	})
  	}

	return(
		<div>
			<h1 className = " text-center">Choose Equipment you would like to use</h1>
			<Container className="py-2 d-flex justify-content-center">
				<Row xs="1" sm="2" md="4">
					{checkBoxes}
				</Row>	
			</Container>
			<div className="m-3 d-flex justify-content-center">
				<Button 
					className = "m-3 text-capitalize " 
					onClick={() => {
						if (Object.values(Equipment).some(filter => filter)) {
							props.setWorkoutEquipment(Equipment);
							props.changeGeneratorRoute(SKILL_OR_STRENGTH);
						}
						else{
							alert("Please select equipment");
						}
					}} 
					color="primary"
					size="lg">
					Submit
				</Button>	
			</div>
		</div>
	);	
}

export default connect(null, { 
	changeGeneratorRoute,
	setWorkoutEquipment 
})(WorkoutEquipment);