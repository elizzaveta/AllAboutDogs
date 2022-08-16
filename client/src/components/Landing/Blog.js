import React from 'react';
import {theme} from "../../styles/Theme";
import {Box, Button, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import image from "../../images/Landing/image 4.png";

const Blog = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container columns={{sm: 6, md: 12}}>
                    <Grid item sm={6} md={6} style={{display: 'flex', alignItems: 'center'}}>
                        <Box component="div" sx={{
                            height: 275,
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column'
                        }}>
                            <Typography variant='h1'>Check out our blog</Typography>
                            <Typography variant='subtitle1'>We have dog experts who regulary writes intresting articles
                                about care, trainings and a lot more. Log in to save them to your personal
                                account.</Typography>
                            <Box component='div'>
                                <Button variant="contained" color="secondary" href='/blog'
                                        style={{borderRadius: 50}}>
                                    Go to blog
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

export default Blog;