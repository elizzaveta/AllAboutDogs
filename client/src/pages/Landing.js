import React from 'react';
import {Container} from "@material-ui/core";
import Greeting from "../components/Landing/Greeting";
import AboutUs from "../components/Landing/AboutUs";
import BreedCollection from "../components/Landing/BreedCollection";
import ComparisonTool from "../components/Landing/ComparisonTool";
import Blog from "../components/Landing/Blog";

const Landing = () => {
    return (
        <div style={{paddingTop: 47}}>
            <Greeting/>
            <AboutUs/>
            <BreedCollection/>
            <ComparisonTool/>
            <Blog/>
        </div>
    );
};

export default Landing;