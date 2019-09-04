import { objectType } from 'nexus'

interface ITask {
  id: string
  content: string
  isDone: boolean
}

// 가상의 Database
export const TASKS: ITask[] = []

export const Task = objectType({
  name: 'Task',
  definition(t) {
    t.id('id', {
      description: 'Task 생성 시 자동 생성되는 Unique ID',
    })
    t.string('content', {
      description: 'Task 내용',
    })
    t.boolean('isDone', {
      description: 'Task 완료 여부',
    })
  },
})

export * from './Query'
export * from './Mutation'