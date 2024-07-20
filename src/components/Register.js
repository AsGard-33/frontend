import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const apiUrl = `${process.env.REACT_APP_API_URL}/api/auth/register`; // Использование переменной окружения

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Правильно обрабатываем и выводим ошибки
      }

      const data = await response.json();
      console.log('Registration successful', data);
      setSuccess(true); // Устанавливаем успешное состояние
      setError(''); // Очищаем ошибки
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.'); // Вывод ошибок в интерфейсе
      setSuccess(false); // Очищаем успешное состояние
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Registration successful! Please log in.</p>}
    </div>
  );
};

export default Register;