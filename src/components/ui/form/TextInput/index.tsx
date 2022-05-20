import { useCallback, useState } from "react";
import { useController } from "react-hook-form";
import {
  InputContainer,
  MessageError,
  InputName,
  InputField,
  FieldContainer,
  SecureImage,
  SecureContainer,
} from "../styles";
import { InputProps } from "../types";
import showPassword from "@/assets/svgIcon/showPassword.svg";
import hidePassword from "@/assets/svgIcon/hidePassword.svg";

function FormInput<T>({
  title,
  name,
  control,
  isDisplayEye,
  ...rest
}: InputProps<T>) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleIsShowPassword = useCallback(
    () => setIsShowPassword((prevState) => !prevState),
    []
  );

  return (
    <>
      <InputContainer>
        <InputName>{title} :</InputName>
        <FieldContainer>
          <InputField
            {...rest}
            value={value as string}
            onChange={onChange}
            onBlur={onBlur}
            type={
              rest.type === "text" || rest.type === "number"
                ? rest.type
                : isShowPassword
                ? "text"
                : "password"
            }
          />
          <SecureContainer
            onClick={toggleIsShowPassword}
            isDisplayEye={isDisplayEye!}
          >
            <SecureImage src={isShowPassword ? showPassword : hidePassword} />
          </SecureContainer>
        </FieldContainer>
      </InputContainer>
      <MessageError>{error?.message}</MessageError>
    </>
  );
}

export default FormInput;
