import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-black text-white px-6 sm:px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-xl sm:text-2xl font-bold text-yellow-500">
        House of Mandi 
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/menu">Menu</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </div>
      )}

    </nav>
  )
}