import { rootStore } from '../store'

export const selectFilter = (state: rootStore) => state.filters.filter
