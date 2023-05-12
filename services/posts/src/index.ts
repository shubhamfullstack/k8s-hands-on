import mongoose from "mongoose";
import app from "./app";

const start = async () => {
  const port = process.env.PORT || 5000;
  try {
    await mongoose.connect("mongodb://localhost:27017/posts-db");
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }
  app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
  });
};

start()
