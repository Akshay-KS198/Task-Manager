import React from 'react';
import TaskItem from '../TaskItem';
import './index.css'

function TaskList({ tasks, onDeleteTask, onToggleCompletion }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onToggleCompletion={onToggleCompletion}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
