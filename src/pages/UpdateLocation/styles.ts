import styled from '@emotion/styled';

export const UpdateLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 15px;
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 15px;
`;
