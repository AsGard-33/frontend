import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { DeleteBlogWrapper, Title, Button, ErrorMessage, SuccessMessage } from './styles';

const DeleteBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleDeleteBlog = async () => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      setSuccess('Blog deleted successfully');
      setError(null);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError('Failed to delete blog');
      setSuccess(null);
    }
  };

  return (
    <DeleteBlogWrapper>
      <Title>Delete Blog</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      <Button onClick={handleDeleteBlog}>Delete Blog</Button>
    </DeleteBlogWrapper>
  );
};

export default DeleteBlog;
