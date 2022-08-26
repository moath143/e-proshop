import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { baseUrl } from "../../api";
const userStorage = "user";

const initialState = {
  isLoading: false,
  user: {
    id: null,
    token: null,
    firstName: null,
    lastName: null,
    email: null,
    isAdmin: false,
    profileImage: null,
    dateOfBirth: null,
    profileImage: null,
  },
  status: "failed",
  isAuth: false,
};
export const fetchSignup = createAsyncThunk(
  "user/signup",
  (
    { firstName, lastName, email, password, passwordConfirmation },
    thunkApi
  ) => {
    return axios
      .post(
        `${baseUrl}/users/signup`,
        { firstName, lastName, email, password, passwordConfirmation },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          return thunkApi.rejectWithValue({
            message: err.response.data.message,
          });
        } else {
          return thunkApi.rejectWithValue({
            message: "Something went wrong!",
          });
        }
      });
  }
);

export const fetchLogin = createAsyncThunk(
  "user/login",
  ({ email, password }, thunkApi) => {
    return axios
      .post(`${baseUrl}/users/login`, { email, password })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        if (err?.response?.data?.message) {
          return thunkApi.rejectWithValue({
            message: err.response.data.message,
          });
        } else {
          return thunkApi.rejectWithValue({
            message: "Something went wrong!",
          });
        }
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
      state.status = "loading";
    });
    builder.addCase(fetchSignup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "success";
      const { _id, token, firstName, lastName, email } = action.payload;
      state.user = { id: _id, token, firstName, lastName, email };
    });
    builder.addCase(fetchSignup.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "failed";
    });
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.isLoading = true;
      state.status = "loading";
      state.isAuth = false;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = "success";
      state.isAuth = true;
      const {
        _id,
        token,
        firstName,
        lastName,
        email,
        profileImage,
        isAdmin,
        dateOfBirth,
      } = action.payload;
      state.user = {
        id: _id,
        token,
        firstName,
        lastName,
        email,
        profileImage,
        isAdmin,
        dateOfBirth,
      };
      localStorage.setItem(userStorage, JSON.stringify(state));
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "failed";
      state.isAuth = false;
    });
  },
});

// 2149775269726QA

export default authSlice;
