import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {userRoutes, adminRoutes} from "./AllRoutes";
import Login from "../pages/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../store/slices/authSlice";
import Layout from "../components/layout/Layout";
import axios from "axios";
import {api_url} from "../http";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";


const AppRouter = () => {
    const state = useSelector(state => state.authLevel)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect( () => {
        async function getData() {
                if (localStorage.getItem('token')) {
                try {
                    setLoading(true)
                    const response = await axios.put(`${api_url}/auth/refresh`, {},{withCredentials: true})
                    if (response) {
                        dispatch(authUser(response.data.user))
                        localStorage.setItem('token', response.data.accessToken)
                    }
                } catch (e) {
                    console.log(e.message)
                } finally {
                    setLoading(false)
                }
            }
        }
        getData()
    }, [dispatch]);

    if (loading) {
        return (
            <LoadingComponent />
        )
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