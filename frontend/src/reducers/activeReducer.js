import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  description: '',
  completed: false
}


const activeReducer = createSlice({
  name: 'active',
  initialState,
  reducers: {
    resetItem() {
      return initialState
    },
    setItem(state, action) {
      return action.payload
    }
  }
})

export const { resetItem, setItem } = activeReducer.actions
export default activeReducer.reducer
