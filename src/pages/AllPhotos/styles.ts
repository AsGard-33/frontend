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
  background-color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
`;
