// Import Outlet to render child routes and Link for navigation
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation header */}
      <header className="bg-gray-900 text-white p-4 flex gap-6">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400 transition">
          About
        </Link>
      </header>
      
      {/* Main content area */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      
    </div>
  )
}
