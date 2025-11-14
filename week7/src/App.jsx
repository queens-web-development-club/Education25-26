// Import the components we'll use
import RandomUser from './components/RandomUser'
import TeamList from './components/TeamList'

function App() {
  return (
    <div className="container">
      <h1>Working with APIs</h1>

      {/* Section showing data from an external API */}
      <section className="section">
        <h2>Random User from API (refresh the page)</h2>
        <RandomUser />
      </section>

      {/* Section showing data from a local JSON file */}
      <section>
        <h2>QWeb Team Structure</h2>
        <TeamList />
      </section>
    </div>
  )
}

export default App
