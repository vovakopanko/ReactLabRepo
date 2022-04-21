import { useController } from "react-hook-form";
import {
  InputContainer,
  MessageError,
  InputName,
  InputField,
  FieldContainer,
  SecureImage,
} from "../styles";
import { InputProps } from "../types";
import image from "./../../../../assets/svgIcon/eyeIcon.svg";

function FormInput<T>({
  title,
  name,
  control,
  onHandler,
  ...rest
}: InputProps<T>) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control });
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
          />
          {onHandler && (
            <div onClick={onHandler}>
              <SecureImage src={image} />
            </div>
          )}
        </FieldContainer>
      </InputContainer>
      <MessageError>{error?.message}</MessageError>
    </>
  );
}

export default FormInput;
