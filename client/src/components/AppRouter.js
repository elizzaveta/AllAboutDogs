import React, {useContext} from 'react';
import {Routes, Route, useRoutes} from 'react-router'
import {authRoutes, publicRoutes} from "../routes";
import Page404 from "../pages/errorPages/page404";
import Page401 from "../pages/errorPages/page401";
import {Context} from "../index";
import BreedInfo from "../pages/BreedInfo/BreedInfo";

const AppRouter = () => {
    const {user} = useContext(Context)
    const isAuth = false // make fine
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="*" element={<Page404/>}/>
        </Routes>

    );
};

export default AppRouter;