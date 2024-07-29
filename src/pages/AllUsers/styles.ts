import styled from '@emotion/styled';

export const AllUsersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: aliceblue;
`;

export const UserCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
`;

export const ProfileButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgba(81, 83, 84, 0.3);
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #fcfcfc;
    color: black;
  }
`;
