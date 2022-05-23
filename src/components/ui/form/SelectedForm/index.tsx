import { useController } from "react-hook-form";
import { MessageError } from "../styles";
import { SelectedProps } from "../types";
import { SelectedContainer, SortContainer, InputName } from "./../styles";

function FormSelected<T>({ title, name, array, control }: SelectedProps<T>) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control });
  return (
    <>
      <SortContainer>
        <InputName>{title}:</InputName>
        <SelectedContainer
          value={value as number}
          onChange={onChange}
          onBlur={onBlur}
        >
          {array.map((option) => (
            <option value={option.value} key={option.titleName}>
              {option.titleName}
            </option>
          ))}
        </SelectedContainer>
      </SortContainer>
      <MessageError>{error?.message}</MessageError>
    </>
  );
}

export default FormSelected;
