import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./Features/postsSlice";
import { usersSlice } from "./Features/usersSlice";
export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
  },
});
