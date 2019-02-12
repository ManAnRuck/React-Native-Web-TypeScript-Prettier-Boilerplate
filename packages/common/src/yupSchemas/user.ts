import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3)
    .max(255)
    .email()
    .required(),
  password: yup
    .string()
    .min(3)
    .max(255)
    .required(),
});
