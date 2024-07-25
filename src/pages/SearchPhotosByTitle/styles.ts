import styled from '@emotion/styled';

export const SearchPhotosWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: darkblue;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 20px;
`;

export const PhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const PhotoItem = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: darkblue;
  }
`;
