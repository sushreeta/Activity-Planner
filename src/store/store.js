import { configureStore } from "@reduxjs/toolkit";
import participantsReducer from "./features/participants/participantsSlice";
import activitiesReducer from "./features/activities/activitiesSlice";
import uiReducer from "./features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    participants: participantsReducer,
    activities: activitiesReducer,
    ui: uiReducer,
  },
});
