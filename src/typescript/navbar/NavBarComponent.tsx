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
		return (
			<Navbar className="darkprimary navheight" expand="lg" variant="dark" bg="dark" sticky="top">
				<Navbar.Brand href="#home" onClick={() => {this.props.updateNavigationWindow(NavLocation.HOME)}}
				className="titlefont darkprimary" >Evil Tech</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
  				<Navbar.Collapse id="navbarColor02">
					<Nav className="mr-auto">
						  <Nav.Link href="#home" onClick={() => {this.props.updateNavigationWindow(NavLocation.HOME)}} 
						  className="darkprimary titlefont-medium">Home</Nav.Link>
						<Nav.Link href="#about" onClick={() => {this.props.updateNavigationWindow(NavLocation.ABOUT)}} 
						className="darkprimary titlefont-medium">About</Nav.Link>
						<Nav.Link href="#portfolio" onClick={() => {this.props.updateNavigationWindow(NavLocation.PORTFOLIO)}} 
						className="darkprimary titlefont-medium">Portfolio</Nav.Link>
						<Nav.Link href="#careers" onClick={() => {this.props.updateNavigationWindow(NavLocation.CAREERS)}} 
						className="darkprimary titlefont-medium">Careers</Nav.Link>
						<Nav.Link href="#contact" onClick={() => {this.props.updateNavigationWindow(NavLocation.CONTACT)}} 
						className="darkprimary titlefont-medium">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar> 
		);
	}
}
 
export default NavBarComponent;