import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  // Функция для получения данных о локациях с сервера
  async function fetchLocations() {
    try {
      // Осуществляем вызов API
      const response = await fetch("/api/locations/");
      if (!response.ok) {
        // Если сервер вернул ответ с ошибкой, бросаем исключение
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Парсим тело ответа как JSON
      setLocations(data); // Обновляем состояние locations данными с сервера
    } catch (error) {
      // Обрабатываем возможные ошибки в блоке catch
      console.error("Error fetching locations:", error.message);
      setError(error.message); // Устанавливаем состояние ошибки
    }
  }

  // Используем useEffect для вызова fetchLocations при монтировании компонента
  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="App">
      <h1>Привет, интернет</h1>
      {error && <p>Ошибка: {error}</p>} {/* Отображаем сообщение об ошибке если она есть */}
      {locations.length > 0 ? (
        <ul>
          {/* Итерируем по массиву locations и отображаем каждую локацию */}
          {locations.map(location => (
            <li key={location.id}>{location.title}</li>
          ))}
        </ul>
      ) : (
        <p>Локации не найдены.</p> // Выводим сообщение, если массив locations пуст
      )}
    </div>
  );
}

export default App;