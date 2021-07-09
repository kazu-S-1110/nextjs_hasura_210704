import { VFC } from 'react'
import { useCreateForm } from '../hooks/useCreateForm'
import { Child } from './Child'

export const CreateUser: VFC = () => {
  //CustomHookから変数を取り出す。
  const {
    text,
    handleSubmit,
    username,
    usernameChange,
    printMsg,
    handleTextChange,
  } = useCreateForm()
  return (
    <>
      {console.log('CreateUser rendered!')}
      <p className="mb-3 font-bold">Custom Hook + useCallback + memo</p>
      <div className="mb-3 flex flex-col justify-center items-center">
        <label>Text</label>
        <input
          type="text"
          className="px-3 py-2 border border-gray-300"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label>Username</label>
        <input
          type="text"
          placeholder="New user ?"
          className="mb-3 px-3 py-2 border border-gray-300"
          value={username}
          onChange={usernameChange}
        />
        <button
          type="submit"
          className="my-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl 
          focus:outline-none"
        >
          Submit
        </button>
      </form>
      <Child printMsg={printMsg} handleSubmit={handleSubmit} />
    </>
  )
}
