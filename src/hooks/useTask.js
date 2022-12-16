//** React Imports
import { useEffect, useState } from 'react'

export default function useTask() {
  // ** States
  const [taskItems, setTaskItems] = useState([])

  // ** Get Tasks on mount
  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data) setTaskItems(JSON.parse(data))
  }, [])

  // ** Set Tasks in localStorage based on dependency change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return [taskItems, setTaskItems]
}
