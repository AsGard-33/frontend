export const fetchFromBackend = async (endpoint, options = {}) => {
  const response = await fetch(`http://travelbookblog.com/api/${endpoint}`, options);
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  return response.json();
};



// ostavim poka
//     baseURL: 'http://34.28.130.6', // URL backend
//   };
  
//   export default apiConfig;