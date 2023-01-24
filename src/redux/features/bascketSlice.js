import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],

}

export const bascketSlice = createSlice({
    name: 'bascket',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        clearBascket: state => {
            state.items = []
        }
    }
})

export const {addItem, clearBascket} = bascketSlice.actions

export default bascketSlice.reducer