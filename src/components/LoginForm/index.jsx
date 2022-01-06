import { useEffect, useState } from 'react'
import { useLogin } from '../../persons/custom-hooks'

// import { useMutation } from '@apollo/client'
// import { LOGIN } from '../../persons/graphql-mutations'

export const LoginForm = ({ notifyError, setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [login, result] = useLogin({ notifyError })

  useEffect(() => {
    if (result.data) {
      const { value: token } = result.data.login
      setToken(token)
      window.localStorage.setItem('phonenumbers-user-token', token)
    }
  }, [result.data])

  const handleSubmit = event => {
    event.preventDefault()
    login({ variables: { username, password } })
    setUsername('')
    setPassword('')
  }
  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          username
          <input value={username} onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
          password
          <input value={password} type='password' onChange={({ target }) => setPassword(target.value)} />
        </div>
        <div>
          <button>enviar</button>
        </div>

      </form>
    </div>
  )
}
