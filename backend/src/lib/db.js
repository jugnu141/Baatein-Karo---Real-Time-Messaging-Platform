// MongoDB se connect karne ka logic yahan hai
//const dns = require('dns');
import dns from "dns";
dns.setServers(['1.1.1.1', '8.8.8.8']); // Fix for SRV lookup



import mongoose from "mongoose";  
//require("dotenv").config();
import "dotenv/config";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      //useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB;