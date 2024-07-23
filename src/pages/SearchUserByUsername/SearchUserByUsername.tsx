import React, { useState } from 'react';
import { searchUserByUsername } from 'services/userService';
import { UserDetailProps } from 'pages/UserDetail/types';
import { SearchUserWrapper, Title, SearchInput, UserCard } from './styles';
import Button from 'components/Button/Button';

const SearchUserByUsername: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<UserDetailProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const userData = await searchUserByUsername(username);
      setUser(userData);
      setError(null);
    } catch (err) {
      setError('User not found');
      setUser(null);
    }
  };

  return (
    <SearchUserWrapper>
      <Title>Search User by Username</Title>
      <SearchInput
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <Button name="Search" onClick={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <UserCard>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </UserCard>
      )}
    </SearchUserWrapper>
  );
};

export default SearchUserByUsername;
