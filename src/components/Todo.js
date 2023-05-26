import React from 'react';
import './Todo.css'
const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className={`todo ${todo.isCompleted ? 'isCompleted' : ''}`}
    >
      {todo.text}

      <div>
        <button 
          onClick={() => completeTodo(index)}
          className="todo__button todo__button--complete"
        >
          Complete
        </button>
        <button 
          onClick={() => removeTodo(index)}
          className="todo__button"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Todo;

