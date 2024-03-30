import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {userRoutes, adminRoutes} from "./AllRoutes";
import Login from "../pages/login/Login";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import {authAdmin, authUser} from "../store/slices/authSlice";
import Layout from "../components/layout/Layout";
import axios from "axios";
import {api_url} from "../http";


const AppRouter = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.authLevel)
    useEffect( () => {
        async function getData() {
            if (localStorage.getItem('token')) {
                try {
                    const response = await axios.get(`${api_url}/refresh`, {withCredentials: true})
                    if (response) {
                        dispatch(authUser(response.data.user))
                        localStorage.setItem('token', response.data.accessToken)
                    }
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
        getData()
    }, []);

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