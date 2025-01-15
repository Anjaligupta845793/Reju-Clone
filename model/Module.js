import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: [
      "External Link",
      "Media Gallery",
      "Music",
      "Youtube",
      "Tiktok",
      "Custom Product",
      "Throne Wishlist",
      "Custom Event",
      "BandsInTown",
      "Data Capture Form",
    ],
  },
  name: {
    type: String,
    default: "New Module",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  FormType: String,
  visible: Boolean,

  items: {
    type: [], // Array of objects (flexible structure)
    // Default to an empty array
  },
});

export const Module =
  mongoose.models.Module || mongoose.model("Module", ModuleSchema);
