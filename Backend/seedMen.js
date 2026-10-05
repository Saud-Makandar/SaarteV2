const mongoose = require("mongoose");
const MenProduct = require("./models/MenProduct");
require("dotenv").config();

const products = [
  {
    name: "Onyx Sovereign",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095517/Lychee.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095450/LycheeOUTFIT.png",
    price: 310, originalPrice: 400, rating: 4.7, reviews: 48,
    description: "A commanding black silhouette forged for the man who owns every room.",
    badge: "New"
  },
  {
    name: "Alabaster Tailor",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095492/Orange.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095459/OrangeOUTFIT.jpg",
    price: 280, originalPrice: 360, rating: 4.6, reviews: 39,
    description: "Clean ivory precision — structured tailoring that speaks without words.",
    badge: "New"
  },
  {
    name: "Noir Monarch",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095511/Mangosteen.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095454/MangosteenOUTFIT.jpg",
    price: 340, originalPrice: 440, rating: 4.9, reviews: 71,
    description: "The king of darkness — regal, deep, impossibly elegant.",
    badge: "Bestseller"
  },
  {
    name: "Ebony Sentinel",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095482/Goji.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095442/GojiOUTFIT.jpg",
    price: 290, originalPrice: 380, rating: 4.7, reviews: 55,
    description: "Ancient strength, modern tailoring — the warrior's wardrobe.",
    badge: "Limited"
  },
  {
    name: "Carbon Knight",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095512/Mulberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095456/MulberryOUTFIT.png",
    price: 300, originalPrice: 390, rating: 4.8, reviews: 62,
    description: "Rich dark heritage — crafted for the man who knows his roots.",
    badge: "Premium"
  },
  {
    name: "Obsidian Edge",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095490/Ackee.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095437/AckeeOUTFIT.png",
    price: 270, originalPrice: 350, rating: 4.5, reviews: 31,
    description: "Rare volcanic precision — cut with an edge that never dulls.",
    badge: "Rare"
  },
  {
    name: "Silver Frost",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095485/Cloudberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095439/CloudberryOUTFIT.png",
    price: 320, originalPrice: 420, rating: 4.7, reviews: 44,
    description: "Nordic minimalism at its finest — clean, cold, commanding.",
    badge: "Exclusive"
  },
  {
    name: "Ivory Diplomat",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095518/Mandarin.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095451/MandarinOUTFIT.png",
    price: 260, originalPrice: 340, rating: 4.6, reviews: 37,
    description: "Eastern precision meets Western structure. The global gentleman.",
    badge: "New"
  },
  {
    name: "Slate Architect",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095499/Pear.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095464/PearOUTFIT.png",
    price: 240, originalPrice: 310, rating: 4.5, reviews: 28,
    description: "Balanced and grounded — the shape of understated confidence.",
    badge: "New"
  },
  {
    name: "Midnight Auteur",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095493/Passion.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095462/PassionOUTFIT.jpg",
    price: 350, originalPrice: 460, rating: 5.0, reviews: 88,
    description: "For the man who dresses with intention and lives with fire.",
    badge: "Icon"
  },
  {
    name: "Charcoal Avant",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095479/Jostaberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095447/JostaberryOUTFIT.jpg",
    price: 295, originalPrice: 380, rating: 4.6, reviews: 33,
    description: "A hybrid of power and grace — for the man who defies categories.",
    badge: "Avant-Garde"
  },
  {
    name: "Graphite Duke",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095505/Pomelo.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095472/PomeloOUTFIT.png",
    price: 275, originalPrice: 355, rating: 4.6, reviews: 42,
    description: "Grand scale presence — a look that commands space and respect.",
    badge: "New"
  },
  {
    name: "Sable Viscount",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095508/Rambutan.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095473/RambutanOUTFIT.png",
    price: 315, originalPrice: 410, rating: 4.8, reviews: 57,
    description: "Textured depth — for the man whose refinement knows no limits.",
    badge: "Limited"
  },
  {
    name: "Pearl Gentleman",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095496/Peach.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095463/PeachOUTFIT.png",
    price: 255, originalPrice: 330, rating: 4.5, reviews: 26,
    description: "Soft authority — the gentleman's touch woven into every fiber.",
    badge: "New"
  },
  {
    name: "Noir Prestige",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095502/Plum.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095468/PlumOUTFIT.png",
    price: 330, originalPrice: 430, rating: 4.9, reviews: 74,
    description: "Brooding excellence that speaks without a single word.",
    badge: "Bestseller"
  },
  {
    name: "Ash Cavalier",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095495/Papaya.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095460/PapayaOUTFIT.png",
    price: 240, originalPrice: 310, rating: 4.5, reviews: 22,
    description: "Refined ease with a Saarte edge — relaxed but never casual.",
    badge: "New"
  },
  {
    name: "Matte Baron",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095515/Nectarine.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095457/NectarineOUTFIT.jpg",
    price: 280, originalPrice: 365, rating: 4.7, reviews: 49,
    description: "Smooth sun-kissed sophistication. Summer's finest silhouette.",
    badge: "New"
  },
  {
    name: "Black Regalia",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095504/Pomegranate.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095470/PomegranateOUTFIT.png",
    price: 360, originalPrice: 470, rating: 4.9, reviews: 83,
    description: "A thousand facets of brilliance — complex, beautiful, unyielding.",
    badge: "Signature"
  },
  {
    name: "Ivory Heritage",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095478/Huckleberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095445/HuckleberryOUTFIT.jpg",
    price: 285, originalPrice: 370, rating: 4.6, reviews: 40,
    description: "Wild and untamed — for the man who charts his own course.",
    badge: "Heritage"
  },
  {
    name: "Chalk Modernist",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095507/Raspberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095475/RaspberryOUTFIT.png",
    price: 270, originalPrice: 350, rating: 4.7, reviews: 51,
    description: "Sharp confidence — worn by those who lead, not follow.",
    badge: "New"
  },
  {
    name: "Stone Contrarian",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095509/Watermelon.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095476/WatermelonOUTFIT.png",
    price: 250, originalPrice: 320, rating: 4.5, reviews: 34,
    description: "Bold contrast, cool interior — the duality of the Saarte man.",
    badge: "New"
  },
  {
    name: "Shadow Elite",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095489/Acai.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095434/AcaiOUTFIT.png",
    price: 320, originalPrice: 420, rating: 4.8, reviews: 66,
    description: "Dark, rich and powerful — superb style distilled to its essence.",
    badge: "Premium"
  },
  {
    name: "Iron Atelier",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095483/Cactus.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095438/CactusOUTFIT.png",
    price: 300, originalPrice: 390, rating: 4.7, reviews: 45,
    description: "Resilient and structured — built for any environment.",
    badge: "Exclusive"
  },
  {
    name: "Ivory Marquis",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095520/Mango.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095453/MangoOUTFIT.png",
    price: 265, originalPrice: 345, rating: 4.6, reviews: 38,
    description: "Golden poise and absolute captivation in every stitch.",
    badge: "New"
  },
  {
    name: "White Lux",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095514/Loquat.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095448/LoquatOUTFIT.png",
    price: 310, originalPrice: 400, rating: 4.7, reviews: 43,
    description: "Spring's first offering — delicate yet purposeful perfection.",
    badge: "Limited"
  },
  {
    name: "Crowned Noir",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095501/Pineapple.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095466/PineappleOUTFIT.png",
    price: 290, originalPrice: 380, rating: 4.8, reviews: 60,
    description: "Crowned with confidence — royalty dressed to absolute perfection.",
    badge: "Signature"
  },
  {
    name: "Dusk Legacé",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095498/Persimmon.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095467/PersimmonsOUTFIT.png",
    price: 335, originalPrice: 435, rating: 4.8, reviews: 68,
    description: "Autumn tones of deep warmth and quiet wisdom.",
    badge: "Heritage"
  },
  {
    name: "Blanc Verdict",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095488/Acerola.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791095435/AcerolaOUTFIT.png",
    price: 275, originalPrice: 355, rating: 4.6, reviews: 36,
    description: "Small in form, extraordinary in impact — the power of restraint.",
    badge: "New"
  },
];

async function seedMenDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    await MenProduct.deleteMany({});
    console.log("🗑️  Cleared existing men products");

    await MenProduct.insertMany(products);
    console.log(`🔷 Seeded ${products.length} men products successfully!`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
    process.exit(1);
  }
}

seedMenDB();
