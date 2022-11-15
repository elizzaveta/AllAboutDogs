import React from 'react';
import {theme} from "../../styles/Theme";
import {Box, Button, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import image from "../../images/Landing/image 4.png";
import styles from "../../styles/css/pages/Landing/Blog.module.css"
import buttonStyles from "../../styles/css/components/Buttons.module.css"
import landingInfo from "../../utils/LandingInfo";

const Blog = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container columns={{sm: 6, md: 12}}>
                    <Grid item sm={6} md={5} className={styles.gridItem}>
                        <Box component="div" className={styles.textWrapper}>
                            <Typography variant='h1'>{landingInfo.blog.title}</Typography>
                            <Typography variant='subtitle1'>{landingInfo.blog.description}</Typography>
                            <Box component='div'>
                                <Button variant="contained" color="secondary" href='/blog'
                                        className={buttonStyles.landingButton}>
                                    {landingInfo.blog.button}
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={7}>
                        <img src={image} alt="dog blog" className={styles.image}/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Blog;