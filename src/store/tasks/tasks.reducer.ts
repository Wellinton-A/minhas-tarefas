import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../containers/add-tasks'

interface TaskState {
  taskList: Task[]
}

const initialState: TaskState = {
  taskList: []
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
    }
  }
})

export const reducerTask = taskSlice.reducer
export const { addTask, markAsDid } = taskSlice.actions
