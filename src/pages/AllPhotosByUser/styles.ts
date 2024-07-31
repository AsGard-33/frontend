import styled from '@emotion/styled';

export const SearchPhotosWrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgba(81, 83, 84, 0.3);
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fcfcfc;
    color: black;
  }
`;

export const PhotoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const PhotoItem = styled.li`
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 1em;
  color: white;
  margin-top: 25px;
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const PhotoImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 25px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const PhotoCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  background-color: #00020394;
  flex-grow: 1; /* Позволяет карточке расти вправо */
  min-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PhotoActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  margin-top: 25px;
  color: white;
  cursor: pointer;
  text-align: left;
  font-size: 33px; /* Увеличение размера шрифта */
  font-weight: bold; /* Жирный шрифт */
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px 0;
  }
`;

export const PhotoTitle = styled.h3`
  font-size: 1.5em;
  color: #00a0fcfe;
  margin-top: 25px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;