// ** React Imports
import { useState } from 'react'

export const TaskCreator = ({ createNewTask }) => {
  // ** States
  const [newTaskName, setNewTaskName] = useState('')

  // ** Functions To Handle Form Submit
  const handleSubmit = e => {
    if (newTaskName.trim() === '') {
      alert('Please enter a task name')
      return
    }

    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName('')
  }

  return (
    <form className='my-3 row g-3' onSubmit={handleSubmit}>
      <div className='col-8'>
        <input
          type='text'
          className='form-control'
          value={newTaskName}
          onChange={e => setNewTaskName(e.target.value)}
          placeholder='Enter a new task...'
          autoFocus
        />
      </div>
      <div className='col-4'>
        <button className='btn btn-primary w-100' type='submit'>
          Create
        </button>
      </div>
    </form>
  )
}
