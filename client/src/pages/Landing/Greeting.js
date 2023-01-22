import React from 'react';
import image from "../../images/Landing/image.jpg";
import {Box, Container, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../../styles/Theme";
import styles from "../../styles/css/pages/Landing/Greeting.module.css"

// should be made responsive
const Greeting = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container  style={{height:window.innerHeight, display:"flex", alignItems:'center'}}>
                <Box component="div" className={styles.wrapper}>
                <Box className={styles.textWrapper}>
                    <Box>
                        <Typography variant='h1'>WELCOME TO <span
                            className={styles.span}>ALL ABOUT DOGS</span></Typography>
                        <Typography variant='h3'>- site about dog breeds and care</Typography>
                    </Box>
                    <Typography variant='subtitle1'>We will help you to find information about your dog: care,
                        nutrition,
                        health, characteristics and personality. If you are looking for a new dog friend - check out our
                        comparison tool.</Typography>
                </Box>
                <img src={image} alt="All About Dogs home image" className={styles.image}/>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Greeting;