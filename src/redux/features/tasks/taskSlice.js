import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        status: "pending",
        ...payload,
      });
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
