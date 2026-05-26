export default function Hero() {

  const phone = "250786675051"

  const message =
    "Hello House of Mandi 👋 I would like to place an order."

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <section className="relative h-screen w-full">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        alt="mandi"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

        <div className="text-center text-white px-4 sm:px-6">

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            House of Mandi
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 text-gray-200">
            Experience authentic Arabian flavor, luxury dining,
            and unforgettable moments.
          </p>

          {/* Button */}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-yellow-400 transition w-full sm:w-auto"
          >
            Order via WhatsApp
          </a>

        </div>

      </div>

    </section>
  )
}