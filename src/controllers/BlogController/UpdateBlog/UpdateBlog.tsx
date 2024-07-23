import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BlogFormWrapper, Title, Input, TextArea, Button, ErrorMessage, SuccessMessage } from './styles';
import { BlogCreateDTO } from './types';

const UpdateBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blogs/${id}`);
        const blog: BlogCreateDTO = response.data;
        setTitle(blog.title);
        setContent(blog.content);
        setUserId(blog.userId.toString());
      } catch (err) {
        setError('Failed to fetch blog details');
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdateBlog = async () => {
    const updatedBlog: BlogCreateDTO = {
      title,
      content,
      userId: parseInt(userId),
    };

    try {
      await axios.put(`/api/blogs/${id}`, updatedBlog);
      setSuccess('Blog updated successfully');
      setError(null);
    } catch (err) {
      setError('Failed to update blog');
      setSuccess(null);
    }
  };

  return (
    <BlogFormWrapper>
      <Title>Update Blog</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      <Input
        type="text"
        placeholder="Enter Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        placeholder="Enter Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button onClick={handleUpdateBlog}>Update Blog</Button>
    </BlogFormWrapper>
  );
};

export default UpdateBlog;
