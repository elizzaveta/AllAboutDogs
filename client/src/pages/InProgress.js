import React from 'react';
import {Box, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../styles/Theme";
import image from "../images/inProgress.png"

const InProgress = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" style={{marginTop: 50, padding: '80px 0 80px 0'}}>
                <Grid container columns={{sm: 6, md: 12}} >
                    <Grid item sm={6}  md={6} style={{display: 'flex', alignItems: 'center'}}>
                        <div>
                            <Typography variant='h2'>Oops</Typography>
                            <Typography variant='h2'>This page is still in progress</Typography>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={6}>
                        <img src={image} style={{width:'100%'}}/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default InProgress;