import styled from '@emotion/styled';

export const DeleteLocationWrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 16px;
`;
