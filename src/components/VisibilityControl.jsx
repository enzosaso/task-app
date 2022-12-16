export const VisibilityControl = props => {
  // ** Props
  const { isChecked, callback, description, cleanTasks } = props

  // ** Function to handle Delete Click
  const handleDelete = () => cleanTasks()

  return (
    <div className='d-flex justify-content-between text-white text-center p-2' style={{ background: '#303030' }}>
      <div className='form-check form-switch'>
        <input
          type='checkbox'
          className='form-check-input'
          checked={isChecked}
          onChange={e => callback(e.target.checked)}
        />
        <label htmlFor='form-check-label'>Show {description}</label>
      </div>
      <button className='btn btn-danger btn-sm' onClick={handleDelete}>
        Clear
      </button>
    </div>
  )
}
