import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

export const ProfileTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const ProfileInfo = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const ProfileError = styled.div`
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
`;
