import React from 'react';
import './css/todo-list.css';

const TodoList = ({ tasks, handleTaskDone, handleDeleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <span
            className={`todo-text ${task.isDone ? 'done' : ''}`}
            onClick={() => handleTaskDone(index)} // Mark task as done when clicked
          >
            {task.text}
          </span>
          <button
            className="delete-btn"
            onClick={() => handleDeleteTask(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
