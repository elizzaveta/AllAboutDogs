import React, {useContext} from 'react';
import {Routes, Route} from 'react-router'
import {authRoutes, publicRoutes} from "../routes";
import Page404 from "../pages/errorPages/page404";
import Page401 from "../pages/errorPages/page401";
import {Context} from "../index";

//  todo: find out how to add errors correctly
const AppRouter = () => {
    const {user} = useContext(Context)
    const isAuth = false // make fine
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route exact path={path} element={<Component/>}/>
            )}
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route exact path={path} element={<Component/>}/>
            )}
            <Route path={window.location.pathname} element={<Page404/>}/>
        </Routes>

    );
};

export default AppRouter;