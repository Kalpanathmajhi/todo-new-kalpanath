import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TodoList />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
