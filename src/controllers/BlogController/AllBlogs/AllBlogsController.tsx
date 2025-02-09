import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Blog } from './types'; // Типы для данных блога
import { Container, BlogList, BlogCard } from './styles'; // Стилизованные компоненты

export const AllBlogController = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<Blog[]>('/api/blogs/all')
            .then(response => {
                setBlogs(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                setError('Ошибка при загрузке блогов: ' + err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <Container>
            <BlogList>
                {blogs.map(blog => (
                    <BlogCard key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </BlogCard>
                ))}
            </BlogList>
        </Container>
    );
};
