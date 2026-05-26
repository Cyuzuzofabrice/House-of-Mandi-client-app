const images = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
]

export default function GallerySection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white px-4 sm:px-6">

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14">
        Restaurant Gallery
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery"
            className="rounded-2xl sm:rounded-3xl h-60 sm:h-72 lg:h-80 w-full object-cover hover:scale-105 active:scale-95 transition duration-300"
          />
        ))}

      </div>

    </section>
  )
}