// Card component that accepts props
function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>This is a reusable card component!</p>
    </div>
  )
}

export default Card
