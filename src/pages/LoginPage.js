import React, { useState } from 'react';
import '../styles/App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
    console.log('Login:', { email, password });
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
