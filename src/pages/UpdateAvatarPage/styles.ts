import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const Error = styled.div`
  color: red;
  margin-top: 10px;
`;

export const Success = styled.div`
  color: green;
  margin-top: 10px;
`;
