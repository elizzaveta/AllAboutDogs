import React from 'react';
import image from "../../images/Landing/image.jpg";
import {Box, Container, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../../styles/Theme";

const Greeting = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box style={{
                    position: 'absolute',
                    top: 90,
                    width: 464,
                    height: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'rgba(255,255,255,0.87)'
                }}>
                    <Box>
                        <Typography variant='h1'>WELCOME TO <span
                            style={{color: '#5F9595'}}>ALL ABOUT DOGS</span></Typography>
                        <Typography variant='h3'>- site about dog breeds and care</Typography>
                    </Box>
                    <Typography variant='subtitle1'>We will help you to find information about your dog: care,
                        nutrition,
                        health, characteristics and personality. If you are looking for a new dog friend - check out our
                        comparison tool.</Typography>
                </Box>
                <img src={image} style={{width: '100%'}}/>
            </Container>
        </ThemeProvider>
    );
};

export default Greeting;