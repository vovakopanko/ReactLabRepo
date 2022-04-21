import { useController } from "react-hook-form";
import { InputContainer, MessageError, InputName, InputField } from "../styles";
import { InputProps } from "../types";

function FormInput<T>({ title, name, control, ...rest }: InputProps<T>) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control });
  return (
    <>
      <InputContainer>
        <InputName>{title} :</InputName>
        <InputField
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

export default FormInput;
