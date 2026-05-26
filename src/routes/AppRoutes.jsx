import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Menu from "../pages/Menu"
import About from "../pages/About"
import Contact from "../pages/Contact"

import Mandi from "../pages/menu/Mandi"
import Drinks from "../pages/menu/Drinks"
import Grill from "../pages/menu/Grill"
import Shawarma from "../pages/menu/Shawarma"
import Desserts from "../pages/menu/Desserts"

// (optional but recommended)
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
      404 - Page Not Found
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* MAIN PAGES */}
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* MENU CATEGORIES */}
      <Route path="/menu/mandi" element={<Mandi />} />
      <Route path="/menu/drinks" element={<Drinks />} />
      <Route path="/menu/grill" element={<Grill />} />
      <Route path="/menu/shawarma" element={<Shawarma />} />
      <Route path="/menu/desserts" element={<Desserts />} />

      {/* 404 PAGE */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}