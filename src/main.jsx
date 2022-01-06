import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client'

const getAuth = () => {
  const token = window.localStorage.getItem('phonenumbers-user-token')
  return token ? `bearer ${token}` : null
}

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
    headers: {
      authorization: getAuth()
    }

  })

})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
