import { useState } from 'react'

// Interactive Greeting component with state
function Greeting() {
  // State to track the greeting message
  const [message, setMessage] = useState('Click the button below')

  // Function to change the message when button is clicked
  const changeMessage = () => {
    setMessage('You clicked the button!')
  }

  return (
    <div className="greeting-box">
      <h2>{message}</h2>
      <button onClick={changeMessage}>
        Click me to change the text!
      </button>
    </div>
  )
}

export default Greeting
