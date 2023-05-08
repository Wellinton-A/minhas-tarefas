import { rootStore } from '../store'

export const selectTaskList = (state: rootStore) => state.tasks.taskList
