import React from 'react';
import {theme} from "../styles/Theme";
import {
    Box,
    Container,
    ThemeProvider,
    Typography
} from "@material-ui/core";

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <footer style={{ bottom: 0, left: 0, width: '100%', height: '100px', backgroundColor: '#f1f1f1'}}>
                <Container>
                    <Box sx={{
                        padding: '50px 0px 0px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Typography>Copyright: <a href='https://github.com/elizzaveta'>elizavetta</a></Typography>
                        <Typography>2022</Typography>
                    </Box>

                </Container>
            </footer>
        </ThemeProvider>


    );
};

export default Footer;