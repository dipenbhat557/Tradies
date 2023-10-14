import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../constants/images/logo.jpeg";

import { Formik, Field, Form, ErrorMessage } from "formik";
import LoginFooter from "../components/LoginFooter";

const SignupForm = () => {
  const [showLabel, setShowLabel] = useState(false);
  return (
    <div>
      <Link to="/home">
        <img src={logo} alt="logo" className="mx-auto w-40" />
      </Link>
      <div className="max-w-md mx-auto my-8 bg-gray-10 rounded-lg">
        <Formik
          initialValues={{
            name: "",

            pincode: "",
            phone: "",
            role: "",
            aadharno: "",

            email: "",
            password: "",
            confirmPassword: "",
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
            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Passwords do not match";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form values:", values);
            setSubmitting(false);
          }}
        >
          <Form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-4xl font-semibold text-center mb-4">Signup </h2>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <Field
                type="name"
                id="name"
                name="name"
                placeholder="Write your name"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

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

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="
                phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone no
              </label>
              <Field
                type="phone"
                id="phone"
                name="phone"
                placeholder="Enter your phone no "
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="">
              <label
                htmlFor="states"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Choose a state</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Delhi">Delhi</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="block text-gray-700 text-sm mt-1 font-bold mb-2"
              >
                Pincode
              </label>
              <Field
                type="pincode"
                id="pincode"
                name="pincode"
                placeholder="Pincode here"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="label"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Select a role
              </label>
              <select
                id="role"
                onChange={(e) => setShowLabel(e.target.value === "Tradie")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Choose a role</option>
                <option value="Tradie">Tradie</option>
                <option value="Customer">Customer</option>
              </select>
            </div>

            {showLabel && (
              <div className="py-2">
                <div className="mb-4">
                  <label
                    htmlFor="
                aadharno"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Adhar no
                  </label>
                  <Field
                    type="aadharno"
                    id="aadharno"
                    name="aadharno"
                    placeholder="Enter your aadhar no "
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="states"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Select an option
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected="">Choose a preference</option>
                    <option value="carpenter">carpenter</option>
                    <option value="painter">painter</option>
                    <option value="designer">designer</option>
                    <option value="plumber">plumber</option>
                  </select>
                </div>
              </div>
            )}

            <div className="mb-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <LoginFooter />
    </div>
  );
};

export default SignupForm;
