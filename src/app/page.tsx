'use client'

import { UserInfo } from "@/component/UserInfo";
import { client } from '../..'
import { ApolloProvider } from '@apollo/client'

export default function Home() {
  return (
    <>
    <h1>Users</h1>
      <ApolloProvider client={client}>
        <UserInfo></UserInfo>
      </ApolloProvider>
    </>
  )
}
