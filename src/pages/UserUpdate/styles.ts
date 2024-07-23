import styled from '@emotion/styled';

export const UserUpdateWrapper = styled.div`
  padding: 20px;
`;

export const UserUpdateTitle = styled.h2`
  margin-bottom: 20px;
`;

export const UserUpdateForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const UserUpdateInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const UserUpdateButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
`;
