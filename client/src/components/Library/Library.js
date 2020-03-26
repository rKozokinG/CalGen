import React from 'react';
import ExercisesCards from '../ExercisesCards/ExercisesCards'
import LibraryNav from './LibraryNav/LibraryNav';


function Library(props){
	const data = props.data;
	return(
		<div className = ' m-5 bg-light rounded-lg'>
			<LibraryNav />
			<div className = 'p-2' >
				<ExercisesCards data={data} />
			</div>
		</div>
	);
}

export default Library;