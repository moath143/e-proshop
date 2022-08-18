import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { baseUrl } from "../../api";

const initialState = {
  isLoading: false,
  user: {
    id: null,
    token: null,
    firstName: null,
    lastName: null,
    email: null,
  },
  status: "faild",
};
export const fetchSignup = createAsyncThunk(
  "user/signup",
  async ({ firstName, lastName, email, password, passwordConfirmation }) => {
    await axios
      .post(
        `${baseUrl}/users/signup`,
        {
          firstName,
          lastName,
          email,
          password,
          passwordConfirmation,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const { firstName, lastName, email, token } = res.data;
        return { user: {firstName, lastName, email, token}, status: 'success' };
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSignup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSignup.fulfilled, (state, action) => {
    //   const { firstName, lastName, email, token } = action.payload;
      state.isLoading = false;
    //   state.user = { firstName, lastName, email, token };
    //   state.token = token;
      state.status = "success";
    });
    builder.addCase(fetchSignup.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "faild";
    });
  },
});

export const selectUser = (state) => state.authSlice;

export default authSlice;
