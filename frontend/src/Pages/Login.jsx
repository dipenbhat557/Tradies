import React from "react";
import { Link } from "react-router-dom";

import logo from "../constants/images/logo.jpeg";

import { Formik, Field, Form, ErrorMessage } from "formik";
import LoginFooter from "../components/LoginFooter";
import ServicePage from "./ServicePage";

const Login = () => {
  return (
    <div>
      <Link to="/home">
        <img src={logo} alt="logo" className="mx-auto w-40" />
      </Link>
      <div className="max-w-md mx-auto my-8 bg-gray-100 rounded-lg">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form values:", values);
            setSubmitting(false);
          }}
        >
          <Form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-4xl font-semibold ml-32 mb-4">Login </h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-6 text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-lg"
              >
                Login
              </button>
            </div>

            <div className="px-6 py-2">
              <div className="border border-gray-300 "></div>
              <div className="flex px-12 ">
                <h1>
                  Don't have an account?{" "}
                  <span>
                    <Link
                      to="/signup"
                      className="text-lg font-semibold hover:underline"
                    >
                      Sign up
                    </Link>
                  </span>
                </h1>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <LoginFooter />
    </div>
  );
};

export default Login;
