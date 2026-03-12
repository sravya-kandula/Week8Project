// create http server
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// configure dotenv
dotenv.config();

// create express app
const app = express();

// body parser middleware
app.use(express.json());

// sample route (you can replace this with UserApp later)
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// connect to database
async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected successfully");

        const port = process.env.PORT || 8000;

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

    } catch (error) {
        console.error("Database connection failed", error.message);
        process.exit(1);
    }
}

// error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
    });
});

// call database connection function
connectDB();