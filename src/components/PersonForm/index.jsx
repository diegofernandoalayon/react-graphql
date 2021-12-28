
import {useState} from 'react'
import { useAddPerson } from '../../persons/custom-hooks'


export const PersonForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  const [createPerson] = useAddPerson()

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