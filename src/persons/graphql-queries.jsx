import {gql} from '@apollo/client'
export const All_PERSONS = gql`
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
export const FIND_PERSON = gql`
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