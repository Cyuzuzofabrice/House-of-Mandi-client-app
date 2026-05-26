import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AppRoutes from "../routes/AppRoutes"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1">
        <AppRoutes />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}