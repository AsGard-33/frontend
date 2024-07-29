import styled from '@emotion/styled';

export const LoginWrapper = styled.form`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #d9dadb;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 90%;
  }
`;

export const LoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: black;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    color: black;
    font-weight: bold;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  input {
    color: black;
    border: 1px solid black;
    padding: 8px;
    border-radius: 4px;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 6px;
    }
  }

  input::placeholder {
    color: black;
    opacity: 1;
  }
`;
