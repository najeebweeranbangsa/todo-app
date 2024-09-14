import React, { useState } from 'react';
import '../styles/App.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password === confirmPassword) {
      // Handle registration logic
      console.log('Register:', { email, password });
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="auth-page">
      <h2>Register</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="auth-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
