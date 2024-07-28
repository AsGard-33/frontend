import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ProfileTitle = styled.h1`
  font-size: 33px;
  color: antiquewhite;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProfileInfo = styled.div`
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 10px;
  position: absolute;
  right: 20px;
  top: 20px;

  @media (max-width: 768px) {
    position: static;
    margin-top: 20px;
    align-items: center;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarImage = styled.img`
  width: 350px;
  height: 450px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;

export const ProfileErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 300px;
  background-color: #d8e8dbd8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

export const ProfileError = styled.div`
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorButton = styled.div``;

export const ProfileText = styled.p`
  color: wheat;
  font-weight: 900;
  margin: 15px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const AvatarInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button1 = styled.div`
margin-top: 20px;
width: 200px;

`;