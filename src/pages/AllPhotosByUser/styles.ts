import styled from '@emotion/styled';

export const AllPhotosWrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;

export const PhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const PhotoItem = styled.div`
  width: 200px;
  img {
    width: 100%;
    height: auto;
  }
  p {
    text-align: center;
    margin-top: 10px;
  }
`;
