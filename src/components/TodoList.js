import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css'
const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Complete HomeWork", isCompleted: false },
    { text: "Solve more problems in dsa", isCompleted: false },
    { text: "Yoga ", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <h1>Todo Web App</h1>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
