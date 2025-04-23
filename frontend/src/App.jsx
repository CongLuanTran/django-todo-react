import { useEffect, useState } from 'react'
import Items from './components/Items'
import TabList from './components/TabList'
import Modal from './components/Modal.jsx'
import TodoService from './services/todo'
// import './App.css'


const App = () => {
  const [modal, setModal] = useState(false)
  const [activeItem, setActiveItem] = useState({
    title: '',
    description: '',
    completed: false,
  })
  const [todoList, setTodoList] = useState([])
  const [viewCompleted, setViewCompleted] = useState(false)

  useEffect(() => {
    TodoService.getAll()
      .then(todos =>
        setTodoList(todos)
      )
  }, [])

  const displayCompleted = (status) => setViewCompleted(status)

  const toggle = () => setModal(!modal)

  const handleSubmit = async (item) => {
    toggle()
    if (item.id) {
      const updatedTodo = await TodoService.updateTodo(item)
      setTodoList(todoList.map(todo =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ))
    } else {
      const newTodo = await TodoService.createTodo(item)
      setTodoList([...todoList, newTodo])
    }
  }

  const handleDelete = async (item) => {
    await TodoService.deleteTodo(item.id)
    setTodoList(todoList.filter(todo =>
      todo.id !== item.id
    ))
  }

  const createItem = () => {
    const item = { title: '', description: '', completed: false }
    toggle()
    setActiveItem(item)
  }

  const editItem = (item) => {
    toggle()
    setActiveItem(item)
  }

  return (
    <main className="container">
      <h1 className="text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                className="btn btn-primary"
                onClick={createItem}
              >
                Add task
              </button>
            </div>
            <TabList
              viewCompleted={viewCompleted}
              displayCompleted={displayCompleted}
            />
            <Items
              todoList={todoList}
              viewCompleted={viewCompleted}
              editItem={editItem}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      {modal ? (
        <Modal
          activeItem={activeItem}
          toggle={toggle}
          onSave={handleSubmit}
        />
      ) : null}
    </main>
  )
}

export default App
