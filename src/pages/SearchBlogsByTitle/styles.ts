import styled from '@emotion/styled';

export const SearchBlogsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 1rem;
`;

export const BlogsList = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const BlogItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;

  h3 {
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0;
  }
`;
