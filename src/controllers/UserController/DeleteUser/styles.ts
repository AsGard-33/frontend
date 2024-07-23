import styled from '@emotion/styled';

export const DeleteUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
`;

export const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #ff0000;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #cc0000;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-top: 1rem;
`;
