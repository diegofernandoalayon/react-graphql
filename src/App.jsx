
import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
//  useEffect(() => {
//   fetch('http://localhost:4000',{
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify({ query: `
//     query {
//       allPersons{
//         name
//         phone
//         address{
//           street
//         }
//       }
//     }
//     `})
//   })
//   .then(res => res.json())
//   .then(data => console.log(data.data))
//  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>GraphQL + React!</p>
      </header>
    </div>
  )
}

export default App
