import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({

    email: yup
      .string()
      .email("This field must be email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])/,
        "Must Contain 8 Characters, One Uppercase and One Number "
      )
  })
  .required();
