import { uploadImage, deleteImage } from "@/utills/uploadToCloudinary";
import { NextResponse } from "next/server";
import User from "@/model/User";
import connectDb from "@/utills/mongodb";
import getUserData from "@/utills/getUserData";

export async function POST(request) {
  await connectDb();

  try {
    // Get form data
    const formdata = await request.formData();
    const image = formdata.get("image");
    console.log("image", image);

    const userid = await getUserData(request);

    const user = await User.findById(userid);
    if (!user) {
      return NextResponse.json(
        { message: "This user doesn't exist" },
        { status: 404 }
      );
    }
    if (user.profileImage.id) {
      try {
        await deleteImage(user.profileImage.id);
      } catch (deleteError) {
        console.error("Failed to delete old image:", deleteError);
      }
    }
    // Upload image
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

    user.profileImage.url = imageData.secure_url;
    user.profileImage.id = imageData.public_id;

    await user.save();

    return NextResponse.json(
      { message: "Uploaded successfully", user },
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
