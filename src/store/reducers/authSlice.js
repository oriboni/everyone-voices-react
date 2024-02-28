import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: 0,
    },
    reducers: {
        authUser: state => {
            state.auth = 1
        },
        authAdmin: state => {
            state.auth = 2
        }
    }
})

export const {authUser, authAdmin} = authSlice.actions
export default authSlice.reducer