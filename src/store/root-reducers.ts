import { combineReducers } from '@reduxjs/toolkit'
import { reducerTask } from './tasks/tasks.reducer'

export const rootReducers = combineReducers({
  tasks: reducerTask
})
