import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        email: null,
        name: null,
        picture: null,
        adminRole: false,
    },
    reducers: {
        authUser: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.picture = action.payload.picture
        },
        authAdmin: (state, action) => {
            state.email = action.payload.email
            state.adminRole = true
        },
        logout: state => {
            state.email = null
            state.name = null
            state.picture = null
            state.adminRole = false
        }
    }
})

export const {authUser, authAdmin, logout} = authSlice.actions
export default authSlice.reducer