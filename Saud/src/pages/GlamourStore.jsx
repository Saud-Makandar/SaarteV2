import React, { useEffect, useRef, useState } from 'react'
import { Heart, Eye, ShoppingBag, ArrowLeft, ChevronDown, Search, SlidersHorizontal } from 'lucide-react'
import { useShop } from '../context/ShopContext'

const MAKEUP_PRODUCTS = [
  { _id: '1',  name: 'Pink Beauty Blender',        category: 'Tools', description: 'Ultra-soft pink sponge applicator for a flawless, airbrushed finish every time.',                    price: 12.99, originalPrice: 17.99, rating: 4.8, reviews: 312, badge: 'Bestseller', imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095261/BeautyBlender1.jpg' },
  { _id: '2',  name: 'Black Mascara',              category: 'Eyes',  description: 'Volumising, lengthening formula for dramatic, clump-free lashes.',                                    price: 14.99, originalPrice: null,  rating: 4.6, reviews: 228, badge: 'New',        imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095258/Mascara1.jpg' },
  { _id: '3',  name: 'Lip Gloss',                  category: 'Lips',  description: 'High-shine, non-sticky gloss that delivers plump, glossy lips all day.',                              price: 9.99,  originalPrice: 13.99, rating: 4.7, reviews: 189, badge: 'Bestseller', imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095247/LipGloss5.jpg' },
  { _id: '4',  name: 'Brown Lip Gloss',            category: 'Lips',  description: 'Rich mocha-brown gloss that complements every skin tone beautifully.',                                price: 9.99,  originalPrice: null,  rating: 4.5, reviews: 143, badge: 'New',        imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095248/LipGloss4.jpg' },
  { _id: '5',  name: 'Wavy Lip Gloss',             category: 'Lips',  description: 'Unique wavy applicator for precise, dimensional colour in one swipe.',                                price: 10.99, originalPrice: null,  rating: 4.4, reviews: 97,  badge: 'Limited',    imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095255/LipGloss2.jpg' },
  { _id: '6',  name: 'Mascara',                    category: 'Eyes',  description: 'Buildable, smudge-proof formula for defined, full lashes from root to tip.',                          price: 13.99, originalPrice: 18.99, rating: 4.6, reviews: 204, badge: 'Bestseller', imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095256/Mascara3.jpg' },
  { _id: '7',  name: 'Bronzer',                    category: 'Face',  description: 'Sun-kissed radiance in a finely milled powder — sculpt and glow effortlessly.',                      price: 18.99, originalPrice: 24.99, rating: 4.8, reviews: 276, badge: 'Bestseller', imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095246/Bronzer3.jpg' },
  { _id: '8',  name: 'Lipstick',                   category: 'Lips',  description: 'Creamy, long-lasting formula in a timeless shade for the modern woman.',                              price: 15.99, originalPrice: null,  rating: 4.7, reviews: 341, badge: 'Icon',       imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095253/Lipstick1.jpg' },
  { _id: '9',  name: 'Lip Gloss Pro',              category: 'Lips',  description: 'Professional-grade formula with a mirror finish and conditioning vitamin-E blend.',                   price: 11.99, originalPrice: null,  rating: 4.5, reviews: 118, badge: 'Premium',    imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095254/LipGloss3.jpg' },
  { _id: '10', name: 'Pink Lipstick',              category: 'Lips',  description: 'Vivid bubblegum-pink pigment with a satin finish that lasts 10 hours.',                              price: 15.99, originalPrice: 19.99, rating: 4.8, reviews: 389, badge: 'Bestseller', imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095251/Lipstick3.jpg' },
  { _id: '11', name: 'Bronzer Classic',            category: 'Face',  description: 'Classic warm-tan bronzer for a natural, healthy glow on any complexion.',                            price: 17.99, originalPrice: null,  rating: 4.6, reviews: 162, badge: 'New',        imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095249/Bronzer1.jpg' },
  { _id: '12', name: 'Burgundy Lip Gloss',         category: 'Lips',  description: 'Deep, wine-tinted gloss for an effortlessly sultry, date-night look.',                               price: 10.99, originalPrice: null,  rating: 4.7, reviews: 221, badge: 'Exclusive',  imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095256/LipGloss1.jpg' },
  { _id: '13', name: 'Brown Lipstick',             category: 'Lips',  description: 'Earthy chocolate-brown shade with a velvet matte finish for all-day wear.',                          price: 15.99, originalPrice: 20.99, rating: 4.5, reviews: 177, badge: 'Signature',  imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095247/Lipstick4.jpg' },
  { _id: '14', name: 'Silver Gua Sha',             category: 'Tools', description: 'Premium silver-tone facial roller for lymphatic drainage and de-puffing.',                           price: 24.99, originalPrice: 34.99, rating: 4.9, reviews: 408, badge: 'Premium',    imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095262/GuaSha2.jpg' },
  { _id: '15', name: 'Golden Black Eye Curler',    category: 'Tools', description: 'Precision eyelash curler with gold-black finish for a perfectly lifted curl.',                       price: 19.99, originalPrice: null,  rating: 4.7, reviews: 256, badge: 'Exclusive',  imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095259/EyelashCurler1.jpg' },
  { _id: '16', name: 'Royale Mascara',             category: 'Eyes',  description: 'Luxe fibre-infused mascara for spectacular length and jet-black intensity.',                         price: 19.99, originalPrice: 26.99, rating: 4.9, reviews: 514, badge: 'Icon',       imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095256/Mascara2.jpg' },
  { _id: '17', name: 'Pink Highlighter',           category: 'Face',  description: 'Finely milled pink pearl pigment for a blinding, lit-from-within highlight.',                       price: 16.99, originalPrice: null,  rating: 4.8, reviews: 293, badge: 'Bestseller', imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095252/Highlighter1.jpg' },
  { _id: '18', name: 'Black Beauty Blender',       category: 'Tools', description: 'Sleek matte-black sponge for seamless blending and a second-skin finish.',                          price: 12.99, originalPrice: null,  rating: 4.6, reviews: 187, badge: 'New',        imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095260/BeautyBlender2.jpg' },
  { _id: '19', name: 'Bronzer Glow',               category: 'Face',  description: 'Shimmer-infused bronzer that delivers luminous warm-bronze radiance.',                               price: 18.99, originalPrice: 23.99, rating: 4.7, reviews: 214, badge: 'Limited',    imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095246/Bronzer2.jpg' },
  { _id: '20', name: 'Lipstick ProMax',            category: 'Lips',  description: 'High-definition pigment formula — 12-hour comfort wear with zero feathering.',                      price: 17.99, originalPrice: 22.99, rating: 4.8, reviews: 367, badge: 'Premium',    imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095253/Lipstick2.jpg' },
  { _id: '21', name: 'Liquid Blush',               category: 'Face',  description: 'Weightless serum-blush that melts into skin for a natural flush of colour.',                        price: 14.99, originalPrice: null,  rating: 4.8, reviews: 429, badge: 'Bestseller', imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095251/LiquidBlush1.jpg' },
  { _id: '22', name: 'Lip Tint',                   category: 'Lips',  description: 'Sheer, buildable tint that stains lips with a fresh, just-bitten flush.',                           price: 11.99, originalPrice: null,  rating: 4.5, reviews: 134, badge: 'New',        imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095249/LipTint2.jpg' },
  { _id: '23', name: 'Pearl Gua Sha',              category: 'Tools', description: 'Iridescent pearl-finish gua sha for facial sculpting and circulation boost.',                       price: 27.99, originalPrice: 39.99, rating: 4.9, reviews: 483, badge: 'Exclusive',  imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095262/GuaSha1.jpg' },
  { _id: '24', name: 'Onion Beauty Blender',       category: 'Tools', description: 'Unique onion-shaped sponge for hard-to-reach contour and under-eye application.',                   price: 13.99, originalPrice: null,  rating: 4.4, reviews: 89,  badge: 'Limited',    imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095260/BeautyBlender3.jpg' },
  { _id: '25', name: 'Pink Gold Eye Curler',       category: 'Tools', description: 'Rose-gold eyelash curler with silicone pad for gentle, long-lasting curl.',                         price: 18.99, originalPrice: 24.99, rating: 4.7, reviews: 203, badge: 'Signature',  imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095258/EyelashCurler3.jpg' },
  { _id: '26', name: 'Saarte Special Primer',      category: 'Face',  description: 'Exclusive pore-minimising primer that creates a flawless canvas for all-day makeup.',               price: 21.99, originalPrice: 29.99, rating: 4.9, reviews: 552, badge: 'Icon',       imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095252/Primer1.jpg' },
  { _id: '27', name: 'Star Lip Tint',              category: 'Lips',  description: 'Glitter-infused tint with a stardust shimmer for a magical, luminous pout.',                        price: 12.99, originalPrice: null,  rating: 4.6, reviews: 176, badge: 'Limited',    imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095250/LipTint1.jpg' },
  { _id: '28', name: 'Bronzer 4',                  category: 'Face',  description: 'Deep terracotta bronzer — bold, rich pigment for a sun-drenched sculpted look.',                    price: 19.99, originalPrice: 25.99, rating: 4.7, reviews: 241, badge: 'Signature',  imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095244/Bronzer4.jpg' },
  { _id: '29', name: 'Saarte Ultra ProMax Primer', category: 'Face',  description: 'Next-gen blurring primer — 24-hour hold, oil-control, and skin-barrier care.',                      price: 27.99, originalPrice: 36.99, rating: 5.0, reviews: 618, badge: 'Premium',    imageUrl: 'https://res.cloudinary.com/qykjs2j4/image/upload/v1791095244/Primer2.jpg' },
]

const BADGE_COLORS = {
  New:        'bg-black text-white',
  Bestseller: 'bg-[#b8860b] text-white',
  Limited:    'bg-[#1a1a1a] text-white border border-white/10',
  Icon:       'bg-black text-white',
  Premium:    'bg-[#3d3d3d] text-white',
  Exclusive:  'bg-black text-white border border-white/20',
  Signature:  'bg-[#1b1b1b] text-white',
}

const stars = (r) => {
  const f = Math.floor(r); const h = r % 1 >= 0.5
  return '★'.repeat(f) + (h ? '½' : '') + '☆'.repeat(5 - f - (h ? 1 : 0))
}

// ── GlamourCard ───────────────────────────────────────────────────────────────
const GlamourCard = ({ product }) => {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const { addToCart, toggleWishlist, isInWishlist } = useShop()

  const prodId = product.id || product._id || product.name
  const isWishlisted = isInWishlist(prodId)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (cardRef.current) obs.observe(cardRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`bg-white overflow-hidden transition-all duration-700 ease-out hover:z-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#f5f0f3]" style={{ aspectRatio: '4/5' }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${hovered ? 'scale-[1.06]' : 'scale-100'}`}
        />

        {product.badge && (
          <span className={`absolute top-3 left-3 z-10 text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 ${BADGE_COLORS[product.badge] || 'bg-black text-white'}`}>
            {product.badge}
          </span>
        )}

        <button
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
          onClick={() => toggleWishlist(product)}
          title={isWishlisted ? "Remove from favourites" : "Save to favourites"}
        >
          <Heart size={18} fill={isWishlisted ? '#b0436e' : 'none'} color={isWishlisted ? '#b0436e' : '#aaa'} />
        </button>

        <div className={`absolute bottom-3 left-3 right-3 z-10 flex gap-2 transition-all duration-300 ease-out ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-black hover:bg-[#b8860b] text-white text-[10px] tracking-[0.2em] uppercase py-3 transition-colors duration-200 cursor-pointer font-medium"
          >
            <ShoppingBag size={13} /><span>Add to Bag</span>
          </button>
          <button className="w-11 h-11 flex items-center justify-center bg-black/75 hover:bg-black backdrop-blur-sm transition-colors duration-200 cursor-pointer">
            <Eye size={16} color="white" />
          </button>
        </div>
      </div>

      <div className="px-4 pt-4 pb-5 border-b border-black/[0.04]">
        <span className="text-[9px] tracking-[0.35em] uppercase text-[#bbb]">Saarte Glamour · {product.category}</span>
        <h3 className="font-serif text-[17px] font-normal text-black mt-1 mb-1.5 tracking-[0.05em]">{product.name}</h3>
        <p className="text-[11px] text-[#888] leading-relaxed line-clamp-2 mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-black">${product.price}</span>
            {product.originalPrice && <span className="text-[12px] text-[#bbb] line-through">${product.originalPrice}</span>}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-[#b8860b] tracking-[-0.05em]">{stars(product.rating)}</span>
            <span className="text-[10px] text-[#bbb]">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── GlamourStore ──────────────────────────────────────────────────────────────
const GlamourStore = ({ onBack }) => {
  const [searchQuery,         setSearchQuery]         = useState('')
  const [sortBy,              setSortBy]              = useState('default')
  const [filterOpen,          setFilterOpen]          = useState(false)
  const [selectedCategories,  setSelectedCategories]  = useState([])
  const [selectedBadges,      setSelectedBadges]      = useState([])
  const { openWishlist, wishlistCount, openCart, cartCount } = useShop()

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])

  const allCategories = [...new Set(MAKEUP_PRODUCTS.map(p => p.category))]
  const allBadges     = [...new Set(MAKEUP_PRODUCTS.map(p => p.badge).filter(Boolean))]

  const filteredProducts = MAKEUP_PRODUCTS
    .filter(p => {
      const q = searchQuery.toLowerCase()
      return (
        (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) &&
        (selectedCategories.length === 0 || selectedCategories.includes(p.category)) &&
        (selectedBadges.length     === 0 || selectedBadges.includes(p.badge))
      )
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc')  return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating')     return b.rating - a.rating
      if (sortBy === 'name')       return a.name.localeCompare(b.name)
      return 0
    })

  const toggleCat   = c => setSelectedCategories(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c])
  const toggleBadge = b => setSelectedBadges(p     => p.includes(b) ? p.filter(x => x !== b) : [...p, b])
  const clearAll    = () => { setSelectedCategories([]); setSelectedBadges([]) }
  const activeCount = selectedCategories.length + selectedBadges.length

  return (
    <div className="min-h-screen bg-[#faf9f7]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Hero */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: '540px', background: 'linear-gradient(135deg, #0a0508 0%, #1a0d14 50%, #100a1a 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(220,130,160,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 70% at 80% 40%, rgba(200,160,80,0.08) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="relative z-10 text-center px-6 w-full max-w-3xl">
          <button
            className="inline-flex items-center gap-2 text-white/40 text-[11px] tracking-[0.2em] uppercase border border-white/[0.08] bg-transparent hover:text-white hover:border-white/25 hover:bg-white/[0.04] cursor-pointer mb-12 px-5 py-2.5 transition-all duration-300"
            onClick={onBack}
          >
            <ArrowLeft size={16} /><span>Back to Home</span>
          </button>

          <span className="block text-[10px] tracking-[0.55em] uppercase text-white/25 mb-5">Saarte Glamour</span>
          <h1 className="font-serif font-light text-white tracking-[0.15em] uppercase leading-none mb-5" style={{ fontSize: 'clamp(2.8rem, 7.5vw, 5rem)' }}>
            Beauty &amp; Glamour
          </h1>
          <p className="text-[13px] text-white/35 max-w-[480px] mx-auto mb-8 leading-loose tracking-[0.02em]">
            A curated universe of beauty — luxury makeup, precision tools, and skincare essentials for your glamour ritual.
          </p>
          <div className="flex items-center gap-4 mx-auto mb-6 max-w-[180px]">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/25 text-[10px]">◆</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <span className="text-[10px] tracking-[0.35em] uppercase text-white/20">{MAKEUP_PRODUCTS.length} Exclusive Pieces</span>
        </div>
      </div>

      {/* Controls */}
      <div className="sticky top-0 z-[100] bg-[rgba(250,249,247,0.97)] backdrop-blur-xl border-b border-black/[0.07] shadow-[0_1px_24px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4 px-10 py-4 flex-wrap">

          <div className="relative flex-1 min-w-[200px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none" />
            <input
              type="text" placeholder="Search the collection..."
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 border border-black/[0.09] bg-white text-[12px] tracking-[0.03em] text-black outline-none focus:border-black transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>

          <button
            className={`flex items-center gap-2 px-4 py-2.5 border text-[11px] tracking-[0.12em] uppercase cursor-pointer transition-all duration-200 ${filterOpen ? 'bg-black text-white border-black' : 'border-black/[0.09] bg-white hover:bg-black hover:text-white hover:border-black'}`}
            onClick={() => setFilterOpen(f => !f)}
          >
            <SlidersHorizontal size={14} /><span>Filter</span>
            {activeCount > 0 && <span className="bg-white text-black text-[9px] w-[17px] h-[17px] rounded-full flex items-center justify-center font-bold">{activeCount}</span>}
          </button>

          <div className="relative">
            <select
              className="appearance-none pl-3.5 pr-8 py-2.5 border border-black/[0.09] bg-white text-[11px] tracking-[0.05em] cursor-pointer outline-none text-black focus:border-black transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
              value={sortBy} onChange={e => setSortBy(e.target.value)}
            >
              <option value="default">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="name">Name A–Z</option>
            </select>
            <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#999]" />
          </div>

          {/* Quick Wishlist & Bag Access */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={openWishlist}
              className="relative p-2.5 bg-white border border-black/[0.09] hover:bg-black hover:text-white transition-colors cursor-pointer"
              title="Saved Favourites"
            >
              <Heart size={14} className={wishlistCount > 0 ? "fill-[#b0436e] text-[#b0436e]" : ""} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#b0436e] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={openCart}
              className="relative px-3 py-2 bg-black text-white hover:bg-[#b8860b] transition-colors cursor-pointer flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-medium"
              title="Shopping Bag"
            >
              <ShoppingBag size={13} />
              <span>Bag ({cartCount})</span>
            </button>
          </div>

          <span className="text-[10px] text-[#bbb] tracking-[0.2em] uppercase whitespace-nowrap">{filteredProducts.length} pieces</span>
        </div>

        {filterOpen && (
          <div className="px-10 py-4 border-t border-black/[0.05] bg-[#f5f4f2]">
            <div className="flex items-start gap-6 flex-wrap mb-3">
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#999] pt-1.5 shrink-0">Category</span>
              <div className="flex gap-2 flex-wrap">
                {allCategories.map(cat => (
                  <button key={cat} onClick={() => toggleCat(cat)}
                    className={`px-3.5 py-1.5 border text-[10px] tracking-[0.1em] uppercase cursor-pointer transition-all duration-200 ${selectedCategories.includes(cat) ? 'bg-black text-white border-black' : 'border-black/[0.12] bg-white hover:bg-black hover:text-white hover:border-black'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-6 flex-wrap">
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#999] pt-1.5 shrink-0">Tag</span>
              <div className="flex gap-2 flex-wrap">
                {allBadges.map(badge => (
                  <button key={badge} onClick={() => toggleBadge(badge)}
                    className={`px-3.5 py-1.5 border text-[10px] tracking-[0.1em] uppercase cursor-pointer transition-all duration-200 ${selectedBadges.includes(badge) ? 'bg-black text-white border-black' : 'border-black/[0.12] bg-white hover:bg-black hover:text-white hover:border-black'}`}>
                    {badge}
                  </button>
                ))}
                {activeCount > 0 && (
                  <button onClick={clearAll}
                    className="px-3.5 py-1.5 text-[10px] tracking-[0.1em] uppercase cursor-pointer border border-black/30 text-black/50 bg-transparent hover:border-black hover:text-black transition-all duration-200">
                    Clear all
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="px-10 py-16 pb-24 max-w-[1440px] mx-auto">
        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-5 py-24 text-center">
            <p className="text-[12px] text-[#999] tracking-[0.05em]">No pieces match your search.</p>
            <button onClick={() => { setSearchQuery(''); clearAll() }}
              className="px-8 py-3 bg-black hover:bg-[#1a1a1a] text-white text-[10px] tracking-[0.25em] uppercase cursor-pointer transition-colors duration-200">
              Clear Filters
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0.5">
          {filteredProducts.map(p => <GlamourCard key={p._id} product={p} />)}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white/25 text-center py-5 text-[10px] tracking-[0.3em] uppercase border-t border-white/5">
        <span>◆ Saarte Glamour · Beauty Collection · Crafted with Intention ◆</span>
      </div>
    </div>
  )
}

export default GlamourStore
