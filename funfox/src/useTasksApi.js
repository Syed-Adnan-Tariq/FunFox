// useTasksApi.js
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', { transports : ['websocket'] });

export function useTasksApi(userGroup) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    socket.emit('joinGroup', userGroup);

    socket.on('taskAdded', (task) => {
      setTasks((prevTasks) => [...prevTasks, task]);
    });

    socket.on('taskUpdated', (updatedTask) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    });

    socket.on('taskDeleted', (taskId) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    });

    return () => {
      socket.disconnect();
    };
  }, [userGroup]);

  const addTask = (title, description) => {
    // Simulate API call to add a task
    setTimeout(() => {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
        group: userGroup,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      socket.emit('addTask', newTask);
    }, 500);
  };

  const toggleTaskCompletion = (taskId) => {
    // Simulate API call to toggle task completion status
    setTimeout(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
      );
      const updatedTask = tasks.find((task) => task.id === taskId);
      if (updatedTask) {
        socket.emit('updateTask', updatedTask);
      }
    }, 500);
  };

  const deleteTask = (taskId) => {
    // Simulate API call to delete a task
    setTimeout(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      socket.emit('deleteTask', taskId);
    }, 500);
  };

  return { tasks, addTask, toggleTaskCompletion, deleteTask };
}
