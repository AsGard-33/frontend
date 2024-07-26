import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

export const PhotoItem = styled.div`
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

export const PhotoInfo = styled.p`
  font-size: 14px;
  color: #333;
`;

export const UploadButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;
