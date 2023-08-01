import React from 'react';
import { useDrag } from 'react-dnd';
import './TaskItem.css';

const DraggableTaskItem = ({ task, markAsCompleted, deleteTask }) => {
  const [, drag] = useDrag({
    // type is now listed by itself, not inside of item
    type: 'TASK',
    item: () => ({task})
 })

  const handleMarkCompleted = () => {
    markAsCompleted(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li className="fade-in" ref={drag}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {!task.completed ? (
        <button onClick={handleMarkCompleted}>Mark as Completed</button>
      ) : (
        <span>Completed</span>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default DraggableTaskItem;
