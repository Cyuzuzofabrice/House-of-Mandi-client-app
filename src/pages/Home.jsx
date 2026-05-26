import Hero from "../components/Hero"
import FeaturedMenu from "../components/FeaturedMenu"
import ExperienceSection from "../components/ExperienceSection"
import GallerySection from "../components/GallerySection"

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* FEATURED MENU */}
      <div className="py-6 sm:py-10">
        <FeaturedMenu />
      </div>

      {/* EXPERIENCE */}
      <div className="py-6 sm:py-10">
        <ExperienceSection />
      </div>

      {/* GALLERY */}
      <div className="py-6 sm:py-10">
        <GallerySection />
      </div>

    </div>
  )
}