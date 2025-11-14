// Home page component
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Main heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Routing, Components and Styling in React
      </h1>
      {/* Description text */}
      <p className="text-lg text-gray-700 mb-4">
        This is the home page. You're learning React Router and Tailwind CSS.
      </p>
      {/* Info box with blue styling */}
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-blue-800">
          Try navigating to the About page using the link in the header above.
        </p>
      </div>
    </div>
  )
}
