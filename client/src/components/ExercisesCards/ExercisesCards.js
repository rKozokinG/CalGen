import React from 'react';
import ExerciseCard from './ExerciseCard';

function ExercisesCards (props) {
  const cards = props.data.map((exerciseObj) => {
    return (
        <ExerciseCard
          key = {exerciseObj.exercise_name}
          exercise = {exerciseObj}
        />
    )
  });
  return (
    <div>
      {cards}
    </div>
  );
};

export default ExercisesCards;