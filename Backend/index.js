import express from "express";
import mysql from "mysql2";
import cors from "cors";
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import db from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

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
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/api/uploads', express.static(path.join(__dirname,'uploads')));

// product routes
app.use("/api/product", productRoutes);

// ------------------ Start Server ------------------
const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

