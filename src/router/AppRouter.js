import React from 'react';
import {Route, Routes} from "react-router-dom";
import {userRoutes, adminRoutes} from "./AllRoutes";
import Login from "../pages/login/Login";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import {authAdmin, authUser} from "../store/slices/authSlice";
import Layout from "../components/layout/layout";


const AppRouter = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.authLevel)
    if (!state.email) {
        const cookie = Cookies.get("profile")
        if (cookie) {
            const cookieState = JSON.parse(cookie)
            if (!cookieState.adminRole) {
                dispatch(authUser(cookieState))
            } else {
                dispatch(authAdmin(cookieState))
            }

        }
    }

    if (state.email) {
        if (!state.adminRole) {
            return (
                <Routes>
                    {userRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <Layout>
                                    {route.element}
                                </Layout>
                            }
                            exact={route.path}
                        />
                    )}
                </Routes>
            )
        } else {
            return (
                <Routes>
                    {
                        adminRoutes.map(route =>
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <Layout>
                                        {route.element}
                                    </Layout>
                                }
                                exact={route.path}
                            />
                        )
                    }
                </Routes>
            )
        }
    } else {
            return (
                <Routes>
                    <Route
                        path='*'
                        element={<Login />}
                        exact={true}
                    />
                </Routes>
            )
    }
};

export default AppRouter;