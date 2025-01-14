"use client";
import Image from "next/image";
import React from "react";
import { AuthData } from "../Context/AuthProvider";
import SignUpForm from "@/components/SignUpForm";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
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
        <h1 className="font-bold text-2xl mt-4">Sign Up to Reju</h1>
        <SignUpForm router={router} />
      </div>
    </div>
  );
};

export default Register;
