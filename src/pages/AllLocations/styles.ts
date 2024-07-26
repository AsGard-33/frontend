import styled from '@emotion/styled';

export const AllLocationsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const LocationCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  width: 300px;
`;

export const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  padding: 10px 0;
  color: blue;
  cursor: pointer;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;