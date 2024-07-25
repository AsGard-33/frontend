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
import { updateProfileAvatar } from 'services/authService'; // Предположим, что у нас есть такой сервис

const UploadPhoto: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [userId, setUserId] = useState<number | null>(null);
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
    formData.append('userId', String(userId));

    try {
      const response: AxiosResponse<PhotoDTO> = await axios.post('/api/photos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setSuccess(true);
      setError(null);

      // Обновляем профиль с новым URL аватара
      await updateProfileAvatar(userId, response.data.url);

      setTimeout(() => navigate('/profile'), 2000);
    } catch (err: any) {
      console.error(err);
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
        type="number"
        value={userId ? userId.toString() : ''}
        onChange={(e) => setUserId(Number(e.target.value))}
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
