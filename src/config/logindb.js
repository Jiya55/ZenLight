import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/userDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to local MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // exit with failure
  }
};
