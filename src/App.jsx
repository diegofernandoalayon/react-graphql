
import logo from './logo.svg'
import './App.css'
import {gql, useQuery} from '@apollo/client'

const All_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`
function App() {
  const result = useQuery(All_PERSONS)
  console.log(result)
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
