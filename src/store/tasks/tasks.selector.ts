import { createSelector } from 'reselect'
import { rootStore } from '../store'

const selectTasksReducer = (state: rootStore) => state.tasks

// export const selectTaskList = (state: rootStore) => state.tasks.taskList

// export const selectSecurePointTasks = (state: rootStore) =>
//   state.tasks.securePointTasks

// export const selectFilteredTasks = (state: rootStore) =>
//   state.tasks.filteredTasks

// export const selectFilter = (state: rootStore) => state.tasks.filter

// export const selectInputFilter = (state: rootStore) => state.tasks.inputFilter

export const selectTaskList = createSelector(
  [selectTasksReducer],
  (tasks) => tasks.taskList
)

export const selectSecurePointTasks = createSelector(
  [selectTasksReducer],
  (tasks) => tasks.securePointTasks
)

export const selectFilteredTasks = createSelector(
  [selectTasksReducer],
  (tasks) => tasks.filteredTasks
)

export const selectFilter = createSelector(
  [selectTasksReducer],
  (tasks) => tasks.filter
)

export const selectInputFilter = createSelector(
  [selectTasksReducer],
  (tasks) => tasks.inputFilter
)
