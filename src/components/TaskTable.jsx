// ** Task Component
import { TaskRow } from './TaskRow'

export const TaskTable = props => {
  // ** Props
  const { tasks, toggleTask, showCompleted = false } = props

  // ** Functions To Filter Tasks
  const taskFiltered = tasks.filter(task => task.done === showCompleted)

  return (
    <table className='table table-striped table-bordered table-dark border-secondary'>
      <thead>
        <tr className='table-primary'>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {taskFiltered.length ? (
          taskFiltered.map(task => <TaskRow key={task.name} task={task} toggleTask={toggleTask} />)
        ) : (
          <tr>
            <td className='text-center'>No tasks to show</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
