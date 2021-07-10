import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import useEvent from '@testing-library/user-event'
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

describe('Navigation Test Cases', () => {
  it('Should route to selected page in navbar', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)
    expect(await screen.findByText('Next.js + GraphQL')).toBeInTheDocument()
  })
})
