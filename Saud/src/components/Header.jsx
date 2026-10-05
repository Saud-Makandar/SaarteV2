
import React, { useState, useEffect } from "react";

import {
  Menu,
  X,
  Crown,
  User,
  Heart,
  ShoppingBag,
  MessageCircle,
  Search,
} from "lucide-react";

const Header = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 h-16 w-full z-50
        transition-all duration-500
        ${
          scrolled
            ? "bg-black border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-full mx-auto h-full flex items-center justify-between px-6">

        {/* =====================================================
            LEFT — MENU
        ====================================================== */}

        <div className="flex-1 flex justify-start ">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex items-center gap-4
              text-white
              hover:text-gray-400
              transition-colors duration-300
            "
          >

            {/* Menu icon disappears when menu is open */}
            {!menuOpen && (
              <Menu
                size={22}
                strokeWidth={1.5}
              />
            )}

            <span className="hidden md:inline text-xs tracking-[0.2em] uppercase text-gray-300">
              Menu
            </span>
          </button>


          {/* =====================================================
              SIDE MENU
          ====================================================== */}

          <div
            className={`
              fixed top-0 left-0
              h-screen w-[380px]
              bg-[#0a0a0a]
              border-r border-white/10
              z-[90]

              transform
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                menuOpen
                  ? "translate-x-0"
                  : "-translate-x-full"
              }
            `}
          >

            <div className="h-full flex flex-col px-10 py-8">

              {/* =================================================
                  SIDE MENU HEADER
              ================================================== */}

              <div
                className="
                  flex items-center justify-between
                  pb-8
                  border-b border-white/10
                "
              >

                {/* Saarte Logo */}
                <div className="flex items-center gap-3">

                  <h2
                    className="
                      text-white
                      font-serif
                      text-2xl
                      tracking-[0.28em]
                      uppercase
                    "
                  >
                    Saarte
                  </h2>

                  <Crown
                    size={17}
                    strokeWidth={1.2}
                    className="text-white/80"
                  />

                </div>


                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    w-10 h-10
                    flex items-center justify-center
                    rounded-full
                    border border-white/15
                    text-white/70
                    hover:text-white
                    hover:border-white/50
                    transition-all duration-500
                  "
                >

                  <X
                    size={18}
                    strokeWidth={1.2}
                    className="
                      group-hover:rotate-90
                      transition-transform
                      duration-500
                    "
                  />

                </button>

              </div>


              {/* =================================================
                  MENU NAVIGATION
              ================================================== */}

              <nav className="flex flex-col mt-14">

                {/* Small Heading */}
                <span
                  className="
                    text-[10px]
                    tracking-[0.4em]
                    uppercase
                    text-white/30
                    mb-6
                  "
                >
                  Explore Saarte
                </span>


                {/* HOME */}
                <a
                  href="#"
                  className="
                    group
                    flex items-center justify-between
                    py-4
                    border-b border-white/10
                    font-serif
                    text-2xl
                    text-white/90
                    hover:text-white
                    transition-all duration-500
                  "
                >
                  <span>Home</span>

                </a>


                {/* WOMEN */}
                <button
                  onClick={() => { onNavigate('women'); setMenuOpen(false); }}
                  className="
                    group
                    w-full
                    flex items-center justify-between
                    py-4
                    border-b border-white/10
                    font-serif
                    text-2xl
                    text-white/90
                    hover:text-white
                    transition-all duration-500
                    text-left
                    bg-transparent
                    cursor-pointer
                  "
                >
                  <span>Women</span>

                </button>


                {/* MEN */}
                <button
                  onClick={() => { onNavigate('men'); setMenuOpen(false); }}
                  className="
                    group
                    w-full
                    flex items-center justify-between
                    py-4
                    border-b border-white/10
                    font-serif
                    text-2xl
                    text-white/90
                    hover:text-white
                    transition-all duration-500
                    text-left
                    bg-transparent
                    cursor-pointer
                  "
                >
                  <span>Men</span>

                </button>


                {/* ACCESSORIES */}
                <a
                  href="#"
                  className="
                    group
                    flex items-center justify-between
                    py-4
                    border-b border-white/10
                    font-serif
                    text-2xl
                    text-white/90
                    hover:text-white
                    transition-all duration-500
                  "
                >
                  <span>Accessories</span>
                </a>


                {/* COLLECTIONS */}
                <a
                  href="#"
                  className="
                    group
                    flex items-center justify-between
                    py-4
                    border-b border-white/10
                    font-serif
                    text-2xl
                    text-white/90
                    hover:text-white
                    transition-all duration-500
                  "
                >
                  <span>Collections</span>

                </a>

              </nav>


              {/* =================================================
                  BOTTOM BRAND MESSAGE
              ================================================== */}

              <div
                className="
                  mt-auto
                  pt-8
                  border-t border-white/10
                "
              >

                <p
                  className="
                    text-[10px]
                    tracking-[0.35em]
                    uppercase
                    text-white/30
                    mb-4
                  "
                >
                  The Language of Fashion
                </p>

                <p
                  className="
                    font-serif
                    italic
                    text-white/50
                    text-sm
                    leading-relaxed
                  "
                >
                  Fashion has no borders.
                  <br />
                  Saarte speaks its language.
                </p>

              </div>

            </div>
          </div>


          {/* =====================================================
              DARK OVERLAY
          ====================================================== */}

          <div
            onClick={() => setMenuOpen(false)}
            className={`
              fixed
              inset-0
              bg-black/60
              backdrop-blur-[2px]
              z-[80]

              transition-all
              duration-700

              ${
                menuOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }
            `}
          />

        </div>


        {/* =====================================================
            CENTER — SAARTE LOGO
        ====================================================== */}

        <div className="flex-1 flex justify-center">

          <div className="flex items-center gap-2">

            <h1
              className="
                font-serif
                text-2xl
                md:text-3xl
                tracking-[0.3em]
                text-white
                uppercase
              "
            >
              Saarte
            </h1>

            <Crown
              size={20}
              strokeWidth={1.2}
              className="text-white"
            />

          </div>

        </div>


        {/* =====================================================
            RIGHT — ACTIONS
        ====================================================== */}

        <div
          className="
            flex-1
            flex
            justify-end
            items-center
            gap-6
          "
        >

          {/* SEARCH */}
          <button
            className="
              text-white/80
              hover:text-white
              transition-colors duration-300
            "
          >
            <Search
              size={20}
              strokeWidth={1.4}
            />
          </button>


          {/* LOGIN */}
          <button
            className="
              hidden sm:flex
              items-center gap-2
              text-gray-300
              hover:text-white
              transition-colors duration-300
            "
          >

            <User
              size={20}
              strokeWidth={1.4}
            />

            <span
              className="
                hidden lg:inline
                text-xs
                tracking-widest
                uppercase
              "
            >
              Login
            </span>

          </button>


          {/* WISHLIST */}
          <button
            className="
              text-gray-300
              hover:text-white
              transition-colors duration-300
            "
          >
            <Heart
              size={20}
              strokeWidth={1.4}
            />
          </button>


          {/* SHOPPING BAG */}
          <button
            className="
              relative
              text-gray-300
              hover:text-white
              transition-colors duration-300
            "
          >

            <ShoppingBag
              size={20}
              strokeWidth={1.4}
            />

            <span
              className="
                absolute
                -top-2
                -right-2
                bg-white
                text-black
                text-[9px]
                font-bold
                w-4
                h-4
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              0
            </span>

          </button>


          {/* CHATBOT */}
          <button
            className="
              text-gray-300
              hover:text-white
              transition-colors duration-300
            "
          >
            <MessageCircle
              size={20}
              strokeWidth={1.4}
            />
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;
