import React from 'react';
import { 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input 
} from 'reactstrap';

class LoginPage extends React.Component{
	constructor (props) {
		super(props);
    	this.state = {
			registerEmail : '',
			registerPassword : '',
			registerName: ''
		};
	}

	onRegisterEmailChange = (event) => {
  		this.setState({registerEmail : event.target.value});

  	}

	onRegisterPasswordChange = (event) => {
  		this.setState({registerPassword : event.target.value});
	}
	onRegisterNameChange = (event) => {
  		this.setState({registerName : event.target.value});
	}

	onSubmitSignIn = (event) =>{
		const {changeRoute} = this.props;
		changeRoute("login");

	}
	render(){
		return (
			<div className="d-flex justify-content-center">
				<Form className="border border-light m-5 py-3 px-5 shadow-lg text-white" >
					<legend dark>Register</legend>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
	        			<Label for="exampleName" className="mr-sm-2">
	        				Name
	        			</Label>
	        			<Input
	        				onChange = {this.onRegisterNameChange} 
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
	        				onChange = {this.onRegisterEmailChange} 
	        				type="email" 
	        				name="email" 
	        				id="exampleEmail" 
	        				placeholder="Email" />
	     			</FormGroup>
	      			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
				        <Label for="examplePassword" className="mr-sm-2">Password</Label>
				        <Input
				        	onChange = {this.onRegisterPasswordChange}
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

export default LoginPage;