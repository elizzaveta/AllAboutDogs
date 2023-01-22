import React, {useState} from 'react';
import {FormControlLabel, Radio} from "@material-ui/core";

const SearchFilterRadioButton = (props) => {
    const {level} = props;
    const [flag, setFlag] = useState()

    function unCheck(){

    }

    return (
        <FormControlLabel
            value={level}
            control={<Radio size="small"/>}
            label={level}
            labelPlacement="bottom"
            onClick={()=> console.log(level)}
            style={{margin: "0 0"}}
        />
    );
};

export default SearchFilterRadioButton;