import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/Product";


const router = express.Router();
// Read
router.get("/", getProducts);
// Create
router.post("/", createProduct);
// Update
router.put("/:id", updateProduct);
// Delete
router.delete("/:id", deleteProduct);

export default router;