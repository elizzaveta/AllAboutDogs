import React from 'react';
import {Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../styles/Theme";
import image from "../images/inProgress.png"
import styles from "../styles/css/pages/InProgress.module.css"

const InProgress = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" className={styles.container}>
                <Grid container columns={{sm: 6, md: 12}} >
                    <Grid item sm={6}  md={6} className={styles.gridItem}>
                        <div>
                            <Typography variant='h2'>Oops</Typography>
                            <Typography variant='h2'>This page is still in progress</Typography>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={6}>
                        <img src={image} className={styles.image}/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default InProgress;