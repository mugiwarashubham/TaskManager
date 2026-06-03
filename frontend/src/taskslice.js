import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "./utils/axiosclient";

// GET ALL TASKS
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get(
        "/tasks/getAllTasks"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message
      );
    }
  }
);

// CREATE TASK
export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post(
        "/tasks/create",
        taskData
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message
      );
    }
  }
);

// UPDATE TASK
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, taskData }, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post(
        `/tasks/updateTask/${id}`,
        taskData
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message
      );
    }
  }
);

// DELETE TASK
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, { rejectWithValue }) => {
    try {
      await axiosClient.delete(
        `/tasks/delete/${id}`
      );

      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message
      );
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",

  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        fetchTasks.fulfilled,
        (state, action) => {
          state.loading = false;
          state.tasks = action.payload;
        }
      )

      .addCase(
        fetchTasks.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )

      // CREATE
      .addCase(
        createTask.fulfilled,
        (state, action) => {
          state.tasks.unshift(action.payload);
        }
      )

      // UPDATE
      .addCase(
        updateTask.fulfilled,
        (state, action) => {
          const index =
            state.tasks.findIndex(
              (task) =>
                task._id === action.payload._id
            );

          if (index !== -1) {
            state.tasks[index] =
              action.payload;
          }
        }
      )

      // DELETE
      .addCase(
        deleteTask.fulfilled,
        (state, action) => {
          state.tasks = state.tasks.filter(
            (task) =>
              task._id !== action.payload
          );
        }
      );
  },
});

export default taskSlice.reducer;