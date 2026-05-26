export default function WhatsAppButton() {

  const phone = "250786675051"

  const message =
    "Hello House of Mandi 👋 I would like to place an order."

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-2xl z-50 flex items-center gap-2 hover:scale-110 active:scale-95 transition"
    >

      {/* WhatsApp Icon (simple) */}
      <span className="text-lg sm:text-xl">💬</span>

      {/* Text responsive */}
      <span className="text-sm sm:text-base font-semibold">
        Order
      </span>

    </a>
  )
}