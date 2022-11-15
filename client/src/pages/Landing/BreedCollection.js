import React from 'react';
import image from '../../images/Landing/image 2.png'
import {Box, Button, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../../styles/Theme";
import styles from "../../styles/css/pages/Landing/BreedCollection.module.css"
import buttonStyles from "../../styles/css/components/Buttons.module.css"
import landingInfo from "../../utils/LandingInfo"

const BreedCollection = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container columns={{sm: 6, md: 12}}>
                    <Grid item sm={6} md={4} className={styles.gridItem}>
                        <Box component="div" className={styles.textWrapper}>
                            <Typography variant='h1'>{landingInfo.breedCollection.title}</Typography>
                            <Typography variant='subtitle1'>{landingInfo.breedCollection.description}</Typography>
                            <Box component='div'>
                                <Button variant="contained" color="secondary" href='/breeds'
                                        className={buttonStyles.landingButton}>
                                    {landingInfo.breedCollection.button}
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={8}>
                        <img src={image} alt="dog info" className={styles.image}/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default BreedCollection;