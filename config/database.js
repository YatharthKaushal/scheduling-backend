// mongodb connection configuration and initialization type: module
import mongoose from "mongoose";
import config from "./config.js";

const { MONGODB_URI } = config;

const connectDB = async () => {
  try {
    const dbURI = MONGODB_URI;
    if (!dbURI) {
      throw new Error("MONGODB_URI is not defined in the configuration");
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("> MongoDB connected successfully");
  } catch (error) {
    console.error("> MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};
export default connectDB;
