import { useState, ChangeEvent } from "react";

export default function useInput(inputValue: string, type: string) {
  const [value, setValue] = useState(inputValue);
  const [passworderror, setPasswordError] = useState("");
  const [repeatpassworderror, setRepeatPasswordError] = useState("");

  const passwordHandler = (
    e: ChangeEvent<HTMLInputElement>,
    onHandler: any
  ) => {
    if (e.target.value.length < 7) {
      onHandler(
        `Incorrect length password, min value : 7 , your value ${e.target.value.length}`
      );
      if (!e.target.value) {
        onHandler("Field password do not can empty...");
      }
    } else if (e.target.value.length > 40) {
      onHandler(
        `Incorrect length password, max value : 40 , your value ${e.target.value.length}`
      );
      if (!e.target.value) {
        onHandler("Field password do not can empty...");
      }
      // } else if (value.search(/(?=.*[a-z])(?=.*[A-Z])/g) !== -1) {
      //   onHandler("Your password must contain at least one letter");
    } else onHandler("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === "password") {
      passwordHandler(e, setPasswordError);
      return setValue(e.target.value);
    } else if (type === "repeatPassword") {
      passwordHandler(e, setRepeatPasswordError);
      return setValue(e.target.value);
    } else return setValue(e.target.value);
  };

  return {
    value,
    onChange,
    passworderror,
    repeatpassworderror,
  };
}
