import {combineReducers, createStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import switchTape from "./slices/switchTape";
import sortingSlice from "./slices/sortingSlice";

const rootReducer =  combineReducers({
        authLevel: authSlice,
        switchTape,
        sortingSlice
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())