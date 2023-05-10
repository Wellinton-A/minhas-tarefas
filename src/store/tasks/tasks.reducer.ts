import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../containers/add-tasks'

export type Filter = {
  quantity: number
  filter: string
  selected: boolean
}

const filters: Filter[] = [
  { quantity: 0, filter: 'Pendent', selected: false },
  { quantity: 0, filter: 'Done', selected: false },
  { quantity: 0, filter: 'Urgent', selected: false },
  { quantity: 0, filter: 'Important', selected: false },
  { quantity: 0, filter: 'Normal', selected: false },
  { quantity: 0, filter: 'All', selected: true }
]
interface TaskState {
  taskList: Task[]
  securePointTasks: Task[]
  filteredTasks: Task[]
  filter: Filter[]
}

const initialState: TaskState = {
  taskList: [],
  securePointTasks: [],
  filteredTasks: [],
  filter: filters
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      if (
        state.taskList.some(
          (taskListItem: Task) => taskListItem.title === action.payload.title
        )
      ) {
        return alert('Task already exist')
      }
      state.taskList.push(action.payload)
      state.securePointTasks.push(action.payload)
    },
    markAsDid(state, actions: PayloadAction<Task>) {
      state.taskList = state.taskList.map((task: Task) =>
        task.title === actions.payload.title
          ? { ...task, done: !task.done }
          : task
      )
      state.securePointTasks = state.securePointTasks.map((task: Task) =>
        task.title === actions.payload.title
          ? { ...task, done: !task.done }
          : task
      )
    },
    removeTask(state, actions: PayloadAction<Task>) {
      state.taskList = state.taskList.filter(
        (task: Task) => task.title !== actions.payload.title
      )
      state.securePointTasks = state.securePointTasks.filter(
        (task: Task) => task.title !== actions.payload.title
      )
    },
    setSecurePoint(state, actions: PayloadAction<Task[]>) {
      state.securePointTasks = actions.payload
    },
    setTaskList(state, actions: PayloadAction<Task[]>) {
      state.taskList = actions.payload
    },
    setFilters(state, actions: PayloadAction<Filter[]>) {
      state.filter = actions.payload
    }
    // setfilteredTasks(state, actions: PayloadAction<Task[]>) {}
  }
})

export const reducerTask = taskSlice.reducer
export const {
  addTask,
  markAsDid,
  removeTask,
  setSecurePoint,
  setTaskList,
  setFilters
} = taskSlice.actions
