import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="1005874735324-p69ij8pcckpu60jp9m1t1s21v78r6s2b.apps.googleusercontent.com">
        <Provider store={store}>
            <App />
        </Provider>
    </GoogleOAuthProvider>
);