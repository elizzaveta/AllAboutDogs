import React from 'react';
import {theme} from "../../styles/Theme";
import {Box, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import image from "../../images/404.jpg";

const Page404 = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" style={{marginTop: 50, padding: '100px 0 100px 0'}}>
                <img src={image} alt='404 Not Found' style={{width:'100%'}}/>
                <Box component='div' sx={{textAlign:'center'}}>
                    <Typography variant='h2'>We couldn't find the page you are looking for...</Typography>
                    <Typography variant='subtitle1'>The page you're looking for was moved, removed, remaned or might never existed.</Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Page404;