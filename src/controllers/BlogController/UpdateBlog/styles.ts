import styled from '@emotion/styled';

export const BlogFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  width: 300px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 20px;
`;
