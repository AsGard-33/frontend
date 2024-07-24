import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const HomeTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: darkblue;
`;

export const HomeMessage = styled.p`
  font-size: 30px;
  text-align: center;
  max-width: 600px;
  color: aqua;
`;

export const InfoSection = styled.div`
  margin-bottom: 40px;
`;

export const MessageBox = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  margin-right: 900px;
`;

export const PhotosSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-end;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0,1);
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const PhotoTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
  color: cadetblue;
`;

export const PhotoDescription = styled.p`
  font-size: 25px;
  color: #555;
  text-align: center;
  color: cadetblue;
`;
