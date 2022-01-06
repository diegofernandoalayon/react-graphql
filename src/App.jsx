import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Persons } from './components/Persons/index'
import { PersonForm } from './components/PersonForm'
import { usePersons } from './persons/custom-hooks'
import { Notify } from './components/Notify'
import { PhoneForm } from './components/PhoneForm'
import { LoginForm } from './components/LoginForm'
import { useApolloClient } from '@apollo/client'
function App () {
  const { data, error, loading } = usePersons()
  const [errorMessage, setErrorMessage] = useState(null)
  const [token, setToken] = useState(() => window.localStorage.getItem('phonenumbers-user-token'))
  const client = useApolloClient()
  if (error) return <span style='color: red'>{error}</span>

  const notifyError = message => {
    setErrorMessage(message)
    setTimeout(() => setErrorMessage(null), 5000)
  }
  const logout = () => {
    setToken(null)
    window.localStorage.clear()
    client.resetStore()
  }
  return (
    <div className='App'>
      <Notify errorMessage={errorMessage} />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <PersonForm notifyError={notifyError} />
        {token
          ? <button onClick={logout}>cerrar sesion</button>
          : <LoginForm notifyError={notifyError} setToken={setToken} />}

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
