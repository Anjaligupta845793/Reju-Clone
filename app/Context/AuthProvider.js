"use client";
import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(false);

  const Signup = async (name, email, password) => {
    setloading(true);
    try {
      const signup = await axios.post("/api/signup", {
        username: name,
        email,
        password,
      });
      console.log(signup);
      setloading(false);

      toast.success("signed up successfully!");
      setisAuth(true);
    } catch (error) {
      console.log("error while calling signup ", error);
      setloading(false);
      toast.error(error.response.data.message);
      setisAuth(false);
    }
  };

  const Login = async (email, password, router) => {
    setloading(true);
    try {
      const login = await axios.post("/api/login", {
        email,
        password,
      });
      console.log(login);
      setloading(false);
      toast.success("logged in successfully!");
      setisAuth(true);
      router.push("/");
    } catch (error) {
      console.log("error while calling Login ", error);
      setloading(false);
      toast.error(error.response.data.message);
      setisAuth(false);
    }
  };

  return (
    <AuthContext.Provider value={{ Signup, loading, Login, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthData = () => useContext(AuthContext);
