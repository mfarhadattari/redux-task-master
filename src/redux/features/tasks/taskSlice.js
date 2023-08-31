import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Farhad",
      priority: "high",
    },
  ],
  userTask: [],
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
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    updateTaskStatus: (state, { payload }) => {
      const selectedTask = state.tasks.find((task) => task.id === payload.id);
      selectedTask.status = payload.status;
    },
    setUserTask: (state, { payload }) => {
      state.userTask = state.tasks.filter(
        (task) => task.assignedTo.toLowerCase() === payload.toLowerCase()
      );
    },
  },
});

export const { addTask, removeTask, updateTaskStatus, setUserTask } = taskSlice.actions;

export default taskSlice.reducer;
