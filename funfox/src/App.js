import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';
import { useTasksApi } from './useTasksApi';

function App() {
  const [userGroup] = useState('group1'); // Assuming the user belongs to 'group1'
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTasksApi(userGroup);

  return (
    <div className="app-container">
      <h1>Task Management System</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
