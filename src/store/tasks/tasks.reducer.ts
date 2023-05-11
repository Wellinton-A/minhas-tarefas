import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../containers/add-tasks'
import { items } from '../../components/task-card/tasks'

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
  inputFilter: string
}

const initialState: TaskState = {
  taskList: items,
  securePointTasks: items,
  filteredTasks: [],
  filter: filters,
  inputFilter: ''
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
        task.id === actions.payload.id ? { ...task, done: !task.done } : task
      )
      state.securePointTasks = state.securePointTasks.map((task: Task) =>
        task.id === actions.payload.id ? { ...task, done: !task.done } : task
      )
    },
    markAsEditing(state, actions: PayloadAction<Task>) {
      state.taskList = state.taskList.map((task: Task) =>
        task.id === actions.payload.id
          ? { ...task, editing: !task.editing }
          : task
      )
      state.securePointTasks = state.securePointTasks.map((task: Task) =>
        task.id === actions.payload.id
          ? { ...task, editing: !task.editing }
          : task
      )
    },
    removeTask(state, actions: PayloadAction<Task>) {
      state.taskList = state.taskList.filter(
        (task: Task) => task.id !== actions.payload.id
      )
      state.securePointTasks = state.securePointTasks.filter(
        (task: Task) => task.id !== actions.payload.id
      )
    },
    editedTasks(state, actions: PayloadAction<Task>) {
      state.taskList = state.taskList.map((task: Task) =>
        task.id === actions.payload.id ? actions.payload : task
      )
      state.securePointTasks = state.securePointTasks.map((task: Task) =>
        task.id === actions.payload.id ? actions.payload : task
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
    },
    setFilteredTasks(state, actions: PayloadAction<Task[]>) {
      state.filteredTasks = actions.payload
    },
    setInputFilter(state, actions: PayloadAction<string>) {
      state.inputFilter = actions.payload
    }
  }
})

export const reducerTask = taskSlice.reducer
export const {
  addTask,
  markAsDid,
  removeTask,
  setSecurePoint,
  setTaskList,
  setFilters,
  setFilteredTasks,
  setInputFilter,
  markAsEditing,
  editedTasks
} = taskSlice.actions
