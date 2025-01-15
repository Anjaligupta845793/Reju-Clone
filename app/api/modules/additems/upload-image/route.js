import { uploadImage } from "@/utills/uploadToCloudinary";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formdata = await request.formData();
    const image = formdata.get("image");
    try {
      const data = await uploadImage(image, "module");
      const pablicid = data.public_id;
      const secureurl = data.secure_url;
    } catch (error) {
      return NextResponse.json(
        {
          message: "fill is not uploaded",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "uploaded",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }
}
