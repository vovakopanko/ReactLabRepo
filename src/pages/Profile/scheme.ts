import * as yup from "yup";
import { Props } from "./types";

export const initialFormData: Props = {
  userName: "",
  description: "",
  address: "",
  phoneNumber: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const scheme = yup.object().shape({
  userName: yup
    .string()
    .required(`Field 'UserName' is required `)
    .min(7, "Incorrect length UserName, min value : 7 symbols")
    .max(40, `Incorrect length UserName, max value : 40 symbols`),
  description: yup
    .string()
    .required(`Field 'Description' is required `)
    .min(7, "Incorrect length Description, min value : 7 symbols")
    .max(240, `Incorrect length Description, max value : 240 symbols`),
  address: yup
    .string()
    .required(`Field 'Address' is required `)
    .min(7, "Incorrect length Address, min value : 7 symbols")
    .max(120, `Incorrect length Address, max value : 120 symbols`),
  phoneNumber: yup
    .string()
    .required(`Field 'Phone number' is required `)
    .matches(phoneRegExp, "Phone number is not valid"),
});
