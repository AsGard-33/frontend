import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7;
  border-radius: 8px;
`;

export const HomeTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const HomeMessage = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const HomeError = styled.div`
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
`;
