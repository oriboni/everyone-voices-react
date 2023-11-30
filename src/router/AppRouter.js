import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AllRoutes} from "./AllRoutes";

const AppRouter = () => {
    return (
        <Routes>
            {AllRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            )}
        </Routes>
    );
};

export default AppRouter;