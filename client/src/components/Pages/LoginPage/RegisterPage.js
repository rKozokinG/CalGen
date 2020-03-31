import React from 'react';
import { 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input 
} from 'reactstrap';

import { connect } from 'react-redux';
import { changeRoute } from '../../../actions/routeActions';

class RegisterPage extends React.Component{
	constructor (props) {
		super(props);
    	this.state = {
			email : '',
			password : '',
			name: ''
		};

		this.onChange = this.props.onChange.bind(this);
	}

	onSubmitSignIn = (event) =>{
		const {changeRoute} = this.props;
		changeRoute("login");
	}
	render(){
		return (
			<div className="d-flex justify-content-center">
				<Form className="bg-dark border border-light m-5 py-3 px-5 shadow-lg text-white" >
					<legend>Register</legend>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
	        			<Label for="exampleName" className="mr-sm-2">
	        				Name
	        			</Label>
	        			<Input
	        				onChange = {this.onChange} 
	        				type="text" 
	        				name="name" 
	        				id="exampleName" 
	        				placeholder="Name" />
	     			</FormGroup>
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
	      			<Button className="my-2" onClick={this.onSubmitSignIn}>Submit</Button>	 
	    		</Form>
			</div>
		)
	}
} 

export default connect(null,{changeRoute})(RegisterPage);