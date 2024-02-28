import React from 'react';
import {Route, Routes} from "react-router-dom";
import {userRoutes, adminRoutes} from "./AllRoutes";
import Login from "../pages/login/Login";
import {useSelector} from "react-redux";
import {GoogleOAuthProvider} from "@react-oauth/google";

const AppRouter = () => {
    const state = useSelector(state => state.authLevel.auth)
    switch (state) {
        case 1:
            console.log(userRoutes)
            return (
                <Routes>
                    {userRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            exact={route.path}
                        />
                    )}
                </Routes>
            )

        case 2:
            return (
                <Routes>
                {
                    adminRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            exact={route.path}
                        />
                    )
                }
                </Routes>
            )

        default:
            return (

                    <Routes>
                        <Route
                            key={"/login"}
                            path={"*"}
                            element={<Login/>}
                            exact={true}
                        />
                    </Routes>

            )
    }
};

export default AppRouter;