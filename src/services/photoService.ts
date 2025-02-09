import axios from 'axios';
import { PhotoDTO } from 'pages/UploadPhoto/types';

export const searchPhotosByUserId = async (userId: string): Promise<PhotoDTO[]> => {
  const response = await axios.get(`/api/photos/user/${userId}`);
  return response.data;
};

export const getAllPhotos = async (): Promise<PhotoDTO[]> => {
  const response = await axios.get('/api/photos/all');
  return response.data;
};

export const deletePhoto = async (photoId: number): Promise<void> => {
  await axios.delete(`/api/photos/${photoId}`);
};

export const searchPhotosByTitle = async (title: string): Promise<PhotoDTO[]> => {
  const response = await axios.get(`/api/photos/search/${title}`);
  return response.data;
};

export const uploadPhoto = (formData: FormData) => {
  return axios.post('/api/photos/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};