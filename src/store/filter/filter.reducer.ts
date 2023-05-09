import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
  { quantity: 0, filter: 'All', selected: false }
]

const initialState = {
  filter: filters
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters(state, actions: PayloadAction<Filter[]>) {
      state.filter = actions.payload
    }
  }
})

export const reducerfilter = filterSlice.reducer
export const { setFilters } = filterSlice.actions
