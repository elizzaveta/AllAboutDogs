import React from 'react';
import {AppBar, Box, Button, Container, ThemeProvider, Toolbar, Typography} from "@material-ui/core";
import {theme} from "../styles/Theme";
import {Link} from "react-router-dom";

// may be improved? + add adaptivity
const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar color='primary' elevation={0}>
                <Container>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px'}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', width: '50%'}}>
                            <Typography variant='h2'>
                                <Link to='/'>All About Dogs</Link>
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '50%',
                                justifyContent: 'space-between'
                            }}>
                                <Typography variant='h3'>
                                    <Link to='/breeds'>Breeds</Link>
                                </Typography>
                                <Typography variant='h3'>
                                    <Link to='/blog'>Blog</Link>
                                </Typography>
                                <Typography variant='h3'>
                                    <Link to='/about'>About</Link>
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant='h3'>
                                <Link to='/login'>Log in</Link>
                            </Typography>
                        </Box>
                    </Box>

                </Container>
            </AppBar>

        </ThemeProvider>

    );
};

export default Header;