import { NextResponse } from "next/server";
import User from "@/model/User";
import connectDb from "@/utills/mongodb";
import getUserData from "@/utills/getUserData";
import { uploadImage, deleteImage } from "@/utills/uploadToCloudinary";

export async function POST(request) {
  await connectDb();

  try {
    const userid = await getUserData(request);
    const formdata = await request.formData();
    const image = formdata.get("image");
    console.log("image", image);

    const user = await User.findById(userid).select("-password");
    if (!user) {
      return NextResponse.json(
        { message: "This user doesn't exist" },
        { status: 404 }
      );
    }
    if (user.displayLogoImage.id) {
      try {
        await deleteImage(user.displayLogoImage.id);
      } catch (deleteError) {
        console.error("Failed to delete old image:", deleteError);
      }
    }
    let imageData;
    try {
      imageData = await uploadImage(image, "profile");
    } catch (uploadError) {
      return NextResponse.json(
        { message: "File upload failed" },
        { status: 500 }
      );
    }

    // Prepare item data

    user.displayLogoImage.url = imageData.secure_url;
    user.displayLogoImage.id = imageData.public_id;

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
