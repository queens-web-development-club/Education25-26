// Import routing components from React Router
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    // Container for all routes in the app
    <Routes>
      {/* Wrap routes with Layout to share header/footer */}
      <Route element={<Layout />}>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        {/* About page route */}
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
