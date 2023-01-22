import React from 'react';
import SearchFilters from "./SearchFilters";
import styles from "../../styles/css/pages/Breeds/SearchField.module.css"
import {Typography} from "@material-ui/core";
import DividerLine from "../../components/DividerLine";

const SearchField = () => {
    return (
        <div className={styles.wrapper}>
            <Typography variant="h2" className={styles.title}>Filter</Typography>
            <SearchFilters characteristicName="Activity Level" onClickFunction={(f)=>console.log(f)}/>
            <SearchFilters characteristicName="Trainability" onClickFunction={(f)=>console.log(f)}/>
            <SearchFilters characteristicName="Barking Level" onClickFunction={(f)=>console.log(f)}/>

        </div>
    );
};

export default SearchField;