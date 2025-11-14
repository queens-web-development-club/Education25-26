// Import components
import Header from './components/Header'
import Card from './components/Card'
import Greeting from './components/Greeting'

// Main App component
function App() {
  return (
    <>
      {/* Header component */}
      <Header />
      
      {/* Main content */}
      <div className="container">
        <h2>Welcome to React!</h2>
        <p>This is a simple React + Vite app.</p>
        
        {/* Card component with props */}
        <Card title="Card 1" />
        <Card title="Card 2" />
        
        {/* Interactive Greeting component */}
        <Greeting />
      </div>
    </>
  )
}

export default App
