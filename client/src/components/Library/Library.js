import React, { Component } from 'react';
import ExercisesCards from '../ExercisesCards/ExercisesCards'
import LibraryNav from './LibraryNav/LibraryNav';

import { connect } from 'react-redux';
import { fetchExercises } from '../../actions/exerciseActions';


class Library extends Component{

	componentDidMount(){
		this.props.fetchExercises();
	}

	render(){
		return(
			<div className = 'm-4 border rounded-lg'>
				<LibraryNav />
				<div className = 'bg-white p-2' >
					<ExercisesCards data={this.props.exercises} />
				</div>
			</div>
		);	
	}
}

const mapStateToProps = state => {
	return({
		exercises: state.exercises.exercises
	});
}
export default connect(mapStateToProps, { fetchExercises })(Library);