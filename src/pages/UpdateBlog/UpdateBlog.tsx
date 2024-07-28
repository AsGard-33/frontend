import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogById, updateBlog } from 'services/blogService';
import { UpdateBlogWrapper, Title, Input, TextArea, ErrorMessage, SuccessMessage } from './styles';
import { BlogCreateDTO } from './types';
import Button from 'components/Button/Button';

const UpdateBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogCreateDTO>({ id: parseInt(id || '0'), title: '', content: '', userId: 0 });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getBlogById(parseInt(id || '0'));
        setBlog(blogData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch blog details');
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdateBlog = async () => {
    if (!blog.id) {
      setError('Blog ID is missing');
      return;
    }

    try {
      await updateBlog(blog.id, blog);
      setSuccess(true);
      setError(null);
      setTimeout(() => navigate('/blogs'), 2000); // Переход на страницу всех блогов через 2 секунды после успешного обновления
    } catch (err) {
      setError('Failed to update blog');
      setSuccess(false);
    }
  };

  return (
    <UpdateBlogWrapper>
      <Title>Update Blog</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Blog updated successfully</SuccessMessage>}
      <Input
        type="text"
        placeholder="Enter Blog Title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
      />
      <TextArea
        placeholder="Enter Blog Content"
        value={blog.content}
        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Enter User ID"
        value={blog.userId}
        onChange={(e) => setBlog({ ...blog, userId: parseInt(e.target.value) })}
      />
      <Button name="Update Blog" onClick={handleUpdateBlog}/>
    </UpdateBlogWrapper>
  );
};

export default UpdateBlog;
