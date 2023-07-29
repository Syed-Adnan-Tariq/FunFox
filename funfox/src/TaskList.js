import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableTaskItem from './DraggableTaskItem';

const TaskList = ({ tasks, markAsCompleted, deleteTask }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ul>
        {tasks.map((task) => (
          <DraggableTaskItem
            key={task.id}
            task={task}
            markAsCompleted={markAsCompleted}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </DndProvider>
  );
};

export default TaskList;
