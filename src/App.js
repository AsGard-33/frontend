import "./App.css";
import { useEffect, useState } from "react";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch("/api/auth/users", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <h1>Привет, интернет</h1>
      {users.length > 0 ? (
        users.map(user => <p key={user.id}>{user.username}</p>) // Отображаем имя пользователя
      ) : (
        <p>Загрузка пользователей...</p>
      )}
    </div>
  );
}

export default App;
