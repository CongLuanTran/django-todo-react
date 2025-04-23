const TabList = ({ viewCompleted, displayCompleted }) => {
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
