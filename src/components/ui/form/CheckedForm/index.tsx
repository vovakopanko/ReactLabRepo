import { useState } from "react";
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
    field: { onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control });
  const [platform, setPlatform] = useState(imagePlatforms);
  return (
    <>
      <CheckedContainer>
        <CheckedTitleWrapper>
          <CheckedTitle>{title}</CheckedTitle>
        </CheckedTitleWrapper>
        <CheckedContent>
          {array.map((checkbox, index) => (
            <InputCheckBox
              onChange={onChange}
              onBlur={onBlur}
              key={index}
              checkbox={checkbox}
              platform={platform}
              setPlatform={setPlatform}
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
