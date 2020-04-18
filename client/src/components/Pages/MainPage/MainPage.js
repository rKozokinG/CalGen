import React from 'react';
import { 
	Button,
} from 'reactstrap';

import NavigationBar from '../../NavigationBar/NavigationBar';
import Library from '../../Library/Library';
import WorkoutGenerator from '../../WorkoutGenerator/WorkoutGenerator';
import './MainPage.css';
import * as routes from '../../../constants/routes';

import { connect } from 'react-redux';
import { changeRoute } from '../../../actions/routeActions';

const MainPage = (props) => {
	let display;
	
	switch(props.route) {
		case routes.HOME:
			display = (
				<div className = " container-fluid display-4 p-5 bg-home text-light">
		    		<h1 className = " text-center"> ClaGen </h1>
		    		<h4 className = "text-capitalize text-center m-5 py-3 px-5 "> A simple way to train. Choose your level, Choose Body Parts or Movement Patterns to train, Choose your Equipment to use. Workout and get strong. </h4>
					<div className="d-flex m-3 p- justify-content-center">
						<Button 
							className = "text-capitalize py-3 px-5" 
							onClick={() => props.changeRoute("workoutGenerator")} 
							color="primary"
							size="lg">
							Start here!
						</Button>
					</div>
				</div>
			)
			break;
		case routes.WORKOUT_GENERATOR:
	    	display = (
		    	<div>
		    		<WorkoutGenerator/>
				</div>
			)
		    break;
	    case routes.EXERCISES_LIBRARY:
		    display = (
	    		<Library />
			)
	    	break;
	    case routes.FORUM:
	    	display = (
	    		<div>
		    		<h1> forum </h1>
				</div>
			)
	    	break;
	    case routes.ACCOUNT:
	    	display = (
	    		<div>
		    		<h1> account </h1>
				</div>
			)
	    	break;
	    case routes.CONTACT_US:
	    	display = (
	    		<div>
		    		<h1> contactUs </h1>
				</div>
			)
	    	break;
		default://routes.HOME
			display = (
				<div className="">
		    		<h1> ClaGen </h1>
		    		<h3> A simple way to train. Choose your level, Choose Bodyparts to train, Choose your Equipment to use. Do the workout and get strong </h3>
				</div>
			)
	}

	return(
		<div>
          <NavigationBar />
          {display}
      </div>
	);
}

const mapStateToProps = state =>({
  route: state.route.route
})

export default connect(mapStateToProps,{changeRoute})(MainPage);