import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
    name: 'Testing task',
    initialState: {

    },
    reducers: {
        setData: (state, action) => {
      
        },


    }
})

export const { setData, } = Reducer.actions;
export default Reducer.reducer;