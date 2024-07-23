import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteBlog } from 'services/blogService';
import { DeleteBlogWrapper, Title, ErrorMessage, SuccessMessage } from './styles';
import Button from 'components/Button/Button';

const DeleteBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      if (!id) {
        setError('Blog ID is required');
        return;
      }
      await deleteBlog(parseInt(id));
      setSuccess(true);
      setError(null);
      setTimeout(() => navigate('/blogs'), 2000); // Redirect to blogs list after 2 seconds
    } catch (err) {
      setError('Failed to delete blog');
      setSuccess(false);
    }
  };

  return (
    <DeleteBlogWrapper>
      <Title>Delete Blog</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Blog deleted successfully!</SuccessMessage>}
      <Button name="Delete Blog" onClick={handleDelete} />
    </DeleteBlogWrapper>
  );
};

export default DeleteBlog;
