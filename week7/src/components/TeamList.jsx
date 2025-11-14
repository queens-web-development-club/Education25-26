// Import the local JSON file
import teamsData from '../data/teams.json'

export default function TeamList() {
  return (
    <div>
      {/* Loop through each team and display it */}
      {teamsData.teams.map((team) => (
        <div key={team.id} className="team-card">
          <h3>{team.name}</h3>
          <p>Co-Chairs: {team.coChairs}</p>
          <p>Directors: {team.directors}</p>
          <p>Executives: {team.executives}</p>
        </div>
      ))}
    </div>
  )
}
