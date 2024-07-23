import styled from '@emotion/styled';

export const PhotoWrapper = styled.div`
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

export const PhotoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`;

export const PhotoItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }

  div {
    margin-top: 5px;
  }
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-top: 10px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;
