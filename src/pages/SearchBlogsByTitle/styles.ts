import styled from '@emotion/styled';

export const SearchBlogsWrapper = styled.div`
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

export const SuccessMessage = styled.p`
  color: green;
  font-size: 16px;
`;

export const BlogsList = styled.div`
  margin-top: 20px;
`;

export const BlogItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;

  h3 {
    margin: 0 0 10px;
  }
`;
