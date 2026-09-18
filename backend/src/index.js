import express from "express";
import "dotenv/config"; // 'dotenv' ko import karo

const app = express()


import cors from "cors";



console.log("DB_URL=", process.env.DB_URL);



// // default middleware
// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('This is Home Page')
// })

// // database connection
// const connectDB = require('./config/database');
// connectDB();



// // cookie-parser - what is this and why we need this..???

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());




// API mount karna hai



//const PORT = process.env.PORT;
const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Voting app listening on port ${PORT}`)
})