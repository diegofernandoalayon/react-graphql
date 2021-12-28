import {gql, useMutation} from '@apollo/client'
import {useState} from 'react'

const CREATE_PERSON = gql`

  mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String){
    addPerson(
      name: $name,
      phone: $phone,
      street: $street,
      city: $city

    ){
      name
      phone
      address {
        city
        street
      }
    }
  }
`

export const PersonForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    setName('')
    setPhone('')
    setStreet('')
    setCity('')
  }

  return (
    <div>
      <h2>Create new person</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='name' value={name} onChange={event => setName(event.target.value)} />
        <input placeholder='phone' value={name} onChange={event => setPhone(event.target.value)} />
        <input placeholder='street' value={name} onChange={event => setStreet(event.target.value)} />
        <input placeholder='city' value={name} onChange={event => setCity(event.target.value)} />
      </form>
    </div>
  )

}