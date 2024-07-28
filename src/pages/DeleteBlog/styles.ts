import styled from '@emotion/styled';

export const DeleteBlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 1rem;
`;

export const RedButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #ff4d4d;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #690e02;
  }
`;