import styled from '@emotion/styled';

export const RegisterWrapper = styled.form`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #d9dadb;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 15px;
  }
`;

export const RegisterTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    color: black;
    font-weight: bold;
  }
  
  input {
    color: black;
    border: 1px solid black;
    padding: 12px;
    border-radius: 4px;
  }

  input::placeholder {
    color: black;
    opacity: 1;
  }
  
  @media (max-width: 1024px) {
    input {
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    input {
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    input {
      padding: 6px;
    }
  }
`;
