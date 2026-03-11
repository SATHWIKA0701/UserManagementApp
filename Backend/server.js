import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userApp from "./APIs/UserApi.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: ["http://localhost:5173", process.env.FRONTEND_URL],
  credentials: true
}));

// MongoDB connection
mongoose.connect(process.env.DB_URL)
.then(()=>console.log("DB connected"))
.catch(err=>console.log(err));

// Routes
app.use("/user-api", userApp);

// Test route
app.get("/", (req,res)=>{
  res.send("Backend running successfully");
});


export default app;