import React from 'react';
import image from '../../images/Landing/image 2.png'
import {Box, Button, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../../styles/Theme";

const BreedCollection = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container columns={{sm: 6, md: 12}}>
                    <Grid item sm={6} md={6} style={{display:'flex', alignItems:'center'}}>
                        <Box component="div" sx={{
                            height: 310,
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column'
                        }}>
                            <Typography variant='h1'>Search our collection of breeds</Typography>
                            <Typography variant='subtitle1'>We have a great collection of dog breed information. Find
                                out
                                how to feed your dog and what health it has. Check it’s personal characteristics:
                                whether it
                                is kids friendly, what it’s trainability and activity level is and how it deals with
                                other
                                dogs. And a lot more.</Typography>
                            <Box component='div'>
                                <Button variant="contained" color="secondary" href='/breeds'
                                        style={{borderRadius: 50}}>
                                    Go to breed collection
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6}>
                        <img src={image} style={{width: '100%'}}/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default BreedCollection;