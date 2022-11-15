import React from 'react';
import {
    AppBar,
    Box,
    Container,
    Slide,
    ThemeProvider,
    Typography,
    useScrollTrigger
} from "@material-ui/core";
import {theme} from "../styles/Theme";
import {Link} from "react-router-dom";
import styles from "../styles/css/components/Header.module.css"

const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <HideOnScroll>
                <AppBar color='primary' elevation={0}>
                    <Container>
                        <Box className={styles.wrapper}>
                            <Box className={styles.leftContentWrapper}>
                                <Typography variant='h2'>
                                    <Link to='/'>All About Dogs</Link>
                                </Typography>
                                <Box className={styles.navigationItemsWrapper}>
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
            </HideOnScroll>
        </ThemeProvider>

    )
        ;
};

function HideOnScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default Header;