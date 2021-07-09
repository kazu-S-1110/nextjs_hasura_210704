//Custom Hooksを作って一部をhooks化してコードの可読性を高める
//Custom Hooksで定義する関数はuseCallback推奨、他コンポーネントで再利用するのでレンダリングのタイミングを最適化させてあげるのがベター
import { useState, useCallback, ChangeEvent, FormEvent } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../queries/queries'
import { CreateUserMutation } from '../types/generated/graphql'

export const useCreateForm = () => {
  const [text, setText] = useState('')
  const [username, setUsername] = useState('')
  const [insert_users_one] = useMutation<CreateUserMutation>(CREATE_USER, {
    update(cache, { data: { insert_users_one } }) {
      const cacheId = cache.identify(insert_users_one)
      cache.modify({
        fields: {
          users(existingUsers, { toReference }) {
            return [toReference(cacheId), ...existingUsers]
          },
        },
      })
    },
  })

  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])
  const usernameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }, [])
  const printMsg = useCallback(() => {
    console.log('hello')
  }, []) //useCallbackの第二引数には依存関係を渡す。useEffectと同じかな。

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        await insert_users_one({
          variables: {
            name: username,
          },
        })
      } catch (error) {
        alert(error.message)
      }
      setUsername('')
    },
    [username]
  ) //useCallbackを使用する場合、適用する関数内で何かを参照していたらそれを第二引数に渡してあげる必要がある。

  return {
    text,
    handleSubmit,
    username,
    usernameChange,
    printMsg,
    handleTextChange,
  }
}
