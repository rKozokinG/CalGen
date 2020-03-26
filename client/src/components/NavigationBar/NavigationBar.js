import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


function NavigationBar(props){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark  expand="md">
        <NavbarBrand onClick={() => props.changeRoute("home")}>CalGen</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        	<Nav className="mr-auto" navbar>
        		<NavItem>
        			<NavLink onClick={() => props.changeRoute("workoutGenerator")}>Workout Generator</NavLink>
				</NavItem>
            	<NavItem>
              		<NavLink onClick={() => props.changeRoute("exercisesLibrary")}>Exercises Library</NavLink>
            	</NavItem>
            	<NavItem>
              		<NavLink onClick={() => props.changeRoute("posts")}>Posts</NavLink>
            	</NavItem>
          	</Nav>
          	<UncontrolledDropdown inNavbar>
          		<DropdownToggle color="dark" caret>
          			Settings
          		</DropdownToggle>
          		<DropdownMenu>
          			<DropdownItem onClick={() => props.changeRoute("account")}>
          				Account
	            	</DropdownItem>
	            	<DropdownItem onClick={() => props.changeRoute("contactUs")}>
	            	  Contact us
	            	</DropdownItem>
	            	<DropdownItem divider />
	            	<DropdownItem onClick={() => props.changeRoute("login")}>
	            	  Logout
	            	</DropdownItem>
	        	</DropdownMenu>
        	</UncontrolledDropdown>
		</Collapse>
      </Navbar>
    </div>
  );
}


export default NavigationBar;