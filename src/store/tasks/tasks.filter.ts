import { Task } from '../../containers/add-tasks'
import { Filter } from '../filter/filter.reducer'

export const pendentFilter = (taskList: Task[]): Task[] =>
  taskList.filter((task: Task) => !task.done)

export const doneFilter = (taskList: Task[]): Task[] =>
  taskList.filter((task: Task) => task.done)

export const importantFilter = (taskList: Task[]): Task[] =>
  taskList.filter((task: Task) => task.importance === 'important')

export const urgentFilter = (taskList: Task[]): Task[] =>
  taskList.filter((task: Task) => task.importance === 'urgent')

export const normalFilter = (taskList: Task[]): Task[] =>
  taskList.filter((task: Task) => task.importance === 'normal')

// export const backToAll = (taskList: Task[]): Task[] =>
//   taskList.filter((task: Task) => task.importance === 'normal')

export const filterTaskList = (taskList: Task[], filter: Filter) => {
  switch (filter.filter.toLocaleLowerCase()) {
    case 'pendent':
      return pendentFilter(taskList)
    case 'done':
      return doneFilter(taskList)
    case 'important':
      return importantFilter(taskList)
    case 'urgent':
      return urgentFilter(taskList)
    case 'normal':
      return normalFilter(taskList)
    case 'all':
      return taskList
    default:
      throw new Error(`Invalid filter '${filter.filter}'`)
  }
}

export const selectedFilter = (
  filterList: Filter[],
  filter: Filter
): Filter[] => {
  const newFilterList = filterList.map((item) =>
    item.filter === filter.filter
      ? { ...filter, selected: true }
      : { ...item, selected: false }
  )
  return newFilterList
}
