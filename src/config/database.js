import mongoose from "mongoose";
import config from "./config.js";

async function connectDB()
{
    await mongoose.connect(config.mongo_uri);
    console.log("Connected to Database")
}

export default connectDB;