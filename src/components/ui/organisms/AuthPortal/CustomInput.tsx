import { InputContainer, InputField, InputName } from "./styles";

const CustomInput = ({
  title,
  type,
  maxLength,
  minLength,
  uniqueType,
  register,
}: {
  register: any;
  title: string;
  type: string;
  uniqueType: string;
  maxLength: number;
  minLength: number;
}) => {
  return (
    <InputContainer>
      <InputName>{title} :</InputName>
      <InputField
        type={`${type}`}
        {...register(`${uniqueType}`, {
          required: true,
          minLength: {
            value: minLength,
            message: `Incorrect length password, min value : ${minLength} symbols`,
          },
          maxLength: {
            value: maxLength,
            message: `Incorrect length email, max value : ${maxLength} symbols`,
          },
        })}
      />
    </InputContainer>
  );
};

export default CustomInput;
