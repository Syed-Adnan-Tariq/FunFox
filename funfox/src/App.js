import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css'

const App = () => {
  // State to hold the tasks for the user's group
  const [tasks, setTasks] = useState([]);
  const [feedback, setFeedback] = useState('');


  // Function to add a new task to the list
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to mark a task as completed
  const markAsCompleted = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task)));
  };

  // Function to delete a task from the list
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Simulate fetching tasks from the server on component mount
  useEffect(() => {
    // Replace this with your actual API call to fetch tasks for the user's group
    const fetchTasksFromServer = async () => {
      const tasksFromServer = [];
      // const tasksFromServer = await fetch('your-api-url/tasks');
      // const tasksFromServer = localStorage.getItem("tasks");
      setTasks(tasksFromServer);
    };

    fetchTasksFromServer();
  }, []);

  return (
    <div>
      <h1>Task Management System</h1>
      <TaskForm addTask={addTask} setFeedback={setFeedback} />
      {feedback && <div className="feedback">{feedback}</div>}
      <TaskList tasks={tasks} markAsCompleted={markAsCompleted} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
