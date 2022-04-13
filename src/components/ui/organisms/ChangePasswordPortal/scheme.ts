import * as yup from "yup";

export type FormValues = {
  password: string;
  repeatPassword: string;
};

export const initialFormData: FormValues = {
  password: "",
  repeatPassword: "",
};

export const getScheme = (isRegistration: boolean) =>
  yup.object().shape({
    password: yup
      .string()
      .required(`Field 'Password' is required `)
      .min(5, "Incorrect length password, min value : 5 symbols")
      .max(40, `Incorrect length password, max value : 40 symbols`),
    repeatPassword: yup.string().when("password", (_, field) =>
      isRegistration
        ? field
        : field
            .required(`Field 'Password' is required `)
            .min(5, "Incorrect length password, min value : 5 symbols")
            .max(40, `Incorrect length password, max value : 40 symbols`)
            .oneOf([yup.ref("password"), null], "Passwords must match")
    ),
  });
