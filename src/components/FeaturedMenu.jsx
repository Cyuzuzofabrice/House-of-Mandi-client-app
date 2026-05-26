const foods = [
  {
    id: 1,
    name: "Chicken Mandi",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },
  {
    id: 2,
    name: "Beef Mandi",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
  },
  {
    id: 3,
    name: "Shawarma",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
  },
]

export default function FeaturedMenu() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gray-100 px-4 sm:px-6">

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14">
        Featured Dishes
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">

        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:scale-105 active:scale-95 transition duration-300"
          >

            {/* Image */}
            <img
              src={food.image}
              alt={food.name}
              className="h-52 sm:h-64 lg:h-72 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 sm:p-6 text-center">

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                {food.name}
              </h3>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}