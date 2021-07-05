import Head from 'next/head'
import { ReactNode, VFC } from 'react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  title: string
}

export const Layout: VFC<Props> = ({
  children,
  title = 'Welcome to Nextjs!',
}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  data-testid="home-nav" //for test code
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Home
                </a>
              </Link>
              <Link href="/local-state-a">
                <a
                  data-testid="makevar-nav" //for test code
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  makeVar
                </a>
              </Link>
              <Link href="/hasura-main">
                <a
                  data-testid="fetchpolicy-nav" //for test code
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  fetchPolicy(Hasura)
                </a>
              </Link>
              <Link href="/hasura-crud">
                <a
                  data-testid="crud-nav" //for test code
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  CRUD(hasura)
                </a>
              </Link>
              <Link href="/hasura-ssg">
                <a
                  data-testid="ssg-nav" //for test code
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  SSG+ISR(Hasura)
                </a>
              </Link>
              <Link href="/hooks-memo">
                <a
                  data-testid="memo-nav" //for test code
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Custom hook + memo
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
