export default function ExperienceSection() {
  return (
    <section className="bg-[#2B1B12] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="restaurant"
          className="rounded-2xl sm:rounded-3xl h-64 sm:h-96 lg:h-[500px] w-full object-cover"
        />

        {/* Text */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-yellow-500">
            Luxury Dining Experience
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-7 sm:leading-8 lg:leading-9">
            Enjoy authentic Arabian hospitality in a warm and relaxing atmosphere.
            From premium mandi dishes to elegant dining spaces,
            House of Mandi delivers unforgettable moments.
          </p>

        </div>

      </div>

    </section>
  )
}