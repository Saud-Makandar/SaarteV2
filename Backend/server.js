const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const WomenProduct = require("./models/WomenProduct");
const MenProduct = require("./models/MenProduct");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Track DB status
let isDbConnected = false;

// Fallback seed products in case DB is unreachable
const fallbackWomen = [
  {
    _id: "w-1",
    name: "Noir Lumière",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096326/Apple.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096298/AppleOutfit.png",
    price: 320, originalPrice: 420, rating: 4.8, reviews: 53,
    description: "A stunning black ensemble that captures the crisp elegance of a woman in full command.",
    badge: "New"
  },
  {
    _id: "w-2",
    name: "Ivory Reverie",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096324/Apricot.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096296/ApricotOutfit.png",
    price: 280, originalPrice: 360, rating: 4.6, reviews: 41,
    description: "Bold and free-spirited — ivory silk that moves with the modern woman.",
    badge: "New"
  },
  {
    _id: "w-3",
    name: "Blanc Sofiste",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096322/Avocado.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096293/AvocadoOutfit.png",
    price: 260, originalPrice: 340, rating: 4.7, reviews: 38,
    description: "Earth-toned white sophistication for the woman who leads with grace.",
    badge: "New"
  },
  {
    _id: "w-4",
    name: "Golden Atelier",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096319/Banana.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096291/BananaOutfit.png",
    price: 240, originalPrice: 310, rating: 4.5, reviews: 29,
    description: "Warm and luminous — a look that radiates quiet, golden confidence.",
    badge: "New"
  },
  {
    _id: "w-5",
    name: "Obsidian Duchess",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096317/Blackberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096283/BlackberryOutfit.png",
    price: 300, originalPrice: 390, rating: 4.9, reviews: 67,
    description: "Deep, rich tones for an evening of unforgettable elegance.",
    badge: "Bestseller"
  },
  {
    _id: "w-6",
    name: "Noir Icon",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096284/Dragon.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096246/DragonOutfit.png",
    price: 380, originalPrice: 490, rating: 5.0, reviews: 89,
    description: "Fierce. Mythical. Unforgettable. The apex of the Saarte collection.",
    badge: "Icon"
  }
];

const fallbackMen = [
  {
    _id: "m-1",
    name: "Onyx Sovereign",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095517/Lychee.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095450/LycheeOUTFIT.png",
    price: 310, originalPrice: 400, rating: 4.7, reviews: 48,
    description: "A commanding black silhouette forged for the man who owns every room.",
    badge: "New"
  },
  {
    _id: "m-2",
    name: "Alabaster Tailor",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095492/Orange.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095459/OrangeOUTFIT.jpg",
    price: 280, originalPrice: 360, rating: 4.6, reviews: 39,
    description: "Clean ivory precision — structured tailoring that speaks without words.",
    badge: "New"
  },
  {
    _id: "m-3",
    name: "Noir Monarch",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095511/Mangosteen.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095454/MangosteenOUTFIT.jpg",
    price: 340, originalPrice: 440, rating: 4.9, reviews: 71,
    description: "The king of darkness — regal, deep, impossibly elegant.",
    badge: "Bestseller"
  },
  {
    _id: "m-4",
    name: "Ebony Sentinel",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095482/Goji.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095442/GojiOUTFIT.jpg",
    price: 290, originalPrice: 380, rating: 4.7, reviews: 55,
    description: "Ancient strength, modern tailoring — the warrior's wardrobe.",
    badge: "Limited"
  },
  {
    _id: "m-5",
    name: "Carbon Knight",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095512/Mulberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095456/MulberryOUTFIT.png",
    price: 300, originalPrice: 390, rating: 4.8, reviews: 62,
    description: "Rich dark heritage — crafted for the man who knows his roots.",
    badge: "Premium"
  }
];

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Saarte Royale Backend is running!",
    database: isDbConnected ? "Connected" : "Fallback active",
  });
});

// ─── Women's Products Routes ───────────────────────────────────────────────
app.get("/api/women", async (req, res) => {
  try {
    if (isDbConnected) {
      const products = await WomenProduct.find().sort({ createdAt: -1 });
      return res.json({ success: true, data: products });
    }
    return res.json({ success: true, data: fallbackWomen });
  } catch (error) {
    return res.json({ success: true, data: fallbackWomen });
  }
});

app.get("/api/women/:id", async (req, res) => {
  try {
    if (isDbConnected) {
      const product = await WomenProduct.findById(req.params.id);
      if (product) return res.json({ success: true, data: product });
    }
    const fallback = fallbackWomen.find((p) => p._id === req.params.id);
    if (fallback) return res.json({ success: true, data: fallback });
    return res.status(404).json({ success: false, message: "Product not found" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// ─── Men's Products Routes ─────────────────────────────────────────────────
app.get("/api/men", async (req, res) => {
  try {
    if (isDbConnected) {
      const products = await MenProduct.find().sort({ createdAt: -1 });
      return res.json({ success: true, data: products });
    }
    return res.json({ success: true, data: fallbackMen });
  } catch (error) {
    return res.json({ success: true, data: fallbackMen });
  }
});

app.get("/api/men/:id", async (req, res) => {
  try {
    if (isDbConnected) {
      const product = await MenProduct.findById(req.params.id);
      if (product) return res.json({ success: true, data: product });
    }
    const fallback = fallbackMen.find((p) => p._id === req.params.id);
    if (fallback) return res.json({ success: true, data: fallback });
    return res.status(404).json({ success: false, message: "Product not found" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// Start Express Server immediately
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Connect to MongoDB asynchronously
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      isDbConnected = true;
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.log("MongoDB connection notice (running with resilient catalog):", error.message);
    });
}