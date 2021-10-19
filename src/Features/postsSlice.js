import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk(
  "posts/list",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {},
  extraReducers: {
    //pending - action type
    [fetchPost.pending]: (state, action) => {
      state.loading = true;
    },
    //fulfilled - action type
    [fetchPost.fulfilled]: (state, action) => {
      state.postsList = action.payload;
      state.loading = false;
    },
    //rejected- action type
    [fetchPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
