import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import TodoList from './components/Todo/TodoList';
import Login from '../src/pages/LoginPage';
import Register from '../src/pages/RegisterPage';
import { AuthProvider } from '../src/components/context/AuthContext';
import '../src/styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  const addTodo = () => {
    if (newTodoTitle && newTodoDescription) {
      const newTodo = {
        id: Date.now(),
        title: newTodoTitle,
        description: newTodoDescription,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle('');
      setNewTodoDescription('');
    }
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <div className="todo-form">
                  <h2>Create New Todo</h2>
                  <input
                    type="text"
                    placeholder="Title"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                  />
                  <textarea
                    placeholder="Description"
                    value={newTodoDescription}
                    onChange={(e) => setNewTodoDescription(e.target.value)}
                  ></textarea>
                  <button className="add-todo-button" onClick={addTodo}>
                    Add Todo
                  </button>
                </div>
                <TodoList
                  todos={todos}
                  onEdit={editTodo}
                  onDelete={deleteTodo}
                  onToggle={toggleTodo}
                />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
