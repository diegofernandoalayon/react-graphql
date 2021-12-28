
import logo from './logo.svg'
import './App.css'
import {gql, useQuery} from '@apollo/client'
import {Persons} from './components/Persons/index'
import { PersonForm } from './components/PersonForm'
import { All_PERSONS} from './graphql/queries'

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
