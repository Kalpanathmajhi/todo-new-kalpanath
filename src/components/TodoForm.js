import React, { useState } from 'react';
import './TodoForm.css'
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-form__input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className="todo-form__button">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;

