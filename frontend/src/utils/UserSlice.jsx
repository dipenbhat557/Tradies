import { createSlice } from "@reduxjs/toolkit";
import { authenticateUser, signUpUser } from "../utils/auth";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const user = await authenticateUser(email, password);
    dispatch(login(user));
  } catch (error) {
    console.error("Login error: ", error);
  }
};

export const signupUser = (userData) => async (dispatch) => {
  const { email, password, name, pincode, phone, role, aadharno } = userData;
  try {
    const user = await signUpUser(
      email,
      password,
      name,
      pincode,
      phone,
      role,
      aadharno
    );
    dispatch(login(user));
  } catch (error) {
    console.error("Signup error: ", error);
  }
};

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
