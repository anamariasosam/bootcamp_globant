import React from 'react'

const showTask = (tasks, removeTask) =>
  tasks.map((task, index) => (
    <li key={index}>
      {task}
      <button onClick={() => removeTask(task)}>X</button>
    </li>
  ))

const TasksList = ({ tasks, removeTask }) => {
  return <ul>{showTask(tasks, removeTask)}</ul>
}

export default TasksList
