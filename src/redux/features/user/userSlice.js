import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "Farhad", email: "mfarhad.dev@gmail.com" },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
