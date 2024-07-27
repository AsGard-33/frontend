// styles.ts
import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-height: calc(100vh - 150px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: darkblue;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const HomeMessage = styled.p`
  font-size: 23px;
  text-align: left;
  max-width: 600px;
  color: rgb(2, 40, 48);

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const InfoSection = styled.div`
  margin-bottom: 40px;
`;

export const MessageBox = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const PhotosSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

export const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background: rgb(2, 40, 48);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.2s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const PhotoTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: cadetblue;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const PhotoDescription = styled.p`
  font-size: 14px;
  color: #555;
  text-align: center;
  color: cadetblue;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
