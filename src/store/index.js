import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import userProfile from "./reducers/userSlice";

const store = configureStore({
  reducer: {
    authStore: authSlice.reducer,
    userStore: userProfile.reducer,
  },
});

export default store;
