'use client'

import { useQuery, gql} from '@apollo/client'

interface Users {
  users: {data: {email: string, id: string, name: string}[] }
}

const GET_USERS = gql`
query GetUsers {
    users{
      data {
        email
        name
        id
      }
    }
  }
`

export function UserInfo() {
  const { loading, error, data } = useQuery<Users>(GET_USERS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data?.users.data.map(({  email, id, name  }) => (
    <div key={id}>
      <h3>Name: {name}</h3>
      <p>E-mail: {email}</p>
    </div>
  ));
}
