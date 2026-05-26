import { useState } from "react"

export default function Contact() {

  const whatsappNumber = "250786675051"

  const [form, setForm] = useState({
    name: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const sendWhatsApp = () => {

    if (!form.name || !form.message) {
      alert("Please fill in all fields")
      return
    }

    const text = `Hello House of Mandi 👋
Name: ${form.name}
Message: ${form.message}`

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10 sm:py-16">

      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md">

        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
          Contact Us
        </h1>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 border rounded-lg mb-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Button */}
        <button
          onClick={sendWhatsApp}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-green-700 active:scale-95 transition"
        >
          Send via WhatsApp
        </button>

        {/* Info */}
        <p className="text-center text-gray-500 mt-4 text-xs sm:text-sm">
          We reply fast on WhatsApp 📱
        </p>

      </div>
    </div>
  )
}