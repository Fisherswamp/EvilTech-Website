import * as React from 'react';
import Row from 'react-bootstrap/esm/Row';

export interface HomeProps {
    
}
 
export interface HomeState {
    
}
 
class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (
            <>
                <Row className="centered-div">
                    <h1>
                        Welcome to Evil Technologies    
                    </h1>
                </Row>
                <Row>
                    <p>
                        The
                    </p>
                </Row>
                <Row>
                    <div style={{height : "900px"}}>

                    </div>
                </Row>
            </>
        );
    }
}
 
export default Home;