import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    try {
      await mongoose.connect(process.env.MONGO_STRINGS);
      console.log("env file ", process.env.MONGO_STRINGS);
      console.log("db is connected");
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
