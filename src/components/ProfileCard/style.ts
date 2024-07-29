import styled from "@emotion/styled";

export const ProfileCardWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 400px;
  height: fit-content;
  border: 1px solid #082229;
  border-radius: 8px;
  padding: 20px;
  /* box-shadow: 10px 5px 5px rgba(134, 194, 140, 0.3); */
  background-color: rgba(15, 39, 46, 0.3);
`;

export const AvatarControl = styled.div`
  height: 300px;
`;

export const ProfileAvatar = styled.img`
  height: 100%;
  width: 100%;
`;

export const AvatarH2 = styled.h2``;

export const AvatarP = styled.p``;

export const AddFriendButton = styled.button`
  background-color: rgba(81, 83, 84, 0.3);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #fcfcfc;
    color: black;
  }
`;
