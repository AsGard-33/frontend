// styles.ts
import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column; /* Change to column to stack containers vertically */
  justify-content: flex-start;
  align-items: first baseline;
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
  color: white;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const HomeMessage = styled.p`
  font-size: 23px;
  text-align: left;
  max-width: 600px;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const InfoSection = styled.div`
  margin-bottom: 40px;
`;

export const Logo = styled.div`
display: flex;
flex-direction: row;
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
  gap: 20px;
  flex: 1;
  width: 100%;
`;

export const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background: rgb(217, 218, 219);
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
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  margin: 40px;
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
  font-size: 40px;
  margin: 10px;
  color: bisque;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const PhotoDescription = styled.p`
  font-size: 25px;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;


export const VideoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  margin: 100px;
`;

export const VideoCard2 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  margin: 100px;
  margin-left: auto;
`;

export const VideoContainer = styled.div`
  width: 100%;
  overflow: hidden;

  video {
    width: 100%;
    height: auto;
  }
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
width: fit-content;

`;