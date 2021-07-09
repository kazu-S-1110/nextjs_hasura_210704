import { VFC } from 'react'
import { CreateUser } from '../components/CreateUser'
import { Layout } from '../components/Layout'

const HooksMemo: VFC = () => {
  return (
    <Layout title="Hooks memo">
      <CreateUser />
    </Layout>
  )
}
export default HooksMemo
