import * as yup from "yup";

export type FormValues = {
  email: string;
  password: string;
  duplicatePassword: string;
};

export const initialFormData: FormValues = {
  email: "",
  password: "",
  duplicatePassword: "",
};

export const getScheme = (isRegistration: boolean) =>
  yup.object().shape({
    email: yup
      .string()
      .required(`Field 'Email' is required `)
      .min(7, "Incorrect length email, min value : 7 symbols")
      .max(40, `Incorrect length email, max value : 40 symbols`),
    password: yup
      .string()
      .required(`Field 'Password' is required `)
      .min(5, "Incorrect length password, min value : 5 symbols")
      .max(40, `Incorrect length password, max value : 40 symbols`),
    duplicatePassword: yup.string().when("password", (_, field) =>
      isRegistration
        ? field
        : field
            .required(`Field 'Password' is required `)
            .min(5, "Incorrect length password, min value : 5 symbols")
            .max(40, `Incorrect length password, max value : 40 symbols`)
            .oneOf([yup.ref("password"), null], "Passwords must match")
    ),
  });
