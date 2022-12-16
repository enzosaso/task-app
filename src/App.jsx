// ** React Imports
import { useState } from 'react'

// ** Custom Hooks
import useTask from './hooks/useTask'
import useUser from './hooks/useUser'

// ** Task App Component Imports
import { TaskBanner } from './components/TaskBanner'
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'
import { TaskTable } from './components/TaskTable'
import { Container } from './components/Container'

function App() {
  // ** States
  const [showCompleted, setshowCompleted] = useState(false)

  // ** Hooks
  const [taskItems, setTaskItems] = useTask()
  const userName = useUser()

  // ** Functions To Handle Add Task Click
  const createNewTask = taskName => {
    const existTask = taskItems.find(t => t.name === taskName)
    const newTask = { name: taskName, done: false }
    if (!existTask) setTaskItems([...taskItems, newTask])
  }

  // ** Functions To Handle Toggle Task Click
  const toggleTask = task => setTaskItems(taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))

  // ** Functions To Handle Clean Tasks Click
  const cleanTasks = () => {
    if (!taskItems.length || taskItems.every(i => !i.done)) return alert('No tasks to delete')
    if (window.confirm(`Are you sure you want to delete all Completed Tasks?`)) {
      const newTaskItems = taskItems.filter(task => !task.done)
      setTaskItems(newTaskItems)
      setshowCompleted(false)
    }
  }

  return (
    <main className='bg-dark vh-100 text-white'>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          description='Completed Tasks'
          isChecked={showCompleted}
          callback={setshowCompleted}
          cleanTasks={cleanTasks}
        />
        {showCompleted && <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} />}
      </Container>
    </main>
  )
}

export default App
