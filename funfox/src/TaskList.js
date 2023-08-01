// TaskList.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

function TaskListItem({ task, toggleTaskCompletion, deleteTask, index }) {
  // const [, dragRef] = useDrag({
  //   item: { type: 'TASK', id: task.id, index },
  // });

  // const [, dropRef] = useDrop({
  //   // accept: 'TASK',
  //   hover(item) {
  //     if (item.id !== task.id) {
  //       const itemIndex = item.index;
  //       const hoverIndex = index;
  //       toggleTaskCompletion(item.id); // Call the toggleTaskCompletion function to update the state on hover
  //       setTimeout(() => {
  //         toggleTaskCompletion(item.id); // Revert the task completion status after the reordering operation
  //       }, 0);
  //       item.index = hoverIndex;
  //     }
  //   },
  // });

  return (
    // ref={(node) => dragRef(dropRef(node))}
    <div  className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Incomplete' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskListItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
}

export default TaskList;
