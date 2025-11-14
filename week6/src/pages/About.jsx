// About page component
export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        About This Project
      </h1>
      {/* Description */}
      <p className="text-lg text-gray-700 mb-4">
        Learning about React Router and Tailwind CSS!
      </p>
      <div className="space-y-4">
        {/* Info box with list of concepts */}
        <div className="bg-green-100 p-4 rounded">
          <h2 className="font-bold text-green-900 mb-2">What You Learned:</h2>
          <ul className="list-disc list-inside text-green-800 space-y-1">
            <li>Setting up React Router with BrowserRouter</li>
            <li>Creating routes with Routes and Route components</li>
            <li>Using Layout component with Outlet</li>
            <li>Styling with Tailwind CSS utility classes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
