import { useController } from "react-hook-form";
import {
  InputContainer,
  InputName,
  MessageError,
  TextAreaField,
} from "../styles";
import { TextAreaProps } from "../types";

function FormTextArea<T>({ title, name, control, ...rest }: TextAreaProps<T>) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <>
      <InputContainer>
        <InputName>{title} :</InputName>
        <TextAreaField
          {...rest}
          value={value as string}
          onChange={onChange}
          onBlur={onBlur}
        />
      </InputContainer>
      <MessageError>{error?.message}</MessageError>
    </>
  );
}

export default FormTextArea;
