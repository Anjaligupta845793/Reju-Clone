import {
  MediaGallary,
  YouTubeTiktok,
  ExternalLink,
  Event,
  Product,
  Form,
  ThroneWishlistOrBandInTown,
} from "@/model/Module";
import connectDb from "@/utills/mongodb";
const typeSchemaMap = {
  "Media Gallery": MediaGallary,
  Youtube: YouTubeTiktok,
  Tiktok: YouTubeTiktok,
  "External Link": ExternalLink,
  "Custom Event": Event,
  "Custom Product": Product,
  "Data Capture Form": Form,
  "Throne Wishlist": ThroneWishlistOrBandInTown,
  BandsInTown: ThroneWishlistOrBandInTown,
};
export async function POST(request) {
  try {
    await connectDb();
    const { moduleId, itemData, type } = await request.json();
    const SchemaModel = typeSchemaMap[type];
    console.log(SchemaModel);
    NextResponse.json(
      {
        message: "Items added successfully",
        SchemaModel,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("got the error while adding items in module", error);
    NextResponse.json(
      {
        message: "something went wrong",
      },
      { status: 500 }
    );
  }
}
