import React, { useState } from 'react'
import Card from './components/Card'
import Body from './components/Body'
import Navbar from './components/Navbar'
import WomenStore from './pages/WomenStore'
import MenStore from './pages/MenStore'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  if (currentPage === 'women') {
    return <WomenStore onBack={() => setCurrentPage('home')} />
  }

  if (currentPage === 'men') {
    return <MenStore onBack={() => setCurrentPage('home')} />
  }

  return (
    <div>

      {/* Navbar (includes Header with navigation) */}
      <Navbar onNavigate={(page) => setCurrentPage(page)} />

      {/* Hero / Body */}
      <Body onExploreHer={() => setCurrentPage('women')} onExploreHim={() => setCurrentPage('men')} />

      {/* Women's Collection */}
      <section>

        <div className="py-16 flex flex-col items-center">

          {/* Collection number */}
          <span className="text-[10px] tracking-[0.5em] uppercase text-gray-500 mb-4">
            Saarte Royale
          </span>

          {/* Heading with lines */}
          <div className="flex items-center w-full px-8 gap-6">

            <div className="h-px bg-black/20 flex-1"></div>

            <h2 className="text-3xl font-serif tracking-[0.3em] uppercase">
              Women
            </h2>

            <div className="h-px bg-black/20 flex-1"></div>

          </div>

          {/* Subtitle */}
          <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-gray-400">
            The Saarte Woman
          </p>

        </div>

        {/* Women's Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </section>


      {/* Men's Collection */}
      <section>

        <div className="py-16 flex flex-col items-center">

          {/* Collection number */}
          <span className="text-[10px] tracking-[0.5em] uppercase text-gray-500 mb-4">
            Saarte Royale
          </span>

          {/* Heading with lines */}
          <div className="flex items-center w-full px-8 gap-6">

            <div className="h-px bg-black/20 flex-1"></div>

            <h2 className="text-3xl font-serif tracking-[0.3em] uppercase">
              Men
            </h2>

            <div className="h-px bg-black/20 flex-1"></div>

          </div>

          {/* Subtitle */}
          <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-gray-400">
            The Saarte Man
          </p>

        </div>

        {/* Men's Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pl-5">

          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </section>
      <section>

        <div className="py-16 flex flex-col items-center">

          {/* Collection number */}
          <span className="text-[10px] tracking-[0.5em] uppercase text-gray-500 mb-4">
            Saarte Royale
          </span>

          {/* Heading with lines */}
          <div className="flex items-center w-full px-8 gap-6">

            <div className="h-px bg-black/20 flex-1"></div>

            <h2 className="text-3xl font-serif tracking-[0.3em] uppercase">
              Makeup
            </h2>

            <div className="h-px bg-black/20 flex-1"></div>

          </div>

          {/* Subtitle */}
          <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-gray-400">
            The Saarte Glory
          </p>

        </div>

        {/* Makeup Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </section>
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 py-16">

  {/* Shop */}
  <div>
    <h3 className="font-semibold">Saarte Collections</h3>

    <div className="mt-6 flex flex-col gap-3 text-sm">
      <button onClick={() => setCurrentPage('women')} className="text-left hover:underline">Women</button>
      <button onClick={() => setCurrentPage('men')} className="text-left hover:underline">Men</button>
      <a href="#">Accessories</a>
      <a href="#">New Arrivals</a>
      <a href="#">Collections</a>
    </div>
  </div>


  {/* Corporate Info */}
  <div>
    <h3 className="font-semibold">Corporate Info</h3>

    <div className="mt-6 flex flex-col gap-3 text-sm">
      <a href="#">About Saarte</a>
      <a href="#">Our Story</a>
      <a href="#">Sustainability</a>
      <a href="#">Careers</a>
      <a href="#">Contact</a>
    </div>
  </div>


  {/* Help */}
  <div>
    <h3 className="font-semibold">Help</h3>

    <div className="mt-6 flex flex-col gap-3 text-sm">
      <a href="#">Customer Service</a>
      <a href="#">My Account</a>
      <a href="#">Find a Store</a>
      <a href="#">Shipping & Returns</a>
      <a href="#">Privacy Policy</a>
    </div>
  </div>


  {/* About Saarte */}
  <div>
    <h3 className="font-semibold">About Saarte</h3>

    <p className="mt-6 text-sm leading-6 text-gray-600">
      Saarte is a language of fashion without borders
      bringing cultures, craftsmanship, and contemporary
      style together.
    </p>

    <a
      href="#"
      className="inline-block mt-6 text-sm underline underline-offset-4"
    >
      Discover Our Story
    </a>
  </div>

</footer>
    </div>
  )
}

export default App