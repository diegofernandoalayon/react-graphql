import { useQuery, useMutation} from '@apollo/client'
import { All_PERSONS } from './graphql-queries'
import { CREATE_PERSON } from './graphql-mutations'
export const usePersons = () => {
  const result = useQuery(All_PERSONS)
  return result
}

export const useAddPerson = () => {
  const [ createPerson ] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: All_PERSONS}]
  })
  return [createPerson]
}