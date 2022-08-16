import React from 'react';
import {theme} from "../../styles/Theme";
import {Box, Button, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import image from "../../images/Landing/image 3.png";

const ComparisonTool = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container columns={{sm: 6, md: 12}} style={{margin:'80px 0', textAlign:'right'}}>
                    <Grid item sm={6} md={6}>
                        <img src={image} style={{width: '100%'}}/>
                    </Grid>
                    <Grid item sm={6} md={6} style={{display: 'flex', alignItems: 'center'}}>
                        <Box component="div" sx={{
                            height: 250,
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column'
                        }}>
                            <Typography variant='h1'>Having problems choosing new dog friend?</Typography>
                            <Typography variant='subtitle1'>You can use our site to comparison dog breeds. That’s how it
                                will be easier to decide which breeds suits you best.</Typography>
                            <Box component='div'>
                                <Button variant="contained" color="secondary" href='/comparison'
                                        style={{borderRadius: 50}}>
                                    Go to comparison tool
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default ComparisonTool;