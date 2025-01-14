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

  items: [{ type: [mongoose.Schema.Types.Mixed], default: [] }],
});

export const Module =
  mongoose.models.Module || mongoose.model("Module", ModuleSchema);

const MediaGallaryModule = new mongoose.Schema({
  image: {
    url: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  title: {
    type: String,
    required: true,
  },
  Url: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});
export const MediaGallary =
  mongoose.models.MediaGallary ||
  mongoose.model("MediaGallary", MediaGallaryModule);

const YouTubeTiktokModule = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});
export const YouTubeTiktok =
  mongoose.models.YouTubeTiktok ||
  mongoose.model("YouTubeTiktok", YouTubeTiktokModule);

const ExternalLinkModule = new mongoose.Schema({
  image: {
    url: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  Url: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

export const ExternalLink =
  mongoose.models.ExternalLink ||
  mongoose.model("ExternalLink", ExternalLinkModule);

const EventModule = new mongoose.Schema({
  EventDate: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true,
  },
  VenueName: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  TicketLink: {
    type: String,
    required: true,
  },
});
export const Event =
  mongoose.models.Event || mongoose.model("Event", EventModule);

const ProductModule = new mongoose.Schema({
  image: {
    id: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  productUrl: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Currency: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductModule);

const FormModule = new mongoose.Schema({
  image: {
    url: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  title: {
    type: String,
    required: true,
  },
  Subtitle: {
    type: String,
    required: true,
  },
});
export const Form = mongoose.models.Form || mongoose.model("Form", FormModule);

const ThroneWishlistOrBandInTownModule = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});
export const ThroneWishlistOrBandInTown =
  mongoose.models.ThroneWishlistOrBandInTown ||
  mongoose.model(
    "ThroneWishlistOrBandInTown",
    ThroneWishlistOrBandInTownModule
  );
