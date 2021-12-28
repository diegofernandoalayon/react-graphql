
import logo from './logo.svg'
import './App.css'
import {gql, useQuery} from '@apollo/client'
import {Persons} from './components/Persons/index'
import { PersonForm } from './components/PersonForm'

export const All_PERSONS = gql`
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
  const {data, error, loading} = useQuery(All_PERSONS)
  // console.log(data)
  if(error) return <span style='color: red'>{error}</span>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PersonForm />
        {loading
          ? <p>Loading...</p>
          : <Persons persons={data.allPersons} />
        
        }
        
      </header>
    </div>
  )
}

export default App
