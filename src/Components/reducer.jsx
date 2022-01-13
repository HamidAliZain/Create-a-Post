import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [{
    title: "Emil",
    des: "Toby",
  }],
};

export const counterSlice = createSlice({
  name: "ADD_LISTS",
  initialState,
  reducers: {
    addlist:(state) => {
      
          return [
              ...initialState.list,
              state.list,
            ]
    },
  },
  
});

// Action creators are generated for each case reducer function
export const { addlist } = counterSlice.actions;

export default counterSlice.reducer;
