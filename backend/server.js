import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userApi from "./APIs/UserApi.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* CONNECT ROUTES */
app.use("/user-api", userApi);

app.get("/", (req, res) => {
  res.send("User Management Server Running");
});

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully");

    const port = process.env.PORT || 4000;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error("Database connection failed", error.message);
  }
}

/* ERROR HANDLER */
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

connectDB();