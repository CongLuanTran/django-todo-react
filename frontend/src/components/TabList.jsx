import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/completedReducer'

const TabList = () => {
  const viewCompleted = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const displayCompleted = (status) => {
    dispatch(filterChange(status))
  }

  return (
    <div className='nav nav-tabs'>
      <button
        className={`nav-link ${viewCompleted ? 'active' : ''}`}
        onClick={() => displayCompleted(true)}
      >
        Complete
      </button>
      <button
        className={`nav-link ${viewCompleted ? '' : 'active'}`}
        onClick={() => displayCompleted(false)}
      >
        Incomplete
      </button>
    </div >
  )
}

export default TabList
