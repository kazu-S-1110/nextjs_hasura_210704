import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import 'cross-fetch/polyfill'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = () => {
  return new ApolloClient({
    //windowがundeifned、ということはブラウザが開いてない状態、つまりサーバ側で実行されているかどうかの判別式
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://basic-lesson210703.hasura.app/v1/graphql', //endpointの登録用
    }),

    cache: new InMemoryCache(),
  })
}

const initializeApollo = (initialState = null) => {
  //左辺の式がapolloClientがnull,undefinedなら右辺が実行される式。
  const _apolloClient = apolloClient ?? createApolloClient()
  // For SSG and SSR always create a new Apollo Client
  //サーバ側ではapolloClientに代入する式がないので毎回createApolloClientが実行される
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}
