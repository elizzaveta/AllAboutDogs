import React from 'react';
import {useParams} from "react-router";
import InProgress from "./InProgress";

const BreedInfo = () => {
    const {id} = useParams();
    return (
        <InProgress/>

    );
};

export default BreedInfo;