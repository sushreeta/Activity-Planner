import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSubmitDisabled: true,
    isLoading: false,
  },
  reducers: {
    setSubmitDisabled: (state, action) => {
      state.isSubmitDisabled = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSubmitDisabled, setLoading } = uiSlice.actions;
export default uiSlice.reducer;
