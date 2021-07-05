//makeVarの定義を記述していく。
import { makeVar } from '@apollo/client'

interface Task {
  title: string
}

export const todoVar = makeVar<Task[]>([])
