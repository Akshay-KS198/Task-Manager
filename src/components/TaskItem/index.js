import React from 'react';
import './index.css'
import { MdOutlineDelete } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
function TaskItem({ task, onDelete, onToggleCompletion }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleCompletion(task.id)}>
        <div className='tasks'>
        {
            task.completed? <IoCheckmarkDoneCircleOutline size={22} />: <RxCrossCircled size={22} />
        }
        <p>{task.name}</p>
        </div>
      </span>
      <button onClick={() => onDelete(task.id)} className='delete-btn'><MdOutlineDelete size={25} backgroundColor={'#ffffff'}/></button>
    </div>
  );
}

export default TaskItem;
