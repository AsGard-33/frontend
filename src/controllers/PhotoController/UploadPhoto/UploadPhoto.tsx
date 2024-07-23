import React, { useState } from 'react';
import axios from 'axios';
import {
  PhotoWrapper,
  Input,
  Button,
  SuccessMessage,
  ErrorMessage
} from './styles';
import { PhotoDTO } from './types';

const UploadPhoto: React.FC = () => {
  const [photo, setPhoto] = useState<PhotoDTO>({
    id: '',
    userId: '',
    title: '',
    url: '',
    description: ''
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPhoto((prevPhoto) => ({ ...prevPhoto, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/photos', photo);
      console.log(response.data); // Логирование данных ответа для отладки
      setSuccess('Фото успешно загружено.');
      setError(null);
    } catch (err) {
      setError('Не удалось загрузить фото.');
      setSuccess(null);
    }
  };

  return (
    <PhotoWrapper>
      <Input
        type="text"
        name="userId"
        placeholder="Введите ID пользователя"
        value={photo.userId}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="title"
        placeholder="Введите название фото"
        value={photo.title}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="url"
        placeholder="Введите URL фото"
        value={photo.url}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="description"
        placeholder="Введите описание фото"
        value={photo.description}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Загрузить фото</Button>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </PhotoWrapper>
  );
};

export default UploadPhoto;
