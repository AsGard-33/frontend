export const fetchFromBackend = async (endpoint, options = {}) => {
    const response = await fetch(`/api/${endpoint}`, options); // Убедитесь, что вызов происходит на относительный путь
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  