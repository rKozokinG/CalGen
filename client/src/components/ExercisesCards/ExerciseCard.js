import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function ExerciseCard (props) {
  const exerciseName = props.exercise.exercise_name
  const bodyPart = props.exercise.exercise_body_part
  const level = props.exercise.exercise_level
  const equipment = props.exercise.exercise_equipment
  const exercisePicture = props.exercise.exercise_picture
  const exerciseLink = props.exercise.exercise_link
  const exerciseDescription = props.exercise.exercise_description
  return (
      <Card className="m-4 shadow d-inline-flex "  style={{width: "230px", height: "400px"}}> 
        <CardTitle className="border-bottom border-right w-50 p-2 shadow-sm">{bodyPart}</CardTitle>
        <CardSubtitle className="p-1 w-50">{exerciseName}</CardSubtitle>
        <img className="border m-3 shadow" width="60%" height="15%" src={exercisePicture} alt={exerciseName + " Pic"} />
        <CardBody className="p-2"> 
          <CardText className = "m-1">Level : {level}</CardText>
          <CardText className = "m-1">Equipment : {equipment}</CardText>
          <CardText className = "m-1">Description : </CardText>
          <div className="overflow-auto w-100 m-1 border shadow-sm" style = {{height : "35%"}}>
            <CardText >{exerciseDescription}
            </CardText>
          </div>
          <Button className="shadow" target="_blank" rel="noopener" href={exerciseLink} style={{width: "50%", height: "auto"}}>How To</Button>
        </CardBody>
      </Card>
  );
};

export default ExerciseCard;


