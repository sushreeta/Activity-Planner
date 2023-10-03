import { createSlice } from "@reduxjs/toolkit";

const participantsSlice = createSlice({
  name: "participants",
  initialState: { numOfParticipants: undefined, participantNames: [] },
  reducers: {
    setParticipantsNumAndName: (state, action) => {
      state.numOfParticipants = action.payload?.numOfParticipants;
      state.participantNames = action.payload?.participantNames;
      return state;
    },
    setParticipantNames: (state, action) => {
      state.participantNames = action.payload;
      return state;
    },
  },
});

export const {
  setParticipantsNumAndName,
  setParticipantNames,
  removeParticipantName,
} = participantsSlice.actions;
export default participantsSlice.reducer;
