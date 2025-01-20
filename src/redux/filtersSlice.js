import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, {payload}) => {
            state.name = payload
        }
    }
})

export const {changeFilter} = filterSlice.actions
export const filterReducer = filterSlice.reducer;
export const selectFilter = state => state.filter.name

