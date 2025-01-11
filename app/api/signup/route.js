import { NextRequest, NextResponse } from "next/server";
import User from "@/model/User";
import bcrypt from "bcrypt";
import { generateJwt } from "@/utills/genratejwt";
import connectDb from "@/utills/mongodb";

export async function POST(request) {
  await connectDb();
  try {
    const { username, email, password } = await request.json();
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "All Fields are not provided" },
        { status: 400 }
      );
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      return NextResponse.json(
        {
          message: "User already exist with this email",
        },
        { status: 400 }
      );
    }
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: username,
      email,
      password: hashedpassword,
    });

    const token = generateJwt(user._id);

    const response = NextResponse.json(
      { message: "user Created successfully", user: user },
      { status: 201 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,

      sameSite: "strict",
      maxAge: 15 * 24 * 60 * 60,
    });
    return response;
  } catch (error) {
    console.log("Error while doing Signup", error);
    return NextResponse.json(
      { massage: "Failed to process request", details: error.message },
      { status: 500 }
    );
  }
}
