import Product from "../models/Product.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => { 
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Error...", error);
        res.status(500).json({ success: false, message: "Error fetching products" });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct, message: "Product created successfully" });
    } catch (error) {
        console.error("Error...", error);
        res.status(404).json({ success: false, message: "Product not found" });
    }
}

export const updateProduct =  async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct, message: "Product updated successfully" });
    }
    catch (error) {
        console.error("Error...", error);
        res.status(500).json({ success: false, message: "Error updating product" });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error...", error);
        res.status(500).json({ success: false, message: "Error deleting product" });
    }
}