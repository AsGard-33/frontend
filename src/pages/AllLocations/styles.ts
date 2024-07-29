import styled from '@emotion/styled';

export const AllLocationsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Изменил на flex-start, чтобы элементы выравнивались по верхнему краю */
  margin-left: 220px; /* Добавил отступ, чтобы учесть ширину Sidebar */

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

export const LocationCard = styled.div`
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

export const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 100px; /* Учитываем высоту header */
  bottom: 190px; /* Учитываем высоту footer */
  left: 0;
  background-color: #6a95ad3b;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Добавляем тень для лучшего визуального разделения */
  z-index: 1000; /* Обеспечиваем, что Sidebar будет поверх других элементов */

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

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 22px; /* Добавляем отступ, чтобы учесть ширину Sidebar */
  overflow: auto;
  width: 400px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const LocationTitle = styled.h3`
  font-size: 1.5em;
  color: #00a0fcfe;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const LocationDescription = styled.p`
  font-size: 1em;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const LocationImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LocationCoordinates = styled.p`
  font-size: 0.9em;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const LocationID = styled.p`
  font-size: 0.9em;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const LocationActions = styled.div`
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
  font-size: 16px;
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
