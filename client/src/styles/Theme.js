import {createTheme} from "@material-ui/core";


export const theme = createTheme({
    typography: {
        h1: {
            fontSize: 30
        },
        h2: {
            fontSize: 22
        },
        h3: {
            fontSize: 18
        },
        subtitle1:{
            fontSize: 16
        },
        subtitle2:{
            fontSize: 12
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