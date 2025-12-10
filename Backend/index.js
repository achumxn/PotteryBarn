import express from "express";
import mysql from "mysql2";
import cors from "cors";
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import db from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());


db.connect((err) => {
    if (err) {
        console.log("Database connection failed", err);
    } else {
        console.log("✅ MySQL Connected successfully");
    }
});

// ------------------ USER APIs ------------------

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);

// ------------------ Start Server ------------------
const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// product routes
app.use("/api/product", productRoutes);