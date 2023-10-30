import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:8080/auth";

export const authenticateUser = async (email, password) => {
  const navigate = useNavigate();

  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    console.log(response);
    const { token, user } = response.data;
    // navigate("/");
    localStorage.setItem("token", token);
    return user;
  } catch (error) {
    throw new Error("Invalid credentials");
  }
};

export const signUpUser = async (
  name,
  email,
  password,
  phone,
  role,
  aadharno,
  pincode
) => {
  try {
    console.log("from sign up user func ", email, password, phone);
    console.log(phone);
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      name,
      email,
      password,
      phone,
      role,
      aadharno,
      pincode,
    });

    console.log(response);
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    return user;
  } catch (error) {
    throw new Error("Sign up failed");
  }
};
