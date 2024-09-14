import React from 'react';
import TodoItem from './TodoItem';
import '../../styles/App.css';

const TodoList = ({ todos = [], onEdit, onDelete, onToggle }) => {
  return (
    <div className="todo-container">
      <h2 className="todo-header">Todo List</h2>
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
