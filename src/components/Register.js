// import React, { useState } from 'react';
// import { fetchFromBackend } from '../services/api';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetchFromBackend('/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//       });
//       console.log('Registration successful', response);
//       setSuccess(true);  // Устанавливаем успешное состояние
//       setError('');  // Очищаем ошибки
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//       setSuccess(false);  // Очищаем успешное состояние
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>Registration successful! Please log in.</p>}
//     </div>
//   );
// };

// export default Register;
