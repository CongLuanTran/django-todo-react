import axios from 'axios'
const baseUrl = '/api/todos/'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createTodo = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const updateTodo = async object => {
  const response = await axios.put(`${baseUrl}${object.id}/`, object)
  return response.data
}

const deleteTodo = async id => await axios.delete(`${baseUrl}${id}/`)

export default {
  getAll,
  createTodo,
  updateTodo,
  deleteTodo
}
