import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    DateOfBirth: {
      type: String,
    },
    coverimage: {
      url: {
        type: String,
      },
      id: {
        type: String,
      },
    },
    profileImage: {
      url: {
        type: String,
      },
      id: {
        type: String,
      },
    },
    displayNameOrLogo: {
      type: Boolean,
      default: false,
    },
    displayName: {
      type: Boolean,
      default: true,
    },
    displayLogo: {
      type: Boolean,
      default: false,
    },
    displayLogoImage: {
      url: {
        type: String,
      },
      id: {
        type: String,
      },
    },
    themeType: {
      type: String,
      enum: ["dark", "light", "custom"],
      default: "dark",
    },
    theme: {
      cardColor: String,
      backgroundColor: String,
      TypographyandIconColor: String,
      isImageBackground: Boolean,
      moduleOverlay: String,
    },
    socialLinks: [
      {
        type: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
    subscription: {
      status: String,
      plan: String,
      amount: Number,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
