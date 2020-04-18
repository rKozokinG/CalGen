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

import * as routes from '../../constants/routes';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions/routeActions';

function NavigationBar(props){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark  expand="md">
        <NavbarBrand onClick={() => props.changeRoute(routes.HOME)}>CalGen</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        	<Nav className="mr-auto" navbar>
        		<NavItem>
        			<NavLink onClick={() => props.changeRoute(routes.WORKOUT_GENERATOR)}>Workout Generator</NavLink>
				</NavItem>
            	<NavItem>
              		<NavLink onClick={() => props.changeRoute(routes.EXERCISES_LIBRARY)}>Exercises Library</NavLink>
            	</NavItem>
            	<NavItem>
              		<NavLink onClick={() => props.changeRoute(routes.FORUM)}>Forum</NavLink>
            	</NavItem>
          	</Nav>
          	<UncontrolledDropdown inNavbar>
          		<DropdownToggle color="dark" caret>
          			Settings
          		</DropdownToggle>
          		<DropdownMenu>
          			<DropdownItem onClick={() => props.changeRoute(routes.ACCOUNT)}>
          				Account
	            	</DropdownItem>
	            	<DropdownItem onClick={() => props.changeRoute(routes.CONTACT_US)}>
	            	  Contact us
	            	</DropdownItem>
	            	<DropdownItem divider />
	            	<DropdownItem onClick={() => props.changeRoute(routes.LOGIN)}>
	            	  Logout
	            	</DropdownItem>
	        	</DropdownMenu>
        	</UncontrolledDropdown>
		</Collapse>
      </Navbar>
    </div>
  );
}


export default connect(null,{ changeRoute })(NavigationBar);