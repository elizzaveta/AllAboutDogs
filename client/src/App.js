import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router";
import BreedInfo from "./pages/BreedInfo/BreedInfo";
import {authRoutes, publicRoutes} from "./routes";
import Page404 from "./pages/errorPages/page404";
import {Context} from "./index";
import {useContext} from "react";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
