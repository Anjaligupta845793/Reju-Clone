"use client";
import Image from "next/image";
import React from "react";
import { AuthData } from "../Context/AuthProvider";
import { useState } from "react";
import Loader from "@/components/Loader";

import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, Login } = AuthData();
  const handleSubmit = (e) => {
    e.preventDefault();
    Login(email, password);
  };

  return (
    <div className="text-white grid xl:grid-cols-2 grid-cols-1">
      {/* Left Side */}
      <div className="xl:flex flex-col items-center pt-20 hidden px-20">
        <Image
          src={`https://reju.pro/_next/image?url=%2Fimages%2Flogo%2FWhatsApp_Image_2024-05-24_at_7.10.23_PM-removebg-preview.png&w=384&q=75`}
          width={150}
          height={100}
          alt="reju"
        />
        <p className="mt-10 text-center max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          enim, error mollitia sed
        </p>
        <Image
          src="/phone (2).png"
          width={250}
          height={400}
          alt="signup"
          className="mt-20"
        />
      </div>

      {/* Right Side */}
      <div className="w-full px-6 py-12 md:px-20  xl:px-40 border-l-[1px] border-[#302030]">
        <p className="mt-20">Start for free</p>
        <h1 className="font-bold text-2xl mt-4">Sign In to Reju</h1>

        <section className="flex justify-center items-center mt-6 ">
          <div className="w-full text-white rounded-lg shadow-lg md:max-w-md ">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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

              <button
                type="submit"
                className="w-full text-white bg-yellow-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {loading ? <Loader /> : "Login"}
              </button>
              <p className="text-sm font-light text-gray-500">
                Don't have account?{" "}
                <Link href={"/register"} className="text-white">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
