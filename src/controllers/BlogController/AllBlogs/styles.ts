import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

export const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;

export const BlogCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-bottom: 1rem;

  button, input {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }
`;
