export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">

        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
          alt="restaurant"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
            About Us
          </h1>

        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto py-14 sm:py-20 lg:py-24 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">

        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
          alt="chef"
          className="rounded-2xl sm:rounded-3xl h-64 sm:h-96 lg:h-[500px] w-full object-cover shadow-xl"
        />

        <div className="text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-[#2B1B12]">
            Authentic Arabian Taste
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-7 sm:leading-8 lg:leading-9">
            House of Mandi combines traditional Arabian flavors,
            luxury dining spaces, and warm hospitality to create
            a memorable food experience for every guest.
          </p>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-7 sm:leading-8 lg:leading-9 mt-4 sm:mt-6">
            Enjoy delicious mandi, shawarma, grilled meals,
            refreshing drinks, and a relaxing atmosphere
            designed for families and friends.
          </p>

        </div>

      </section>

      {/* GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 lg:pb-24">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-14">
          Restaurant Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food"
            className="rounded-2xl sm:rounded-3xl h-60 sm:h-72 lg:h-80 w-full object-cover hover:scale-105 active:scale-95 transition"
          />

          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
            alt="restaurant tables"
            className="rounded-2xl sm:rounded-3xl h-60 sm:h-72 lg:h-80 w-full object-cover hover:scale-105 active:scale-95 transition"
          />

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="restaurant atmosphere"
            className="rounded-2xl sm:rounded-3xl h-60 sm:h-72 lg:h-80 w-full object-cover hover:scale-105 active:scale-95 transition"
          />

        </div>

      </section>

    </div>
  )
}