import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, HttpLink, gql} from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink ({
    uri: 'http://localhost:4000'
  })
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
