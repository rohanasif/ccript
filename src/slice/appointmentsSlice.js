import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  appointments: {},
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    getAllAppointments: (state, action) => {
      return {
        appointments: action.payload,
      };
    },
  },
});

export const { getAllAppointments } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
