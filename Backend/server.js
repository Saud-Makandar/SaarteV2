const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const WomenProduct = require("./models/WomenProduct");
const MenProduct = require("./models/MenProduct");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Saarte backend is running!");
});

// ─── Women's Products Routes ───────────────────────────────────────────────

// GET all women's products
app.get("/api/women", async (req, res) => {
  try {
    const products = await WomenProduct.find().sort({ createdAt: -1 });
    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single women's product by ID
app.get("/api/women/:id", async (req, res) => {
  try {
    const product = await WomenProduct.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ──────────────────────────────────────────────────────────────────────────

// ─── Men's Products Routes ─────────────────────────────────────────────────

// GET all men's products
app.get("/api/men", async (req, res) => {
  try {
    const products = await MenProduct.find().sort({ createdAt: -1 });
    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single men's product by ID
app.get("/api/men/:id", async (req, res) => {
  try {
    const product = await MenProduct.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ──────────────────────────────────────────────────────────────────────────

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    tls: true,
    tlsAllowInvalidCertificates: true,
    serverSelectionTimeoutMS: 15000,
  })
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed:");
    console.log(error.message);
  });