import styled from '@emotion/styled';

export const UploadPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FileInput = styled.input`
  margin-bottom: 1rem;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-top: 1rem;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;