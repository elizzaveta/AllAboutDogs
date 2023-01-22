import React, {useEffect, useState} from 'react';
import {CircularProgress, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../../styles/Theme";
import GetBreedInfo from "../../api/GetBreedInfo";
import {useParams} from "react-router";
import BreedBasicInfoBlock from "./BreedBasicInfoBlock";
import styles from "../../styles/css/pages/BreedInfo/BreedInfo.module.css"

const BreedInfo = () => {
    const {id} = useParams();
    const [breedInfo, setBreedInfo] = useState(null)

    useEffect(() => {
        GetBreedInfo(id)
            .then(response => setBreedInfo(response.data));
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Container className={styles.wrapper}>
                {!breedInfo
                    ? <CircularProgress color="secondary"/>
                    : <div>
                        <Typography variant="h1" className={styles.title}>{breedInfo.name}</Typography>
                        <BreedBasicInfoBlock breed={breedInfo}/>
                    </div>
                }
            </Container>

        </ThemeProvider>
    );
};

export default BreedInfo;