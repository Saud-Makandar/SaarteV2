const mongoose = require("mongoose");

const menProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, default: "Men" },
    imageUrl: { type: String, required: true },
    outfitUrl: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    rating: { type: Number, default: 4.5 },
    reviews: { type: Number, default: 0 },
    description: { type: String },
    isNew: { type: Boolean, default: true },
    badge: { type: String },
  },
  { timestamps: true, suppressReservedKeysWarning: true }
);

module.exports = mongoose.model("MenProduct", menProductSchema);
