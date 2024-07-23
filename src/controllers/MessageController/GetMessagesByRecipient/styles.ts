import styled from '@emotion/styled';

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MessageDetail = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;
