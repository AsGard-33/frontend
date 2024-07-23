import styled from '@emotion/styled';

export const UserDetailWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const UserDetailTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const UserDetailInfo = styled.p`
  font-size: 16px;
  margin: 10px 0;
  & strong {
    margin-right: 10px;
  }
`;
