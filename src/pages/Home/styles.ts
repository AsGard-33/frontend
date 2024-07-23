import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const HomeTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

export const HomeMessage = styled.p`
  font-size: 1.5em;
  color: #555;
`;

export const HomeError = styled.div`
  color: red;
  font-size: 1.2em;
`;
