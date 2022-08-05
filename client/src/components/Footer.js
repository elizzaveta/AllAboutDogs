import React from 'react';
import {theme} from "../styles/Theme";
import {AppBar, Box, Container, ThemeProvider, Typography} from "@material-ui/core";

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar color='primary' elevation={0}>
                <Container fixed>
                    Footer

                </Container>
            </AppBar>

        </ThemeProvider>
    );
};

export default Footer;