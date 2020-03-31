import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function ExerciseCard (props) {
  const {
    exerciseName, 
    bodyPart,  
    level,
    equipment, 
    exercisePicture, 
    exerciseLink } = props.exercise
  return (
      <Card className="m-4 shadow d-inline-flex "  style={{width: "230px", height: "400px"}}> 
        <CardBody className="p-2">
          <CardTitle className="border-bottom border-right w-50 p-2 shadow-sm">{bodyPart}</CardTitle>
          
          <CardSubtitle className="p-1 w-50">{exerciseName}</CardSubtitle>
        </CardBody>
        <img className="border m-3 shadow" width="60%" height="15%" src={exercisePicture} alt={exerciseName + " Pic"} />
        <CardBody className="p-2"> 
          <CardText className = "m-1">Level : {level}</CardText>
          <CardText className = "m-1">Equipment : {equipment}</CardText>
          <div className="overflow-auto w-100 h-50 m-1 border shadow-sm">
            <CardText >Description : Occaecat dolor velit ex consequat proident in dolore ad quis proident qui fugiat voluptate nulla exercitation et culpa id do voluptate amet ullamco cupidatat et commodo.
            </CardText>
          </div>
          <Button className="shadow" target="_blank" rel="noopener" href={exerciseLink} style={{width: "50%", height: "auto"}}>How To</Button>
        </CardBody>
      </Card>
  );
};

export default ExerciseCard;


