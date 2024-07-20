import { useState } from "react";

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Не удалось войти');
      }
      localStorage.setItem('accessToken', data.access_token); // Сохраняем токен в localStorage
      setToken(data.access_token); // Передаем токен в родительский компонент
    } catch (error) {
      console.error('Ошибка входа:', error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Логин:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;
