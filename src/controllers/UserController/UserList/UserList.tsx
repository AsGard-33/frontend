import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from 'services/userService';
import { UserDTO } from './types';
import { UserListWrapper, Title, UserItem, ErrorMessage } from './styles';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchAllUsers();
        setUsers(usersData);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    getUsers();
  }, []);

  return (
    <UserListWrapper>
      <Title>All Users</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <UserItem key={user.id}>
              {user.username} ({user.email})
            </UserItem>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </UserListWrapper>
  );
};

export default UserList;
