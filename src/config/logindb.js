import 'dotenv/config'; 
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Replace the hardcoded string with process.env.MONGODB_URI
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to local MongoDB via .env");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // exit with failure
  }
};
