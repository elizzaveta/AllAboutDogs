import React from 'react';
import {Container, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../../styles/Theme";
import styles from "../../styles/css/pages/Landing/AboutUs.module.css"

const AboutUs = () => {
    return (
        <ThemeProvider theme={theme}>
                <div className={styles.wrapper}>
                    <Container maxWidth='md'>
                        <Typography variant='h2' className={styles.title}>About Us</Typography>
                        <Typography variant='h3'>We are a team of dog experts. Our goal is to help you take proper care of
                            your dogs. That's why we gathered information according to concrete breeds and it’s specific
                            features. We also have a blog where you can read interesting articles to find valuable advice or
                            interesting stories. Out site can help you to decide which puppy to buy: easy compare tool allows
                            you to look through breed characteristics side to side. </Typography>
                    </Container>

                </div>

        </ThemeProvider>
    );
};

export default AboutUs;