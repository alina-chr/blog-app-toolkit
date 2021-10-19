import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/list", async () => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/`
    );
    return data;
  } catch (error) {
    return error?.response;
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.usersList = action.payload;
      state.loading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
