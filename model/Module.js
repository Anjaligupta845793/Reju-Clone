import mongoose from "mongoose";

const Module = new mongoose.Schema({
  type: String,
  name: String,
  FormType: String,
  visible: bool,
  items: [{ type: [mongoose.Schema.Types.Mixed], default: [] }],
});

const MusicModule = new mongoose.Schema({});

const MediaGallaryModule = new mongoose.Schema({});

const YouTubeTiktokModule = new mongoose.Schema({});

const ExternalLinkModule = new mongoose.Schema({});

const EventModule = new mongoose.Schema({});

const ProductModule = new mongoose.Schema({
  image: {
    id: {
      type: String,
      required: true,
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
