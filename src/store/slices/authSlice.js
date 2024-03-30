import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        id: null,
        email: null,
        name: null,
        picture: null,
        adminRole: false,
    },
    reducers: {
        authUser: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.name = action.payload.name
            state.picture = action.payload.picture
            state.adminRole = action.payload.adminRole
        },
        logout: state => {
            state.id = null
            state.email = null
            state.name = null
            state.picture = null
            state.adminRole = false
        }
    }
})

export const {authUser, authAdmin, logout} = authSlice.actions
export default authSlice.reducer