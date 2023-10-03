import { createSlice } from "@reduxjs/toolkit";

const activitiesSlice = createSlice({
  name: "activities",
  initialState: [],
  reducers: {
    setActivities: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setActivities } = activitiesSlice.actions;
export default activitiesSlice.reducer;
