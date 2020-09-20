import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export interface NavBarComponentProps {
	
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
			<Navbar className="darkprimary navheight" expand="lg" variant="dark" bg="dark">
				<Navbar.Brand href="#home" className="titlefont darkprimary" >Evil Tech</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
  				<Navbar.Collapse id="basic-navbar-nav navbarColor02">
					<Nav className="mr-auto">
      					<Nav.Link href="#home" className="darkprimary titlefont-medium">Home</Nav.Link>
						<Nav.Link href="#about" className="darkprimary titlefont-medium">About</Nav.Link>
						<Nav.Link href="#partfolio" className="darkprimary titlefont-medium">Portfolio</Nav.Link>
						<Nav.Link href="#careers" className="darkprimary titlefont-medium">Careers</Nav.Link>
						<Nav.Link href="#contact" className="darkprimary titlefont-medium">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar> 
		);
	}
}
 
export default NavBarComponent;