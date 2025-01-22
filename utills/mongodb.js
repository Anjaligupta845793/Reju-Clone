import mongoose from "mongoose";

const connectDb = async () => {
  try {
    try {
      await mongoose.connect(process.env.MONGO_STRINGS);
      console.log(process.env.MONGO_STRINGS);
      console.log("db is connected");
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
