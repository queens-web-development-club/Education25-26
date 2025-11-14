import { useEffect, useState } from 'react'

export default function RandomUser() {
  // Create state to store user data
  const [user, setUser] = useState(null)

  // Fetch data when component loads
  useEffect(() => {
    async function loadUser() {
      // Get data from the API
      const res = await fetch('https://randomuser.me/api/') // From the website randomuser.me
      const data = await res.json()
      // Save the first user to state
      setUser(data.results[0])
    }
    loadUser()
  }, [])

  // Show loading message while fetching
  if (!user) {
    return <p>Loading...</p>
  }

  // Display the user data
  return (
    <div>
      <img src={user.picture.medium} alt="user" />
      <h3>{user.name.first} {user.name.last}</h3>
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
    </div>
  )
}
