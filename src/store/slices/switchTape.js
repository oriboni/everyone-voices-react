import {createSlice} from "@reduxjs/toolkit";

export const switchTape = createSlice({
    name: "switchTape",
    initialState: {
        switch: false
    },
    reducers: {
        changeSwitcher: (state, action) => {
            state.switch = action.payload.switch
        }
    }
})

export const {changeSwitcher} = switchTape.actions
export default switchTape.reducer