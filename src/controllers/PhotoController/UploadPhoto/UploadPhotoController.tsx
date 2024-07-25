import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Input, TextArea, Button, Error } from './styles';
import { PhotoDTO } from './types';

const UploadPhotoController: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState<number | ''>('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<PhotoDTO | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!photo || userId === '') {
      setError('Please provide all the required fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('userId', userId.toString());
    formData.append('photo', photo);

    try {
      const response = await axios.post('/api/photos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccess(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to upload photo');
      setSuccess(null);
    }
  };

  return (
    <Container>
      <h1>Upload Photo</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          required
        />
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
          required
        />
        <Button type="submit">Upload</Button>
      </Form>
      {error && <Error>{error}</Error>}
      {success && <div>Photo uploaded successfully: {success.url}</div>}
    </Container>
  );
}

export default UploadPhotoController;
