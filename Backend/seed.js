const mongoose = require("mongoose");
const WomenProduct = require("./models/WomenProduct");
require("dotenv").config();

const products = [
  {
    name: "Noir Lumière",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096326/Apple.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096298/AppleOutfit.png",
    price: 320, originalPrice: 420, rating: 4.8, reviews: 53,
    description: "A stunning black ensemble that captures the crisp elegance of a woman in full command.",
    badge: "New"
  },
  {
    name: "Ivory Reverie",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096324/Apricot.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096296/ApricotOutfit.png",
    price: 280, originalPrice: 360, rating: 4.6, reviews: 41,
    description: "Bold and free-spirited — ivory silk that moves with the modern woman.",
    badge: "New"
  },
  {
    name: "Blanc Sofiste",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096322/Avocado.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096293/AvocadoOutfit.png",
    price: 260, originalPrice: 340, rating: 4.7, reviews: 38,
    description: "Earth-toned white sophistication for the woman who leads with grace.",
    badge: "New"
  },
  {
    name: "Golden Atelier",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096319/Banana.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096291/BananaOutfit.png",
    price: 240, originalPrice: 310, rating: 4.5, reviews: 29,
    description: "Warm and luminous — a look that radiates quiet, golden confidence.",
    badge: "New"
  },
  {
    name: "Obsidian Duchess",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096317/Blackberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096283/BlackberryOutfit.png",
    price: 300, originalPrice: 390, rating: 4.9, reviews: 67,
    description: "Deep, rich tones for an evening of unforgettable elegance.",
    badge: "Bestseller"
  },
  {
    name: "Slate Poetesse",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096315/Blueberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096281/BlueberryOutfit.png",
    price: 270, originalPrice: 350, rating: 4.6, reviews: 44,
    description: "Cool and composed — the very definition of effortless style.",
    badge: "New"
  },
  {
    name: "Ash Moderniste",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096313/Boysenberry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096279/BoysenberryOutfit.png",
    price: 290, originalPrice: 380, rating: 4.7, reviews: 33,
    description: "A fusion of bold and delicate for the modern Saarte woman.",
    badge: "New"
  },
  {
    name: "Pearl Errante",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096310/Cantaloupe.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096261/CantaloupeOutfit.png",
    price: 250, originalPrice: 320, rating: 4.4, reviews: 22,
    description: "Light, breezy and perfect for the woman always on the move.",
    badge: "New"
  },
  {
    name: "Étoile Noire",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096308/Carambola.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096259/CarambolaOutfit.png",
    price: 310, originalPrice: 400, rating: 4.8, reviews: 58,
    description: "Star-bright and exotic — a look from another dimension of style.",
    badge: "Limited"
  },
  {
    name: "Noir Élite",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096306/Cherry.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096256/CherryOutfit.png",
    price: 340, originalPrice: 440, rating: 4.9, reviews: 72,
    description: "Powerful and impossible to ignore — the pinnacle of the Saarte woman.",
    badge: "Bestseller"
  },
  {
    name: "Chalk Vivante",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096304/Clementine.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096255/ClementineOutfit.png",
    price: 220, originalPrice: 290, rating: 4.5, reviews: 18,
    description: "Bright and full of energy — dressed to dazzle in a chalk canvas.",
    badge: "New"
  },
  {
    name: "Ivory Tropique",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096302/Coconut.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096253/CoconutOutfit.png",
    price: 260, originalPrice: 340, rating: 4.6, reviews: 35,
    description: "Tropical elegance refined through Saarte craftsmanship.",
    badge: "New"
  },
  {
    name: "White Velour",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096288/CustardApple.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096249/CustardAppleOutfit.png",
    price: 290, originalPrice: 370, rating: 4.7, reviews: 40,
    description: "Soft, creamy tones draped in an unquestionable luxurious finish.",
    badge: "New"
  },
  {
    name: "Sable Ancienne",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096286/Date.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096242/DateOutfit.png",
    price: 330, originalPrice: 430, rating: 4.8, reviews: 62,
    description: "Ancient beauty translated into contemporary Saarte design.",
    badge: "Rare"
  },
  {
    name: "Noir Icon",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096284/Dragon.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096246/DragonOutfit.png",
    price: 380, originalPrice: 490, rating: 5.0, reviews: 89,
    description: "Fierce. Mythical. Unforgettable. The apex of the Saarte collection.",
    badge: "Icon"
  },
  {
    name: "Graphite Avant",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096276/Durian.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096245/DurianOutfit.png",
    price: 270, originalPrice: 350, rating: 4.4, reviews: 27,
    description: "Bold and unconventional — for the woman who defies the ordinary.",
    badge: "Avant-Garde"
  },
  {
    name: "Stone Muse",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096273/Fig.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096240/FigOutfit.png",
    price: 300, originalPrice: 390, rating: 4.7, reviews: 48,
    description: "Mediterranean allure woven with a timeless Saarte soul.",
    badge: "New"
  },
  {
    name: "Blanc Zeste",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096269/Grapefruit.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096236/GrapefruitOutfit.png",
    price: 250, originalPrice: 320, rating: 4.6, reviews: 31,
    description: "A burst of radiant personality in crisp, clean white.",
    badge: "New"
  },
  {
    name: "Onyx Collector",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096267/Grapes.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096234/GrapesOutfit.png",
    price: 280, originalPrice: 360, rating: 4.7, reviews: 55,
    description: "Vineyard-inspired black luxury for the truly discerning collector.",
    badge: "Premium"
  },
  {
    name: "Ash Liberté",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096265/Guava.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096232/GuavaOutfit.png",
    price: 230, originalPrice: 300, rating: 4.5, reviews: 20,
    description: "A sense of freedom in clean, elevated understated design.",
    badge: "New"
  },
  {
    name: "Ivory Soir",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096262/Honeydew.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096230/HoneydewOutfit.png",
    price: 260, originalPrice: 340, rating: 4.6, reviews: 37,
    description: "Sweet and serene — morning light captured in pure couture.",
    badge: "New"
  },
  {
    name: "Pearl Orient",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096227/Longan.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096207/LonganOutfit.jpg",
    price: 290, originalPrice: 380, rating: 4.7, reviews: 43,
    description: "Subtle luxury from the East — refined, rare and deeply feminine.",
    badge: "Limited"
  },
  {
    name: "Blanc Précis",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096224/Lime.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096205/LimeOutfit.jpg",
    price: 220, originalPrice: 290, rating: 4.5, reviews: 26,
    description: "Sharp, precise and undeniably chic in clean white.",
    badge: "New"
  },
  {
    name: "Lumière Solaire",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096222/Lemon.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096203/LemonOutfit.jpg",
    price: 240, originalPrice: 310, rating: 4.6, reviews: 32,
    description: "Radiant, sun-kissed and effortlessly stylish in every light.",
    badge: "New"
  },
  {
    name: "Onyx Étrange",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096220/Kiwi.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096201/KiwiOutfit.jpg",
    price: 270, originalPrice: 350, rating: 4.7, reviews: 49,
    description: "Unexpectedly bold beneath a calm exterior — just like you.",
    badge: "New"
  },
  {
    name: "Noir Exclusif",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096218/Kumquat.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096198/KumquatOutfit.jpg",
    price: 310, originalPrice: 400, rating: 4.8, reviews: 61,
    description: "Small, but mighty — a statement piece in every stitch.",
    badge: "Exclusive"
  },
  {
    name: "Black Signature",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096216/Jackfruit.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096209/JackfruitOutfit.jpg",
    price: 350, originalPrice: 450, rating: 4.9, reviews: 76,
    description: "Grand, structured and stunningly authoritative.",
    badge: "Signature"
  },
  {
    name: "Ivory Héritage",
    imageUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096213/Jujube.jpg",
    outfitUrl: "https://res.cloudinary.com/qykjs2j4/image/upload/v1791096210/JujubeOutfit.jpg",
    price: 280, originalPrice: 360, rating: 4.6, reviews: 34,
    description: "Ancient charm reimagined for the modern Saarte muse.",
    badge: "Heritage"
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    await WomenProduct.deleteMany({});
    console.log("🗑️  Cleared existing women products");

    await WomenProduct.insertMany(products);
    console.log(`🌸 Seeded ${products.length} women products successfully!`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
    process.exit(1);
  }
}

seedDB();
