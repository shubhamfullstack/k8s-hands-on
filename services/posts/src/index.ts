import mongoose from "mongoose";
import app from "./app";

const start = async () => {
  const port = process.env.PORT || 5000;
  const mongo_url:string | undefined = process.env.MONGO_DB_URL;
  try {
    await mongoose.connect(mongo_url ? mongo_url : "");
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }
  app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
  });
};

start()
