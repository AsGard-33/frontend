import styled from '@emotion/styled';

export const DeletePhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fcfcfc00;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
export const Title = styled.h1`
  margin-bottom: 20px;
  color: white;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const SuccessMessage = styled.p`
  color: green;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;