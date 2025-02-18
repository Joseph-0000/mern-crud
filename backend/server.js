import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./routes/Product.js"

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/products", Product);

app.listen(5000, () => {
    connectDB();
    console.log("Server is running on port 5000");
})


