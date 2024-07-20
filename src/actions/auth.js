export const setAuthToken = token => ({
    type: 'SET_AUTH_TOKEN',
    token,
  });
  
  export const clearAuthToken = () => ({
    type: 'CLEAR_AUTH_TOKEN'
  });