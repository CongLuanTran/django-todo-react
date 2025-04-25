import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../reducers/todoReducer'
import { showModal } from '../reducers/modalReducer'
import { setItem } from '../reducers/activeReducer'

const Items = () => {

  const viewCompleted = useSelector(state => state.filter)
  const todoList = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const handleDelete = (item) => {
    dispatch(deleteTodo(item))
  }

  const editItem = (item) => {
    dispatch(showModal())
    dispatch(setItem(item))
  }

  return (
    <ul>
      {
        todoList.filter(item =>
          item.completed === viewCompleted
        ).map(item =>
          <li
            key={item.id}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <span
              className={`pe-auto me-2 ${viewCompleted ? 'text-decoration-line-through' : ''
                }`}
              title={item.description}
            >
              {item.title}
            </span>
            <span>
              <button
                className="btn btn-secondary me-2"
                onClick={() => editItem(item)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            </span>
          </li>
        )
      }
    </ul >
  )
}

export default Items
