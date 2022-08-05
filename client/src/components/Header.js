import React from 'react';
import {AppBar, Box, Button, Container, ThemeProvider, Toolbar, Typography} from "@material-ui/core";
import {theme} from "../styles/Theme";

// may be improved? + add adaptivity
const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar color='primary' elevation={0}>
                <Container fixed>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px'}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', width:'50%'}}>
                            <Typography variant='h2'>
                                All About Dogs
                            </Typography>
                            <Box sx={{display: 'flex', alignItems: 'center', width:'50%', justifyContent: 'space-between'}}>
                                <Typography variant='h3'>
                                    Breeds
                                </Typography>
                                <Typography variant='h3'>
                                    Blog
                                </Typography>
                                <Typography variant='h3'>
                                    About
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant='h3'>
                                Log in
                            </Typography>
                        </Box>
                    </Box>

                </Container>
            </AppBar>

        </ThemeProvider>

    );
};

export default Header;