import {gql, useMutation} from '@apollo/client'
import {useState} from 'react'
import { All_PERSONS } from '../../App'

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

  const [ createPerson ] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: All_PERSONS}]
  })

  const handleSubmit = event => {
    event.preventDefault()
    createPerson({variables: {name, phone, street, city}})
    setName('')
    setPhone('')
    setStreet('')
    setCity('')
  }

  return (
    <div>
      <h2>Create new person</h2>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <input placeholder='name' value={name} onChange={event => setName(event.target.value)} />
        <input placeholder='phone' value={phone} onChange={event => setPhone(event.target.value)} />
        <input placeholder='street' value={street} onChange={event => setStreet(event.target.value)} />
        <input placeholder='city' value={city} onChange={event => setCity(event.target.value)} />
        <button>Guardar</button>
      </form>
    </div>
  )

}