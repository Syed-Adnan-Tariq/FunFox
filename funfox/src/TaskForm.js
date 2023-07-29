import React, { useState } from 'react';

const TaskForm = ({ addTask, setFeedback }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique ID for the task (you can use a library like uuid)
    const taskId = Math.random().toString(36).substr(2, 9);
    const newTask = { id: taskId, title, description, completed: false };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setFeedback('Task added successfully.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
