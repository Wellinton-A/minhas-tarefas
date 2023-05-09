import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../containers/add-tasks'

interface TaskState {
  taskList: Task[]
  filteredTasks: Task[]
  securePointTasks: Task[]
}

const initialState: TaskState = {
  taskList: [],
  filteredTasks: [],
  securePointTasks: []
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
    },
    markAsDid(state, actions: PayloadAction<Task>) {
      state.taskList = state.taskList.map((task: Task) =>
        task.title === actions.payload.title
          ? { ...task, done: !task.done }
          : task
      )
    },
    removeTask(state, actions: PayloadAction<Task>) {
      state.taskList = state.taskList.filter(
        (task: Task) => task.title !== actions.payload.title
      )
    },
    setFilteredTasks(state, actions: PayloadAction<Task[]>) {
      state.filteredTasks = actions.payload
    },
    setSecurePoint(state, actions: PayloadAction<Task[]>) {
      state.securePointTasks = actions.payload
    },
    setTaskList(state, actions: PayloadAction<Task[]>) {
      state.taskList = actions.payload
    }
  }
})

export const reducerTask = taskSlice.reducer
export const {
  addTask,
  markAsDid,
  removeTask,
  setFilteredTasks,
  setSecurePoint,
  setTaskList
} = taskSlice.actions
