import { useState, ChangeEvent } from "react";

export default function useInput(inputValue: string) {
  const [value, setValue] = useState(inputValue);
  // const [passwordVisited, setPasswordVisited] = useState(false);
  // const [repeatPasswordVisited, setRepeatPasswordVisited] = useState(false);
  // const [userNameVisited, setUserNameVisited] = useState(false);

  // const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
  //   switch (e.target.name) {
  //     case "email":
  //       setUserNameVisited(true);
  //       break;
  //     case "password":
  //       setPasswordVisited(true);
  //       break;
  //     case "repeat password":
  //       setRepeatPasswordVisited(true);
  //       break;
  //   }
  // };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
  //   blurHandler(e);
  // };

  return {
    value,
    onChange,
    // onBlur,
    // passwordVisited,
    // userNameVisited,
    // repeatPasswordVisited,
  };
}
