import React from 'react';
import {Container, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../../styles/Theme";

const AboutUs = () => {
    return (
        <ThemeProvider theme={theme}>
                <div style={{padding: '150px 50px 150px 50px', margin:'40px 0 ', backgroundColor: '#f1f1f1', textAlign:'center'}}>
                    <Container maxWidth='md'>
                        <Typography variant='h2' style={{marginBottom:39}}>About Us</Typography>
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