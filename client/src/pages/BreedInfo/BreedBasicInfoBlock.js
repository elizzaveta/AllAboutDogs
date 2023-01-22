import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {apiBaseUrl} from "../../utils/consts";
import styles from "../../styles/css/pages/BreedInfo/BreedBasicInfoBlock.module.css"

const BreedBasicInfoBlock = (props) => {
    const {breed} = props;
    return (
        <Grid container spacing={2} columns={{sm: 6, md: 21}}>
            <Grid item sm={6} md={10}>
                <img src={apiBaseUrl + '/' +breed.image} alt={breed.name+" image"} className={styles.image}/>
            </Grid>
            <Grid item sm={6} md={6}>
                <Typography variant="h2">About</Typography>
                <Typography variant="subtitle1">{breed.about}</Typography>
            </Grid>
        </Grid>
    );
};

export default BreedBasicInfoBlock;