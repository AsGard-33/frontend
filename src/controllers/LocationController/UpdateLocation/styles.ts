import styled from '@emotion/styled';

export const UpdateLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fcfcfc00;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: white;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: rgba(81, 83, 84, 0.3);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #fcfcfc;
    color: black;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 10px;
`;