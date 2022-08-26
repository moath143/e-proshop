import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../api";

const initialState = {
  isLoading: false,
  status: "failed",
  profile: {
    id: "",
    firstName: "",
    lastName: "",
    profileImage: "",
    dateOfBirth: "",
    email: "",
    isAdmin: false,
    cart: {},
    token: "",
  },
};

const userStorage = JSON.parse(localStorage.getItem("user"));

export const userProfileThunk = createAsyncThunk("user/userProfileThunk", async () => {
  return await axios
    .get(`${baseUrl}/users/profile`, {
      headers: {
        authorization: `Bearer ${userStorage.user.token}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

const userProfile = createSlice({
  name: "userinfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userProfileThunk.pending, (state, action) => {
      state.isLoading = true;
      state.status = "loading...";
    });
    builder.addCase(userProfileThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.status = 'success'
      const { id, firstName, lastName, profileImage, dateOfBirth, email, isAdmin, cart, token } = action.payload
      state.profile = {
        id,
        firstName,
        lastName,
        profileImage,
        dateOfBirth,
        email,
        isAdmin,
        cart,
        token,
      };
    });
    builder.addCase(userProfileThunk.rejected, (state, action) => {
      state.isLoading = true
      state.status = 'failed'
    });
  },
});

export default userProfile;
