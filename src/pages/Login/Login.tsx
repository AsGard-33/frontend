import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { login } from 'services/authService';
import { LoginFormValues } from './types';
import { LoginWrapper, LoginTitle, InputsContainer } from './styles';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    } as LoginFormValues,
    validationSchema: schema,
    onSubmit: async (values: LoginFormValues, helpers) => {
      try {
        await login({ username: values.username, password: values.password });
        navigate('/profile');
      } catch (error) {
        helpers.setErrors({ username: 'Invalid username or password' });
      }
    },
  });

  return (
    <LoginWrapper onSubmit={formik.handleSubmit}>
      <LoginTitle>Login form</LoginTitle>
      <InputsContainer>
        <Input
          id="login-username"
          placeholder="Enter your username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Input
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginWrapper>
  );
};

export default Login;
