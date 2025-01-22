import { NextResponse } from "next/server";
import User from "@/model/User";
import connectDb from "@/utills/mongodb";
import getUserData from "@/utills/getUserData";

export async function POST(request) {
  await connectDb();
  const themeColors = {
    light: {
      cardColor: "#FFFFFF",
      backgroundColor: "#e1e1e1",
      TypographyAndIconColor: "#121212",
      isImageBackground: false,
      moduleOverlay: "darken",
    },
    dark: {
      cardColor: "#000000",
      backgroundColor: "#1d1d1d",
      TypographyAndIconColor: "#FFFFFF",
      isImageBackground: false,
      moduleOverlay: "lighten",
    },
    custom: {
      cardColor: "#000000",
      backgroundColor: "#1d1d1d",
      TypographyAndIconColor: "#FFFFFF",
      isImageBackground: false,
      moduleOverlay: "lighten",
    },
  };
  try {
    const userid = await getUserData(request);
    const { type } = await request.json();

    const user = await User.findById(userid).select("-password");
    if (!user) {
      return NextResponse.json(
        { message: "This user doesn't exist" },
        { status: 404 }
      );
    }

    user.themeType = type;
    if (user.themeType !== "custom") {
      user.theme = themeColors[type];
    }

    await user.save();

    return NextResponse.json(
      { message: "Updated successfully", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", error: error.message },
      { status: 500 }
    );
  }
}
