export default function MenuCard({ item, onOrder }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-5 hover:shadow-lg active:scale-95 transition duration-300">

      {/* Food name */}
      <h2 className="text-lg sm:text-xl font-bold">
        {item.name}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-5 sm:leading-6">
        {item.description}
      </p>

      {/* Price */}
      <p className="mt-3 font-bold text-green-600 text-sm sm:text-base">
        {item.price} RWF
      </p>

      {/* Button */}
      <button
        onClick={() => onOrder(item)}
        className="mt-4 w-full bg-black text-white py-2 sm:py-3 rounded-lg hover:bg-gray-800 active:bg-gray-900 transition text-sm sm:text-base"
      >
        Order Now
      </button>

    </div>
  )
}