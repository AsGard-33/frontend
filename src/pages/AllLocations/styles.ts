import styled from '@emotion/styled';

export const AllLocationsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Изменил на flex-start, чтобы элементы выравнивались по верхнему краю */
  margin-left: 220px; /* Добавил отступ, чтобы учесть ширину Sidebar */
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: aliceblue;
`;

export const LocationCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  background-color: #6a95ad3b;
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
  box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Добавляем тень для лучшего визуального разделения */
  z-index: 1000; /* Обеспечиваем, что Sidebar будет поверх других элементов */
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
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 22px; /* Добавляем отступ, чтобы учесть ширину Sidebar */
  overflow: auto;
  width: 400px;
`;

export const LocationTitle = styled.h3`
  font-size: 1.5em;
  color: #333;
`;

export const LocationDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

export const LocationImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const LocationCoordinates = styled.p`
  font-size: 0.9em;
  color: #999;
`;

export const LocationID = styled.p`
  font-size: 0.9em;
  color: #999;
`;

export const LocationActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;