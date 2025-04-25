import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoReducer'
import completedReducer from './reducers/completedReducer'
import modalReducer from './reducers/modalReducer'
import activeReducer from './reducers/activeReducer'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: completedReducer,
    modal: modalReducer,
    active: activeReducer
  }
})
