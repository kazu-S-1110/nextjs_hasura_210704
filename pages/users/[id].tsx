import { VFC } from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { initializeApollo } from '../../lib/apolloClient'
import { GET_USERIDS, GET_USERBY_ID } from '../../queries/queries'
import {
  GetUserByIdQuery,
  GetUseIdsQuery,
  Users,
} from '../../types/generated/graphql'
import { Layout } from '../../components/Layout'

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetUseIdsQuery>({
    query: GET_USERIDS,
  })
  //nextjsではお馴染みのpaths
  const paths = data.users.map((user) => ({
    params: {
      id: user.id,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetUserByIdQuery>({
    query: GET_USERBY_ID,
    variables: { id: params.id },
  })
  return {
    props: {
      user: data.users_by_pk,
    },
    revalidate: 1,
  }
}
