import { createSlice } from '@reduxjs/toolkit'

const modalReducer = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    showModal() {
      return true
    },
    hideModal() {
      return false
    },
  }
})

export const { showModal, hideModal } = modalReducer.actions
export default modalReducer.reducer
