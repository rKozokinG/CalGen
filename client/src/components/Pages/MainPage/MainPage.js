import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Library from '../../Library/Library';
import './MainPage.css';

const MainPage = (props) => {
	let display;
	
	switch(props.route) {
		case "home":
			display = (
				<div className = " display-4 p-5 bg-home text-light">
		    		<h1 className = " text-center"> ClaGen </h1>
		    		<h4 className = "text-capitalize text-center m-5 py-3 px-5 "> A simple way to train. Choose your level, Choose Bodyparts to train, Choose your Equipment to use. Do the workout and get strong. </h4>
				</div>
			)
			break;
		case "workoutGenerator":
	    	display = (
		    	<div>
		    		<h1> workoutGenerator </h1>
				</div>
			)
		    break;
	    case "exercisesLibrary":
		    display = (
	    		<Library />
			)
	    	break;
	    case "forum":
	    	display = (
	    		<div>
		    		<h1> forum </h1>
				</div>
			)
	    	break;
	    case "account":
	    	display = (
	    		<div>
		    		<h1> account </h1>
				</div>
			)
	    	break;
	    case "contactUs":
	    	display = (
	    		<div>
		    		<h1> contactUs </h1>
				</div>
			)
	    	break;
		default://home
			display = (
				<div className="">
		    		<h1> ClaGen </h1>
		    		<h3> A simple way to train. Choose your level, Choose Bodyparts to train, Choose your Equipment to use. Do the workout and get strong </h3>
				</div>
			)
	}

	return(
		<div>
          <NavigationBar changeRoute={props.changeRoute} />
          {display}
      </div>
	);
}

export default MainPage;