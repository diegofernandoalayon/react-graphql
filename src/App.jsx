import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Persons } from './components/Persons/index'
import { PersonForm } from './components/PersonForm'
import { usePersons } from './persons/custom-hooks'
import { Notify } from './components/Notify'
import { PhoneForm } from './components/PhoneForm'
function App () {
  const { data, error, loading } = usePersons()
  const [errorMessage, setErrorMessage] = useState(null)
  // console.log(data)
  if (error) return <span style='color: red'>{error}</span>
  const notifyError = message => {
    setErrorMessage(message)
    setTimeout(() => setErrorMessage(null), 5000)
  }
  return (
    <div className='App'>
      <Notify errorMessage={errorMessage} />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <PersonForm notifyError={notifyError} />
        <PhoneForm />
        {/* <PhoneForm /> */}
        {loading
          ? <p>Loading...</p>
          : <Persons persons={data.allPersons} />}

      </header>
    </div>
  )
}

export default App
