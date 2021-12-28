import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache({resultCaching: true}),
  link: new HttpLink ({
    uri: 'http://localhost:4000'
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
