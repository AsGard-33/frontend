import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from 'services/blogService';
import { BlogCreateDTO } from './types';
import { BlogDetailWrapper, Title, Content, ErrorMessage } from './styles';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogCreateDTO | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!id) {
          setError('Blog ID is required');
          return;
        }
        const blogData = await getBlogById(parseInt(id, 10));
        setBlog(blogData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch blog details');
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <BlogDetailWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {blog && (
        <>
          <Title>{blog.title}</Title>
          <Content>{blog.content}</Content>
        </>
      )}
    </BlogDetailWrapper>
  );
};

export default BlogDetail;
