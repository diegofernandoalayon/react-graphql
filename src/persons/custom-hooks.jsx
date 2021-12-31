import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { ALL_PERSONS, FIND_PERSON } from './graphql-queries'
import { CREATE_PERSON, EDIT_NUMBER } from './graphql-mutations'

export const usePersons = () => {
  const result = useQuery(ALL_PERSONS)
  return result
}

export const useAddPerson = ({ notifyError }) => {
  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message)
    }
  })
  return [createPerson]
}

export const useOnePerson = () => {
  const [getPerson, result] = useLazyQuery(FIND_PERSON)
  return [getPerson, result]
}

export const useEditNumber = () => {
  const [editNumber] = useMutation(EDIT_NUMBER)
  return [editNumber]
}
