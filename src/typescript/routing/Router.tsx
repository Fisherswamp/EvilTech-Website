import * as React from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import FAQ from '../faq/FAQ';
import Home from '../home/Home';
import { NavLocation } from '../interfaces/NavLocation';

export type locMap = {
    [key in NavLocation]: JSX.Element;
};

export interface RouterProps {
    location: NavLocation
}
 
const Router: React.FunctionComponent<RouterProps> = (props: RouterProps) => {
    const windowJSX : JSX.Element = locationToComponentMap[props.location] || <></>;
    return windowJSX;
}

const locationToComponentMap : locMap = {
    [NavLocation.HOME]: <Home/>,
    [NavLocation.ABOUT]: <About/>,
    [NavLocation.FAQ]: <FAQ />,
    [NavLocation.CAREERS]: <Home/>,
    [NavLocation.PORTFOLIO]: <Home/>,
    [NavLocation.CONTACT]: <Contact/>,
};
 
export default Router;