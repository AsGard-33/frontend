import React, { useState } from 'react';
import axios from 'axios';
import { BlogDTO } from './types';
import { BlogWrapper, Input, Button, BlogDetail, ErrorMessage } from './styles';

const GetBlogById: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [blog, setBlog] = useState<BlogDTO | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetBlog = async () => {
    try {
      const response = await axios.get(`/api/blogs/${id}`);
      setBlog(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch blog');
    }
  };

  return (
    <BlogWrapper>
      <Input
        type="text"
        placeholder="Enter blog ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button onClick={handleGetBlog}>Get Blog</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {blog && (
        <BlogDetail>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </BlogDetail>
      )}
    </BlogWrapper>
  );
};

export default GetBlogById;
