import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, InMemoryCache, HttpLink, gql} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink ({
    uri: 'http://localhost:4000'
  })
})
const query = gpl`
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
client.query({query: query})
  .then(res => {
    console.log(res.data)
  })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
