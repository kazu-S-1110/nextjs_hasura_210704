import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'
import { handlers } from '../mock/handlers'

initTestHelpers()

const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('UserDetail Test Cases', () => {
  it('Should render the user detail pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/users/b6137849-7f1d-c2db-e609-22056fb86db3',
    })
    render(page)
    expect(await screen.findByText('User detail')).toBeInTheDocument()
  })
})
