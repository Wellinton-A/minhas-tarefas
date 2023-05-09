import { combineReducers } from '@reduxjs/toolkit'
import { reducerTask } from './tasks/tasks.reducer'
import { reducerfilter } from './filter/filter.reducer'

export const rootReducers = combineReducers({
  tasks: reducerTask,
  filters: reducerfilter
})
