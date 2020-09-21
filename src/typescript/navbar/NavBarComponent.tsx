import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLocation } from '../interfaces/NavLocation';

export interface NavBarComponentProps {
	updateNavigationWindow: (navLocation: NavLocation) => void,
	location: NavLocation
}
 
export interface NavBarComponentState {

}
 
class NavBarComponent extends React.Component<NavBarComponentProps, NavBarComponentState> {
	constructor(props: NavBarComponentProps) {
		super(props);
		this.state = {   };
	}

	render() { 
		const navLinks = [];
		for(const location in NavLocation) {
			const locationName = NavLocation[location];
			const locationEnum: NavLocation = parseInt(location);
			if(locationName && isNaN(parseInt(locationName))) {
				navLinks.push(
					<Nav.Link key={location} href={`#${locationName}`} onClick={() => {this.props.updateNavigationWindow(locationEnum)}} 
						className="darkprimary titlefont-medium">{locationName}</Nav.Link>
				);
			}
		}
		return (
			<Navbar className="darkprimary navheight" expand="lg" variant="dark" bg="dark" sticky="top">
				<Navbar.Brand href="#home" onClick={() => {this.props.updateNavigationWindow(NavLocation.HOME)}}
				className="titlefont darkprimary" >Evil Tech</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
  				<Navbar.Collapse id="navbarColor02">
					<Nav className="mr-auto">
						{navLinks}
					</Nav>
				</Navbar.Collapse>
			</Navbar> 
		);
	}
}
 
export default NavBarComponent;