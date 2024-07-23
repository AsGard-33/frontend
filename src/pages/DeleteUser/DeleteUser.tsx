import React, { useState } from 'react';
import { deleteUser } from 'services/userService';
import { DeleteUserWrapper, Title, Input } from './styles';
import Button from 'components/Button/Button';

const DeleteUser: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleDeleteUser = async () => {
    try {
      if (!username || !email || !password) {
        setError('All fields are required');
        return;
      }
      await deleteUser(username, email, password);
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Failed to delete user');
      setSuccess(false);
    }
  };

  return (
    <DeleteUserWrapper>
      <Title>Delete User</Title>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>User deleted successfully!</p>}
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <Button name="Delete User" onClick={handleDeleteUser} />
    </DeleteUserWrapper>
  );
};

export default DeleteUser;
