import styled from '@emotion/styled';

export const GetAllLocationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const LocationItem = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;
