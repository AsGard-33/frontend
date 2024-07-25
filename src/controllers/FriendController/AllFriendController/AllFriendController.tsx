import React, { useEffect, useState } from 'react';
import { FriendDTO } from './types';
import { FriendItem, ErrorMessage } from './styles';

export const AllFriendController: React.FC = () => {
  const [friends, setFriends] = useState<FriendDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('/api/friends/all');
        const data = await response.json();
        const friendsData: FriendDTO[] = data.map((item: any) => ({
          id: item.friend.id,
          username: item.friend.username,
          email: item.friend.email,
        }));
        setFriends(friendsData);
        setError(null);
      } catch (err: any) {
        setError('Failed to fetch friends: ' + err.message);
      }
    };

    fetchFriends();
  }, []);

  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <div>
      {friends.length > 0 ? (
        friends.map((friend) => (
          <FriendItem key={friend.id}>
            {friend.username} ({friend.email})
          </FriendItem>
        ))
      ) : (
        <p>No friends found.</p>
      )}
    </div>
  );
};
