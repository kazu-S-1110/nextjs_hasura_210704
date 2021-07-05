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
