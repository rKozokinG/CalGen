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
			signInEmail : '',
			signInPassword : ''
		};
	}

	onSignInEmailChange = (event) => {
  		this.setState({signInEmail : event.target.value});

  	}

	onSignInPasswordChange = (event) => {
  		this.setState({signInPassword : event.target.value});
	}

	onSubmitSignIn = (event) =>{
		const {changeRoute} = this.props;
		changeRoute("home");
		

		/*fetch('http://localhost:3001/signin',{
			method :'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				email : this.state.signInEmail,
				password : this.state.signInPassword
			})
		})
	    	.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.onRouteChange('home');
					this.props.signUser(user);
				}
				else{
					alert('Failure logging in, check your email and password');
					this.setState({
						signInEmail : '',
						signInPassword : ''
					});
					window.location.reload();
				}
			});*/
	}
	render(){
		const {changeRoute} = this.props;
		return (
			<div className=" ">
				<h1 className="d-flex justify-content-center display-4 m-5 py-3 px-5 text-white ">CalGen</h1>
				<div className="d-flex justify-content-center">
					<Form className="w-25 border border-light m-3 py-3 px-5 text-white shadow-lg rounded-lg" >
						<legend dark>Sign In</legend>
						<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
		        			<Label for="exampleEmail" className="mr-sm-2">
		        				Email
		        			</Label>
		        			<Input
		        				onChange = {this.onSignInEmailChange} 
		        				type="email" 
		        				name="email" 
		        				id="exampleEmail" 
		        				placeholder="Email" />
		     			</FormGroup>
		      			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					        <Label for="examplePassword" className="mr-sm-2">Password</Label>
					        <Input
					        	onChange = {this.onSignInPasswordChange}
					        	type="password" 
					        	name="password"
					        	id="examplePassword"
					        	placeholder="Password" />
		      			</FormGroup>
		      			<Button className="my-2" onClick = {this.onSubmitSignIn}>Sign In</Button>
		      			<br/>
		      			<Button className="" onClick = {() => changeRoute('register')}>Register</Button>
		    		</Form>
		    	</div>	
			</div>
		)
	}
} 

export default LoginPage;