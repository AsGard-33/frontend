import React, { useState } from 'react';
import { createBlog } from 'services/blogService';
import { BlogCreateDTO } from './types';
import { CreateBlogWrapper, Title, Input, TextArea, ErrorMessage, SuccessMessage } from './styles';
import Button from 'components/Button/Button';

const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [userId, setUserId] = useState<string>('');  // Добавляем состояние для userId
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      if (!title || !content || !userId) {
        setError('Title, content, and user ID are required');
        return;
      }
      const newBlog: BlogCreateDTO = { id: 0, title, content, userId: parseInt(userId) };
      await createBlog(newBlog);
      setSuccess(true);
      setError(null);
      setTitle('');
      setContent('');
      setUserId('');  // Сбрасываем значение userId после успешного создания блога
    } catch (err) {
      setError('Failed to create blog');
      setSuccess(false);
    }
  };

  return (
    <CreateBlogWrapper>
      <Title>Create New Blog</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Blog created successfully!</SuccessMessage>}
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Blog Title"
      />
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter Blog Content"
      />
      <Input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <Button name="Create Blog" onClick={handleSubmit} />
    </CreateBlogWrapper>
  );
};

export default CreateBlog;
