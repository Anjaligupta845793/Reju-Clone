import connectDb from "@/utills/mongodb";
import User from "@/model/User";
import getUserData from "@/utills/getUserData";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDb();
  try {
    const userid = await getUserData(request);
    const user = await User.findById(userid).select("-password");
    return NextResponse.json(
      {
        success: true,
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("got a error while fetching user", error);
    return NextResponse.json(
      {
        message: "got a error ",
      },
      { status: 500 }
    );
  }
}
