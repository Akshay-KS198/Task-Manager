import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci"
import './index.css'
function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className='forms-container'>
    <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit"><CiCirclePlus size={25}/>Add Task</button>
    </div>
    </form>
  );
}

export default AddTask;
