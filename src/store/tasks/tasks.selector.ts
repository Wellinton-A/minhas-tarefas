import { createSelector } from 'reselect'
import { rootStore } from '../store'

const selectTasksReducer = (state: rootStore) => state.tasks

export const selectTaskList = createSelector(
  [selectTasksReducer],
  (tasks) => tasks.taskList
)

export const selectFilteredTasks = createSelector(
  [selectTasksReducer],
  (tasks) => tasks.filteredTasks
)

export const selectSecurePointTasks = createSelector(
  [selectTasksReducer],
  (tasks) => tasks.securePointTasks
)
