import { createSlice } from '@reduxjs/toolkit'
import todoService from '../services/todo'

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    setTodos(state, action) {
      return action.payload
    },
    appendTodo(state, action) {
      state.push(action.payload)
    },
    removeTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload.id)
    },
    setTodo(state, action) {
      const object = action.payload
      return state.map(todo => todo.id === object.id ? object : todo)
    },
    toggleCompleted(state, action) {
      const id = action.payload
      const todoToChange = state.find(todo => todo.id === id)
      const changedTodo = {
        ...todoToChange,
        completed: !todoToChange.important
      }
      return state.map(todo =>
        todo.id === id ? changedTodo : todo
      )
    }
  }
})

export const { setTodos, appendTodo, removeTodo, setTodo } = todoSlice.actions

export const initializeTodos = () => {
  return async dispatch => {
    const todos = await todoService.getAll()
    dispatch(setTodos(todos))
  }
}

export const createTodo = todo => {
  return async dispatch => {
    const newTodo = await todoService.createTodo(todo)
    dispatch(appendTodo(newTodo))
  }
}

export const deleteTodo = todo => {
  return async dispatch => {
    await todoService.deleteTodo(todo.id)
    dispatch(removeTodo(todo))
  }
}

export const editTodo = todo => {
  return async dispatch => {
    const updatedTodo = await todoService.updateTodo(todo)
    dispatch(setTodo(updatedTodo))
  }
}

export default todoSlice.reducer
