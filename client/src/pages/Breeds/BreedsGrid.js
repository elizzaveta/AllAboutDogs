import React, {useEffect, useState} from 'react';
import GetBreeds from "../../api/GetBreeds";
import {Box, CircularProgress, Grid, Typography} from "@material-ui/core";
import {apiBaseUrl} from "../../utils/consts";
import styles from "../../styles/css/pages/Breeds/BreedsGrid.module.css"
import BreedCard from "./BreedCard";

const BreedsGrid = () => {
    const [breeds, setBreeds] = useState(null);

    useEffect(() => {
        GetBreeds()
            .then(response => setBreeds(response.data));
    }, [])

    return (
        <div>
            {!breeds
                ? <CircularProgress color="secondary"/>
                : <Grid container grid-auto-flow spacing={1}>
                    {breeds.rows.map(breed =>
                        <Grid item>
                            <BreedCard breed={breed}/>
                            {/*<Box component="div" className={styles.breedContainer}>*/}
                            {/*    <img className={styles.BreedImage} src={apiBaseUrl + "\\" + breed.image} alt={breed.name + " image"}/>*/}
                            {/*    <Typography>{breed.name}</Typography>*/}
                            {/*</Box>*/}
                        </Grid>
                    )}
                </Grid>}
        </div>)
}

export default BreedsGrid;