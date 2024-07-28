import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlogById } from 'services/blogService';
import { BlogCreateDTO } from './types';
import { SearchBlogsWrapper, Title, Input, ErrorMessage, BlogDetailWrapper, BlogTitle, BlogContent, BackButton } from './styles';
import Button from 'components/Button/Button';

const SearchBlogsById: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [blog, setBlog] = useState<BlogCreateDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
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
      setBlog(null);
    }
  };

  const handleBack = () => {
    navigate('/blogs');
  };

  return (
    <SearchBlogsWrapper>
      <Title>Search Blogs by ID</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Blog ID"
      />
      <Button name="Search Blog" onClick={handleSearch} />
      {blog && (
        <BlogDetailWrapper>
          <BlogTitle>{blog.title}</BlogTitle>
          <BlogContent>{blog.content}</BlogContent>
          <BackButton>
            <Button name="Back to All Blogs" onClick={handleBack} />
          </BackButton>
        </BlogDetailWrapper>
      )}
    </SearchBlogsWrapper>
  );
};

export default SearchBlogsById;
