export const TaskRow = props => {
  // ** Props
  const { task, toggleTask } = props

  return (
    <tr key={task.name}>
      <td className='d-flex justify-content-between'>
        {task.name}
        <input type='checkbox' checked={task.done} onChange={() => toggleTask(task)} />
      </td>
    </tr>
  )
}
