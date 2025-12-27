import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import dotenv from 'dotenv';
dotenv.config();
import path from "path";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// ✅ Serve static images correctly
app.use("/uploads", express.static(path.resolve("uploads"))); 

// API Endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);

// Root Route
app.get("/", (req, res) => {
    res.send("API Working");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
});
