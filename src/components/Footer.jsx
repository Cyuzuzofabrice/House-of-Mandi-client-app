export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 sm:py-12 px-4 sm:px-6 mt-16 sm:mt-20">

      <div className="max-w-6xl mx-auto text-center">

        {/* Restaurant Name */}
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-3 sm:mb-4">
          House of Mandi
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto">
          Authentic Arabian Dining Experience in Kigali
        </p>

        {/* Location */}
        <p className="text-gray-300 text-sm sm:text-lg">
           KN 81 St, Kigali, Rwanda
        </p>

        {/* Opening Hours */}
        <p className="text-gray-300 text-sm sm:text-lg mt-2">
          Open Daily: 09:00 AM — 11:30 PM
        </p>

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8">
          © 2026 House of Mandi. All rights reserved.
        </p>

      </div>

    </footer>
  )
}