import { colors } from "@/styles/palette";
import { InputHTMLAttributes } from "react";
import { FieldPath, useController, Control } from "react-hook-form";
import styled from "styled-components";

type InputBaseProps = InputHTMLAttributes<HTMLInputElement>;

type InputProps<T> = {
  uniqueType: string;
} & InputBaseProps &
  HookFormPropsBase<T>;

type HookFormPropsBase<T> = {
  control: Control<T>;
  name: FieldPath<T>;
};

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
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </InputContainer>
      <MessageError>{error?.message}</MessageError>
    </>
  );
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
`;

export const TextAreaField = styled.textarea`
  display: block;
  width: 50%;
  min-width: 150px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14;
`;

export const InputName = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 2px;
  margin-top: 5px;
  font-size: 14;
  font-weight: 500;
  color: ${colors.WHITE};
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const InputField = styled.input`
  display: block;
  width: 50%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14;
`;

export const MessageError = styled.span`
  color: red;
  width: 80%;
  padding: 5;
`;

export default FormInput;
