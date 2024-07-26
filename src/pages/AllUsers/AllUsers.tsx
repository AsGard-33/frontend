import React, { useEffect, useState } from 'react';
import { fetchAllUsers, addFavoriteLocation } from 'services/userService';
import { UserDetailProps } from 'pages/UserDetail/types';
import { AllUsersWrapper, Title } from './styles';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import { getProfile } from 'services/authService';

const AllUsers: React.FC = () => {
  const [users, setUsers] = useState<UserDetailProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchAllUsers();
        setUsers(usersData);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    const getCurrentUserProfile = async () => {
      try {
        const profile = await getProfile();
        setCurrentUserId(Number(profile.id)); // Преобразуем profile.id в число
      } catch (err) {
        setError('Failed to fetch current user profile');
      }
    };

    getUsers();
    getCurrentUserProfile();
  }, []);

  const handleAddFriend = async (userId: number) => {
    try {
      if (!currentUserId) {
        setError('Current user ID not found');
        return;
      }
      await addFavoriteLocation(currentUserId, userId);
      alert('Friend added successfully');
    } catch (error) {
      alert('Failed to add friend');
    }
  };

  return (
    <AllUsersWrapper>
      <Title>All Users</Title>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          profileData={{
            id: user.id,
            userName: user.username,
            email: user.email,
          }}
          imgSrc="https://via.placeholder.com/150"
          onAddFriend={() => handleAddFriend(user.id)}
        />
      ))}
    </AllUsersWrapper>
  );
};

export default AllUsers;
