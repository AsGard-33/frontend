import React, { useState } from 'react';
import { createBlog } from 'services/blogService';
import { BlogFormWrapper, Title, Input, TextArea, Button, ErrorMessage, SuccessMessage } from './styles';
import { BlogCreateDTO } from './types';

const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [userId, setUserId] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userId === '') {
      setError('User ID and Author ID are required');
      return;
    }

    const newBlog: BlogCreateDTO = {
      title,
      content,
      userId: parseInt(userId.toString(), 10),
    };

    try {
      console.log('Sending request to create blog:', newBlog);
      await createBlog(newBlog);
      setSuccess('Blog created successfully');
      setError(null);
    } catch (err: any) {
      console.error('Error creating blog:', err);
      setError('Failed to create blog: ' + err.message);
      setSuccess(null);
    }
  };

  return (
    <BlogFormWrapper>
      <Title>Create Blog</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      <form onSubmit={handleCreateBlog}>
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
          type="number"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value ? parseInt(e.target.value, 10) : '')}
        />
        <Button type="submit">Create Blog</Button>
      </form>
    </BlogFormWrapper>
  );
};

export default CreateBlog;
