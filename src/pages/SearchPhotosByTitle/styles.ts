import styled from '@emotion/styled';

export const SearchPhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const PhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const PhotoItem = styled.div`
  margin: 10px;
  text-align: center;

  img {
    max-width: 150px;
    max-height: 150px;
    margin-top: 10px;
  }
`;
