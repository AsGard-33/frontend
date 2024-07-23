import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { register } from 'services/authService';
import { RegisterFormValues } from './types';
import { RegisterWrapper, RegisterTitle, InputsContainer } from './styles';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    } as RegisterFormValues,
    validationSchema: schema,
    onSubmit: async (values: RegisterFormValues, helpers) => {
      try {
        await register({ username: values.username, email: values.email, password: values.password });
        navigate('/profile');
      } catch (error) {
        helpers.setErrors({ username: 'Failed to register' });
      }
    },
  });

  return (
    <RegisterWrapper onSubmit={formik.handleSubmit}>
      <RegisterTitle>Register form</RegisterTitle>
      <InputsContainer>
        <Input
          id="register-username"
          placeholder="Enter your username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Input
          id="register-email"
          placeholder="Enter your email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Input
          id="register-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button name="Register" type="submit" />
    </RegisterWrapper>
  );
};

export default Register;