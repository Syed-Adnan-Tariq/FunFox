import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, markAsCompleted, deleteTask }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleMarkCompleted = () => {
    markAsCompleted(task.id);
  };

  const handleDelete = () => {
    setIsAnimating(false);
    setTimeout(() => {
      deleteTask(task.id);
    }, 500);
  };

  return (
    <li className={isAnimating ? 'fade-in' : 'fade-out'}>
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

export default TaskItem;
