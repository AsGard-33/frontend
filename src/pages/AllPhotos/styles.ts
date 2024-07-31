import styled from '@emotion/styled';

export const Container = styled.div`
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

export const PhotoItem = styled.div`
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

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: aliceblue;

  @media (max-width: 768px) {
    font-size: 24px;
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

export const Description = styled.p`
  font-size: 1em;
  color: white;
  margin-top: 25px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const PhotoInfo = styled.p`
  font-size: 0.9em;
  color: #72a7f796;
  margin-top: 30px;
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

export const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const PhotoActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;