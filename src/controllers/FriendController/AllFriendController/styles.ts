import styled from '@emotion/styled';

export const AllFriendsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FriendItem = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;
