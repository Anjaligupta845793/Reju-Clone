"use client";
import React, { useState } from "react";
import { AuthData } from "@/app/Context/AuthProvider";
import Loader from "./Loader";
import Link from "next/link";

const SignUpForm = () => {
  const { Signup, loading } = AuthData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordError, setpasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here
    if (password !== confirmPassword) {
      setpasswordError("password doesn't match");
    } else {
      Signup(name, email, password);
      console.log("submmited");
    }
  };

  return (
    <section className="flex justify-center items-center mt-6 ">
      <div className="w-full text-white rounded-lg shadow-lg md:max-w-md ">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className={`bg-gray-50 border ${
                passwordError ? "border-red-600" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {passwordError ? (
              <p className="text-red-600 text-[15px] ">{passwordError}</p>
            ) : (
              ""
            )}
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500">
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-yellow-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {loading ? <Loader /> : "Create an account"}
          </button>
          <p className="text-sm font-light text-gray-500">
            Already have an account?{" "}
            <Link href={"/Login"} className="text-white">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
