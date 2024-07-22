// src/components/LoginForm/LoginForm.tsx
import { useFormik } from "formik";
import * as Yup from "yup";
import axios, { AxiosError } from "axios";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { LoginFormValues } from "./types";
import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles";

function LoginForm() {
  const schema = Yup.object().shape({
    username: Yup.string().required("Username is required").min(3, "Minimum number of symbols is 3"),
    password: Yup.string()
      .strict()
      .required("Password is required")
      .min(3, "The minimum length of the password should be 3")
      .max(20, "The maximum length of the password should be 20"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    } as LoginFormValues,
    validationSchema: schema,
    onSubmit: async (values: LoginFormValues, helpers) => {
      try {
        console.log("Submitting login form", values);
        const response = await axios.post('/api/auth/login', values, { withCredentials: true });
        console.log("Login successful", response.data);
        // Redirect or perform other actions upon successful login
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 401) {
          helpers.setErrors({ password: "Invalid username or password" });
        } else {
          console.error("Login error", axiosError);
        }
      }
    },
  });

  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login Form</LoginFormTitle>
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
          value={formik.values.password}
          onChange={formik.handleChange}
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
