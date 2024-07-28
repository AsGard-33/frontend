import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const Error = styled.div`
  color: red;
  margin-top: 10px;
`;

export const Success = styled.div`
  color: green;
  margin-top: 10px;
`;
