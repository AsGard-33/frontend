import styled from '@emotion/styled';

export const BlogsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const BlogItem = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;
