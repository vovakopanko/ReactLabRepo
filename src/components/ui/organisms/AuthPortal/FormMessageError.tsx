import { MessageError } from "./styles";

type errorMessage = {
  errorMessage: string;
};

const FormMessageError = ({ errorMessage }: errorMessage) => {
  return (
    <MessageError>
      {errorMessage || "The field is filled in incorrectly!"}
    </MessageError>
  );
};

export default FormMessageError;
