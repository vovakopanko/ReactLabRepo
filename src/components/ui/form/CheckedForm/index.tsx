import { useController } from "react-hook-form";
import { MessageError } from "../styles";
import { CheckedFormProps } from "../types";
import InputCheckBox from "./InputCheckBox";
import {
  CheckedContainer,
  CheckedContent,
  CheckedTitle,
  CheckedTitleWrapper,
} from "./styles";

function CheckedForm<T>({
  title,
  name,
  array,
  control,
  imagePlatforms,
}: CheckedFormProps<T>) {
  const {
    fieldState: { error },
  } = useController({ name, control });
  return (
    <>
      <CheckedContainer>
        <CheckedTitleWrapper>
          <CheckedTitle>{title}</CheckedTitle>
        </CheckedTitleWrapper>
        <CheckedContent>
          {array.map((checkbox, index) => (
            <InputCheckBox
              key={index}
              checkbox={checkbox}
              isChecked={imagePlatforms.some(
                (platform) => platform.alt === checkbox.value
              )}
            />
          ))}
        </CheckedContent>
      </CheckedContainer>
      <MessageError>{error?.message}</MessageError>
    </>
  );
}

export default CheckedForm;
