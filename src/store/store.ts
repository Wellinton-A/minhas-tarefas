import { configureStore } from '@reduxjs/toolkit'
import { rootReducers } from './root-reducers'

const store = configureStore({
  reducer: rootReducers
})

export default store
export type rootStore = ReturnType<typeof store.getState>
