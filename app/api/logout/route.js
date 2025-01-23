import { NextResponse } from "next/server";
import connectDb from "@/utills/mongodb";

export async function POST() {
  await connectDb();

  try {
    const response = NextResponse.json({ message: "Logged out successfully" });

    // Clear the token cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(0), // Expire immediately
    });

    return response;
  } catch (error) {
    console.error("Error while logging out:", error);
    return NextResponse.json(
      { message: "Failed to log out", details: error.message },
      { status: 500 }
    );
  }
}
