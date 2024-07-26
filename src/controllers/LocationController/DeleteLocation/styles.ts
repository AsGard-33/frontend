import styled from '@emotion/styled';

export const DeleteLocationWrapper = styled.div`
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

export const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
`;