import React from 'react';
import { 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input 
} from 'reactstrap';

import * as routes from '../../../constants/routes';
import { connect } from 'react-redux';
import { changeRoute } from '../../../actions/routeActions';

class LoginPage extends React.Component{
	constructor (props) {
		super(props);
    	this.state = {
			email : '',
			password : ''
		};

		this.onChange = this.props.onChange.bind(this);
	}

	onSubmitSignIn = (event) =>{
		const {changeRoute} = this.props;
		changeRoute(routes.HOME);
	}
	render(){
		const {changeRoute} = this.props;
		return (
			<div className="">
				<h1 className="d-flex justify-content-center display-4 m-5 py-3 px-5 text-dark ">CalGen</h1>
				<div className="d-flex justify-content-center ">
					<Form className="bg-dark w-25 border border-light m-3 py-3 px-5 text-white shadow-lg rounded-lg" >
						<legend >Sign In</legend>
						<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
		        			<Label for="exampleEmail" className="mr-sm-2">
		        				Email
		        			</Label>
		        			<Input
		        				onChange = {this.onChange} 
		        				type="email" 
		        				name="email" 
		        				id="exampleEmail" 
		        				placeholder="Email" />
		     			</FormGroup>
		      			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					        <Label for="examplePassword" className="mr-sm-2">Password</Label>
					        <Input
					        	onChange = {this.onChange}
					        	type="password" 
					        	name="password"
					        	id="examplePassword"
					        	placeholder="Password" />
		      			</FormGroup>
		      			<Button className="my-2" onClick = {this.onSubmitSignIn}>Sign In</Button>
		      			<br/>
		      			<Button onClick = {() => changeRoute(routes.REGISTER)}>Register</Button>
		    		</Form>
		    	</div>	
			</div>
		)
	}
} 

export default connect(null,{changeRoute})(LoginPage);