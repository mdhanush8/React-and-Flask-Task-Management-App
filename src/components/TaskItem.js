// frontend/src/components/TaskItem.js
import React from 'react';

function TaskItem({ task, onDelete, onUpdate }) {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.due_date}</p>
      <p>Priority: {task.priority}</p>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <br></br>
      <button onClick={() => onUpdate(task.id)}>Update</button>
    </li>
  );
}

export default TaskItem;
