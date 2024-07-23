import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserUpdateProps, UserUpdateFormValues } from './types';
import { UserUpdateWrapper, UserUpdateTitle, Input, Button, ErrorMessage } from './styles';

const UserUpdate: React.FC<UserUpdateProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState<UserUpdateFormValues>({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        setInitialValues({
          username: response.data.username,
          email: response.data.email,
          password: ''
        });
      } catch (err) {
        setError('Failed to load user data.');
      }
    };

    fetchUser();
  }, [id]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters')
    }),
    onSubmit: async (values) => {
      try {
        await axios.put(`/api/users/${id}`, values);
        setError(null);
        alert('User updated successfully');
      } catch (err) {
        setError('Failed to update user.');
      }
    }
  });

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <UserUpdateWrapper>
      <UserUpdateTitle>Update User</UserUpdateTitle>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <ErrorMessage>{formik.errors.username}</ErrorMessage>
        ) : null}
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}
        <Button type="submit">Update</Button>
      </form>
    </UserUpdateWrapper>
  );
};

export default UserUpdate;

