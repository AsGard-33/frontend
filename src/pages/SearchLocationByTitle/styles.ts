import styled from '@emotion/styled';

export const SearchLocationWrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ResultItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;
