import { useEffect } from 'react'
import Items from './components/Items'
import TabList from './components/TabList'
import Modal from './components/Modal.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { initializeTodos } from './reducers/todoReducer.js'
import { showModal } from './reducers/modalReducer.js'
// import './App.css'


const App = () => {
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeTodos())
  }, [dispatch])

  const createItem = () => {
    dispatch(showModal())
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
            <TabList />
            <Items />
          </div>
        </div>
      </div>
      {modal ? (
        <Modal />
      ) : null}
    </main>
  )
}

export default App
