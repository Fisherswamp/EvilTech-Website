import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLocation } from './typescript/interfaces/NavLocation';
import NavBar from './typescript/navbar/NavBarComponent';
import Router from './typescript/routing/Router';

export interface AppProps {
  
}
 
export interface AppState {
  navLocation: NavLocation
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { 
      navLocation: NavLocation.HOME 
    };
  }

  render() { 
    return (
      <>
        <NavBar location={this.state.navLocation} 
        updateNavigationWindow={(location: NavLocation) => {
          this.setState({
            navLocation: location
          });
        }}/>
        <Container>
          <Router location={this.state.navLocation}/> 
        </Container>
      </>
    );
  }
}
 
export default App;