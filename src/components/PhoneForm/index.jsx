

import {useState} from 'react'
import { useEditNumber } from '../../persons/custom-hooks'


export const PhoneForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  // const [createPerson] = useAddPerson()
  const [editNumber] = useEditNumber()

  const handleSubmit = event => {
    event.preventDefault()
    editNumber({variables: {name, phone}})
    setName('')
    setPhone('')

  }

  return (
    <div>
      <h2>Edit phone number</h2>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <input placeholder='name' value={name} onChange={event => setName(event.target.value)} />
        <input placeholder='phone' value={phone} onChange={event => setPhone(event.target.value)} />

        <button>change of phone number</button>
      </form>
    </div>
  )

}