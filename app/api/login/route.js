import { NextRequest, NextResponse } from "next/server";
import User from "@/model/User";
import bcrypt from "bcrypt";
import { generateJwt } from "@/utills/genratejwt";
import connectDb from "@/utills/mongodb";

export async function POST(request) {
  await connectDb();
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "All Fields are not provided" },
        { status: 400 }
      );
    }
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: "User doesn't exit with this email",
        },
        { status: 400 }
      );
    }
    // Await the hash generation
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "wrong email or password",
        },
        { status: 400 }
      );
    }
    const token = await generateJwt(user._id);

    const response = NextResponse.json(
      { message: "Logged In successfully", user: user },
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
      { message: "Failed to process request", details: error.message },
      { status: 500 }
    );
  }
}
