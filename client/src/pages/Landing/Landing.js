import React from 'react';
import {Container} from "@material-ui/core";
import Greeting from "./Greeting";
import AboutUs from "./AboutUs";
import BreedCollection from "./BreedCollection";
import ComparisonTool from "./ComparisonTool";
import Blog from "./Blog";

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