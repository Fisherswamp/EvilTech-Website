import * as React from 'react';
import Row from 'react-bootstrap/esm/Row';

export interface AboutProps {
    
}
 
const About: React.FunctionComponent<AboutProps> = (props) => {
    return (
        <>
            <Row className="centered-div">
                <h1>
                    About Us    
                </h1>
            </Row>
            <Row>
                <p>
                    When Google submitted their IPO in 2004, they boldly published their unofficial slogan <a href="https://www.sec.gov/Archives/edgar/data/1288776/000119312504142742/ds1a.htm#toc59330_1">'don't be evil'</a>:
                </p>
                <blockquote className="blockquote">
                    Don’t be evil. We believe strongly that in the long term, we will be better served—as shareholders and in all other ways—by a company that does good things for the world even if we forgo some short term gains. This is an important aspect of our culture and is broadly shared within the company.
                </blockquote>
                <p>
                    At Evil Technologies, we embrace a more simplified, official slogan:
                </p>
            </Row>
            <Row className="centered-div">
                <blockquote className="blockquote blockquote-large">
                    Be Evil               
                </blockquote>
            </Row>
            <Row>
                <p>
                    What does it mean to be evil? Well, that's for us to decide. In the meantime, feel free to enjoy our software and don't be afraid to contact us for contracting work.
                </p>
            </Row>
        </>
    );
}
 
export default About;