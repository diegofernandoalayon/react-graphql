export const CREATE_PERSON = gql`

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