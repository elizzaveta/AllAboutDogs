import React from 'react';
import {theme} from "../../styles/Theme";
import {Box, Button, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import image from "../../images/Landing/image 3.png";
import styles from "../../styles/css/pages/Landing/ComparisonTool.module.css"
import buttonStyles from "../../styles/css/components/Buttons.module.css"
import landingInfo from "../../utils/LandingInfo";

const ComparisonTool = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container columns={{sm: 6, md: 12}} style={{flexWrap: 'wrap-reverse'}}
                      className={styles.gridContainer}>
                    <Grid item sm={6} md={8}>
                        <img src={image} alt="dog comparison" className={styles.image}/>
                    </Grid>
                    <Grid item sm={6} md={4} className={styles.gridItem}>
                        <Box component="div" sx={{
                            height: 250,
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column'
                        }}>
                            <Typography variant='h1'>{landingInfo.comparisonTool.title}</Typography>
                            <Typography variant='subtitle1'>{landingInfo.comparisonTool.description}</Typography>
                            <Box component='div'>
                                <Button variant="contained" color="secondary" href='/comparison'
                                        className={buttonStyles.landingButton}>
                                    {landingInfo.comparisonTool.button}
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