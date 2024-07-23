import styled from '@emotion/styled';

export const DeleteBlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 20px;
`;
