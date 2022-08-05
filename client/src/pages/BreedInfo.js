import React from 'react';
import {useParams} from "react-router";

const BreedInfo = () => {
    const {id} = useParams();
    return (
        <div>
            Breed {id} detailed page
        </div>
    );
};

export default BreedInfo;