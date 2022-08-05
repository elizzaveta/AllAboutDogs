import {createTheme} from "@material-ui/core";


export const theme = createTheme({
    typography: {
        h1: {
            fontSize: 30
        },
        h2: {
            fontSize: 24
        },
        h3: {
            fontSize: 20
        },
        subtitle1:{
            fontSize: 16
        },
        fontFamily:[
            'Raleway'
        ]
    },
    palette: {
        primary: {
            main: '#f1f1f1'
        },
        secondary: {
            main: '#b7a1d9'
        },
        custom: {
            main: '#b7cccd'
        }
    },
});