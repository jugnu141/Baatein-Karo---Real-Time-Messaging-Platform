import express from "express";
import "dotenv/config"; // 'dotenv' ko import karo
import User from "./models/user.model.js";
import { clerkMiddleware } from '@clerk/express'
import cors from "cors";


const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

// default middleware
app.use(express.json());
app.use(cors({origin:FRONTEND_URL, credentials:true}));
app.use(clerkMiddleware())


app.get('/health', (req, res) => {
  res.status(200).json({
    ok:true
  })
})


// database connection
// const connectDB = require('./config/database');
import connectDB from "./lib/db.js";
connectDB();



//

app.listen(PORT, () => {
  console.log(`Voting app listening on port ${PORT}`)
})