import { VFC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client' //hasuraからデータ取得するためのhooks
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'
import { Layout } from '../components/Layout'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    //fetchPolicyは複数種類あり。
    // fetchPolicy: 'network-only', //取得するまで表示されない。
    fetchPolicy: 'cache-and-network', //最初の表示はキャッシュを、取得したら上書きされる。
    // fetchPolicy: 'cache-first',
    // fetchPolicy: 'no-cache',//キャッシュに保存されないので注意。
  })
  if (error)
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {/* {console.log(data)} */}
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
