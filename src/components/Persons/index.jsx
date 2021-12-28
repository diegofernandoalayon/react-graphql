import {gql, useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    
    findPerson(name: $nameToSearch){
      name
      phone
      id
      address{
        street
        city
      }
    }
  }
`

export const Persons = ({persons}) => {
  const [getPerson, result] = useLazyQuery(FIND_PERSON)
  const [person, setPerson] = useState(null)
  
  const showPerson = name => {
 
    if(result.data !== null){
    
      if(result.data?.findPerson?.name === name){
        setPerson(result.data.findPerson)
        return 0
      }
    }
      getPerson({ variables: { nameToSearch: name }})
    
  }
  console.log(person)

  useEffect(() => {
    console.log('el effect',result)
    if (result.data){
      console.log(person)
      setPerson(result.data.findPerson)
    }
    // cuando solucione lo de la cache se puede hacer como midu
  }, [result.data])

  if(person){
   return(
    <div>
      <h2>{person.name}</h2>
      <button onClick={() => setPerson(null)}>close</button>
    </div>
   ) 
  }

  if(persons === null) return null

  return (
    <div>
      <h2>Persons</h2>
      {
        persons.map(person => 
          <div key={person.id} 
            onClick={() => {showPerson(person.name)}}>
              {person.name} {person.phone}
          </div>)
      }
    </div>
  )
}
