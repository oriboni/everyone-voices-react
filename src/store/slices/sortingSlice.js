import {createSlice} from "@reduxjs/toolkit";

export const sortingSlice = createSlice({
    name: "sortingSlice",
    initialState: {
        sorting: "Сначала новые"
    },
    reducers: {
        changeSorting: (state, action) => {
            state.sorting = action.payload.sort
        }
    }
})

export const {changeSorting} = sortingSlice.actions
export default sortingSlice.reducer