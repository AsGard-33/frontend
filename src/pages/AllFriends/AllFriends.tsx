import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFriends } from 'services/friendService';
import { FriendDTO } from './types';
import { AllFriendsWrapper, Title, FriendItem, ErrorMessage } from './styles';

const AllFriends: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [friends, setFriends] = useState<FriendDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        if (!userId) {
          setError('User ID is required');
          return;
        }
        const friendsData = await getFriends(parseInt(userId, 10));
        setFriends(friendsData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch friends');
      }
    };

    fetchFriends();
  }, [userId]);

  return (
    <AllFriendsWrapper>
      <Title>All Friends</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {friends.map((friend) => (
        <FriendItem key={friend.id}>
          {friend.username} ({friend.email})
        </FriendItem>
      ))}
    </AllFriendsWrapper>
  );
};

export default AllFriends;
