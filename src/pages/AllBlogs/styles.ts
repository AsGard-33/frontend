import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 220px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: aliceblue;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BlogCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  background-color: #00020394;
  flex-grow: 1;
  min-width: 900px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 100px;
  bottom: 190px;
  left: 0;
  background-color: #6a95ad3b;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    top: 0;
    bottom: 0;
    box-shadow: none;
    padding: 10px;
  }
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  padding: 20px 0;
  color: white;
  cursor: pointer;
  text-align: left;
  font-size: 33px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px 0;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 22px;
  overflow: auto;
  width: 400px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const BlogTitle = styled.h3`
  font-size: 1.5em;
  color: #00a0fcfe;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const BlogContent = styled.p`
  font-size: 1em;
  color: white;
  margin: 15px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const BlogID = styled.p`
  font-size: 0.9em;
  color: #999;
  margin: 15px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const BlogActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const ProfileButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 25px;
  cursor: pointer;
  background-color: rgba(81, 83, 84, 0.3);
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #fcfcfc;
    color: black;
  }
`;

export const ButtonBoxon = styled.div`
  color: #fafcfc00;
`;
