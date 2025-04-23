import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const todoItems = [
  {
    id: 1,
    title: 'Go to Market',
    description: 'Buy ingredients to prepare dinner',
    completed: true,
  },
  {
    id: 2,
    title: 'Study',
    description: 'Read Algebra and History textbook for the upcoming test',
    completed: false,
  },
  {
    id: 3,
    title: 'Sammy\'s books',
    description: 'Go to library to return Sammy\'s books',
    completed: true,
  },
  {
    id: 4,
    title: 'Article',
    description: 'Write article on how to use Django with React',
    completed: false,
  },
]

const App = () => {
  const [todoList, setTodoList] = useState(todoItems)
  const [viewCompleted, setViewCompleted] = useState(false)

  const displayCompleted = (status) => setViewCompleted(status)

  const TabList = () => {
    return (
      <div className='nav nav-tabs'>
        <span
          className={`nav-link ${viewCompleted ? 'active' : ''}`}
          onClick={() => displayCompleted(true)}
        >
          Complete
        </span>

        <span
          className={`nav-link ${viewCompleted ? '' : 'active'}`}
          onClick={() => displayCompleted(true)}
        >
          Incomplete
        </span>
      </div >
    )
  }

  const Items = () => {
    return todoList.filter(item =>
      item.completed === viewCompleted
    )
      .map(item => 
      
      )
  }
}

export default App
