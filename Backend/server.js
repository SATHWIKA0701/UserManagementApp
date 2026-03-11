import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userApp from "./APIs/UserApi.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL].filter(Boolean),
    credentials: true,
  })
);

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  if (!process.env.DB_URL) {
    throw new Error("DB_URL is missing");
  }

  const conn = await mongoose.connect(process.env.DB_URL, {
    serverSelectionTimeoutMS: 10000,
  });

  isConnected = conn.connections[0].readyState === 1;
  console.log("MongoDB connected");
}

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("MongoDB connection error:", err);
    res.status(500).json({
      message: "Database connection failed",
      error: err.message,
    });
  }
});

app.use("/user-api", userApp);

app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

// local development only
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;