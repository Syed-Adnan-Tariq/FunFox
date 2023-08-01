import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTask(title, description);
      setTitle('');
      setDescription('');
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Task Title:
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </label>
    <label>
      Task Description:
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
    </label>
    <button type="submit">Add Task</button>
    {showSuccessMessage && <p className="success-message">Task added successfully!</p>}
  </form>
  );
};

export default TaskForm;
