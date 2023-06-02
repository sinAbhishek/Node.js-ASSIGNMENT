import express from "express";
import axios from "axios";
import cors from "cors";
import mongoose from "mongoose";
import storeroute from "./routes/Fetch.js";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();
const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MongoUrl);
  } catch (err) {
    throw err;
  }
};
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/api", storeroute);
app.listen(PORT, () => {
  mongoConnect();
  console.log("database connected");
});
