import React from 'react';
import {Box, Container, Grid, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "../../styles/Theme";
import lineOfDogsImage from "../../images/Line of Dogs.png"
import styles from "../../styles/css/pages/Breeds/Breeds.module.css"
import BreedsGrid from "./BreedsGrid";
import SearchField from "./SearchField";
import DividerLine from "../../components/DividerLine";

const Breeds = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container className={styles.wrapper}>
                <Grid container columns={{sm: 6, md: 12}}>
                    <Grid item sm={6} md={3}>
                        <SearchField/>
                    </Grid>
                    <Grid item sm={6} md={9}>
                        <Box className={styles.titleWrapper}>
                            <Typography variant="h2">Dog Breeds</Typography>
                        </Box>
                        <DividerLine/>
                        <BreedsGrid/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Breeds;
