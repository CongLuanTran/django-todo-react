import { createSlice } from '@reduxjs/toolkit'

const completedReducer = createSlice({
  name: 'filter',
  initialState: false,
  reducers: {
    filterChange(state, action) {
      return action.payload
    }
  }
})

export const { filterChange } = completedReducer.actions
export default completedReducer.reducer
