import React from 'react';
import { AllFriendsWrapper, Title } from './styles';
import { AllFriendController } from 'controllers/FriendController/AllFriendController/AllFriendController';

const AllFriends: React.FC = () => {
  return (
    <AllFriendsWrapper>
      <Title>All Friends</Title>
      <AllFriendController />
    </AllFriendsWrapper>
  );
};

export default AllFriends;
