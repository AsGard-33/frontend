import { useFormik } from "formik";
import * as Yup from "yup";
import axios, { AxiosError } from "axios";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { RegisterFormValues } from "./types";
import { RegisterFormWrapper, RegisterFormTitle, InputsContainer } from "./styles";

function RegisterForm() {
  const schema = Yup.object().shape({
    username: Yup.string().required("Username is required").min(3, "Minimum number of symbols is 3"),
    email: Yup.string()
      .required("Email is required")
      .email("Does not match with email format"),
    password: Yup.string()
      .required("Password is required")
      .min(3, "The minimum length of the password should be 3")
      .max(20, "The maximum length of the password should be 20"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    } as RegisterFormValues,
    validationSchema: schema,
    onSubmit: async (values: RegisterFormValues, helpers) => {
      try {
        console.log("Submitting registration form", values);
        const response = await axios.post('/api/auth/register', values, { withCredentials: true });
        console.log("Registration successful", response.data);
        // Redirect or perform other actions upon successful registration
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 400) {
          helpers.setErrors({ email: "Registration failed. Please check your data." });
        } else {
          console.error("Registration error", axiosError);
        }
      }
    },
  });

  return (
    <RegisterFormWrapper onSubmit={formik.handleSubmit}>
      <RegisterFormTitle>Register Form</RegisterFormTitle>
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
    </RegisterFormWrapper>
  );
}

export default RegisterForm;
