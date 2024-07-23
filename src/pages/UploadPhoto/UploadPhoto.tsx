import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  UploadPhotoWrapper,
  Title,
  ErrorMessage,
  SuccessMessage,
  Input,
  TextArea,
  FileInput,
  StyledButton
} from './styles';
import { PhotoDTO } from './types'; 

const UploadPhoto: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [userId, setUserId] = useState<string>(''); // Добавлено состояние для userId
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!photo || !title || !description || !userId) {
      setError('User ID, title, description, and photo are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', photo);
    formData.append('description', description);
    formData.append('userId', userId); // Добавляем userId в formData

    try {
      const response: AxiosResponse<PhotoDTO> = await axios.post('/api/photos', formData);
      console.log(response.data); // Логирование данных ответа для отладки
      setSuccess(true);
      setError(null);
      setTimeout(() => navigate('/profile'), 2000); // Перенаправление обратно на профиль через 2 секунды
    } catch (err) {
      console.error(err); // Добавим вывод ошибки в консоль для отладки
      setError('Failed to upload photo');
      setSuccess(false);
    }
  };

  return (
    <UploadPhotoWrapper>
      <Title>Upload Photo</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Photo uploaded successfully!</SuccessMessage>}
      <Input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID"
      />
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter photo title"
      />
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter photo description"
      />
      <FileInput type="file" onChange={handleFileChange} />
      <StyledButton onClick={handleUpload}>Upload Photo</StyledButton>
    </UploadPhotoWrapper>
  );
};

export default UploadPhoto;
