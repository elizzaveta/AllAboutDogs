import React, {useState} from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from "@material-ui/core";
import styles from "../../styles/css/pages/Breeds/SearchFilters.module.css"

const SearchFilters = (props) => {
    const {characteristicName, onClickFunction} = props;
    const [value, setValue] = React.useState(0);

    const handleRadioChange = (event) => {
        if (event.target.value === value) {
            setValue(0);
        } else {
            setValue(event.target.value)
        }
    }

    return (
        <FormControl>
            <FormLabel id="demo-form-control-label-placement" color="secondary" style={{fontSize:14}}>{characteristicName}</FormLabel>
            <div className={styles.radioGroupWrapper}>
                <Typography color="secondary">1</Typography>
                <RadioGroup
                    aria-labelledby="demo-error-radios"
                    row
                    value={value}
                    onClick={handleRadioChange}
                    className={styles.radioGroup}>
                    <FormControlLabel value={"1"} control={<Radio size="small"/>} label={""} labelPlacement="bottom"/>
                    <FormControlLabel value={"2"} control={<Radio size="small"/>} label={""} labelPlacement="bottom"/>
                    <FormControlLabel value={"3"} control={<Radio size="small"/>} label={""} labelPlacement="bottom"/>
                    <FormControlLabel value={"4"} control={<Radio size="small"/>} label={""} labelPlacement="bottom"/>
                    <FormControlLabel value={"5"} control={<Radio size="small"/>} label={""} labelPlacement="bottom"/>
                </RadioGroup>
                <Typography color="secondary">5</Typography>
            </div>
        </FormControl>
    );
};

export default SearchFilters;