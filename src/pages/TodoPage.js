import React from 'react';
import TodoList from '../components/Todo/TodoList';
import '../styles/App.css'; // Import the CSS file

const TodoPage = () => {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
};

export default TodoPage;
