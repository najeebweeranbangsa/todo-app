import React from 'react';
import '../../styles/App.css';

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  const handleEdit = () => {
    const updatedTodo = { ...todo, title: 'Updated Title', description: 'Updated Description' }; // Example update
    onEdit(todo.id, updatedTodo);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <div className="todo-item">
      <h3 className={`todo-title ${todo.completed ? 'completed' : ''}`}>{todo.title}</h3>
      <p className="todo-description">{todo.description}</p>
      <button className="todo-button" onClick={handleEdit}>
        Edit
      </button>
      <button className="todo-button" onClick={handleDelete}>
        Delete
      </button>
      <button className="todo-button" onClick={handleToggle}>
        {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  );
};

export default TodoItem;
