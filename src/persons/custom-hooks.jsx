import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { ALL_PERSONS, FIND_PERSON } from './graphql-queries'
import { CREATE_PERSON, EDIT_NUMBER, LOGIN } from './graphql-mutations'

export const usePersons = () => {
  const result = useQuery(ALL_PERSONS)
  return result
}

export const useAddPerson = ({ notifyError }) => {
  const [createPerson] = useMutation(CREATE_PERSON, {
    // refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message)
    },
    update: (store, response) => {
      const dataInStore = store.readQuery({ query: ALL_PERSONS })
      store.writeQuery({
        query: ALL_PERSONS,
        data: {
          ...dataInStore,
          allPersons: [
            ...dataInStore.allPersons,
            response.data.addPerson
          ]
        }
      })
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

export const useLogin = ({ notifyError }) => {
  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message)
    }
  })
  return [login, result]
}
