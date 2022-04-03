import ReactDOM from "react-dom";
import {
  AuthContainer,
  BackgroundContainer,
  InputContainer,
  InputTitle,
} from "./styles";
// import { ChangeEvent, useState } from "react";
// import { useEffect } from "react";
import useInput from "../../../../hook/userInput/index";
import { CloseOutlined } from "@ant-design/icons";

type Props = { title: string; type: string; id: number };

//  const useInput = (initialValue) => {
//     const [value, setValue] = useState(initialValue);
//     const [isDirty, setDirty] = useState(false);
//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//       setValue(e.target.value);
//     };

//     const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
//       setDirty(true);
//     };

//     return {
//       value,
//       onChange,
//       onBlur,
//     };
//   };

export default function AuthPortal({
  title,
  fields,
  modalForm,
  isOpen,
  setIsOpen,
  setIsAuth,
  setNameUser,
}: {
  title: string;
  fields: Props[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  modalForm: string;
  setIsAuth: (value: boolean) => void;
  setNameUser: (val: string) => void;
}) {
  const userEmail = useInput("");
  const userPassword = useInput("");
  const userRepeatPassword = useInput("");
  let upperCase = (value: string) => value[0].toUpperCase() + value.slice(1);

  if (!isOpen) return null;

  // const [userNameVisited, setUserNameVisited] = useState(false);
  // const [passwordVisited, setPasswordVisited] = useState(false);
  // const [passwordRepeatVisited, setPasswordRepeatVisited] = useState(false);
  // const [userNameError, setUserNameError] = useState(
  //   "Field user name do not can empty..."
  // );
  // const [passwordError, setPasswordError] = useState(
  //   "Field password do not can empty..."
  // );
  // const [formValid, setFormValid] = useState(false);

  // useEffect(() => {
  //   if (userNameError || passwordError) {
  //     setFormValid(false);
  //   } else setFormValid(true);
  // }, [userNameError, passwordError]);

  // const userNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  //   setUserNameError("");
  // };

  // const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  //   if (e.target.value.length < 7) {
  //     setPasswordError(
  //       `Incorrect length password, min value : 7 , your value ${e.target.value.length}`
  //     );
  //     if (!e.target.value) {
  //       setPasswordError("Field password do not can empty...");
  //     }
  //   } else if (e.target.value.length > 40) {
  //     setPasswordError(
  //       `Incorrect length password, max value : 40 , your value ${e.target.value.length}`
  //     );
  //     if (!e.target.value) {
  //       setPasswordError("Field password do not can empty...");
  //     }
  //   } else {
  //     setPasswordError("");
  //   }
  // };

  // const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
  //   switch (e.target.name) {
  //     case "email":
  //       setUserNameVisited(true);
  //       break;
  //     case "password":
  //       setPasswordVisited(true);
  //       break;
  //     case "repeat password":
  //       setPasswordRepeatVisited(true);
  //       break;
  //   }
  // };

  const a = () => {
    setIsOpen(false);
    setIsAuth(true);
    setNameUser(userEmail.value.split("@", 1).toString());
  };

  return ReactDOM.createPortal(
    <>
      <BackgroundContainer />
      <AuthContainer>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <h1
            style={{
              color: "red",
              width: "90%",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {title}
          </h1>
          <div onClick={() => setIsOpen(false)}>
            <CloseOutlined style={{ color: "red" }} />
          </div>
        </div>

        <div style={{ justifyContent: "center" }}>
          <InputContainer>
            <InputTitle>{upperCase(fields[0].title)}</InputTitle>
            <input
              name={fields[0].title}
              type={fields[0].type}
              {...userEmail}
              placeholder="Enter your email ..."
              autoComplete="off"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>{upperCase(fields[1].title)}</InputTitle>
            <input
              name={fields[1].title}
              type={fields[1].type}
              {...userPassword}
              placeholder="Enter your password ..."
              autoComplete="off"
            />
          </InputContainer>
          {modalForm === "registration" && (
            <InputContainer>
              <InputTitle>{upperCase(fields[2].title)}</InputTitle>
              <input
                name={fields[2].title}
                type={fields[2].type}
                {...userRepeatPassword}
                placeholder="Repeat your password ..."
                autoComplete="off"
              />
            </InputContainer>
          )}
        </div>
        {/* {userNameVisited && userNameError && (
          <div style={{ color: "red", padding: 20 }}>{userNameError}</div>
        )}
        {passwordVisited && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        {passwordRepeatVisited && passwordError && (
          <div style={{ color: "red", padding: 20 }}>{userNameError}</div>
        )} */}
        <button
          style={{ marginTop: 20 }}
          type="submit"
          onClick={() => {
            return modalForm === "registration"
              ? a()
              : // AuthProfileAPI.registrationProfile(
                //     userEmail.value,
                //     userPassword.value
                //   ).then((Response) => {
                //     try {
                //       Response.data.accessToken !== null && setIsOpen(false);
                //     } catch (e) {
                //       console.error(e);
                //     }
                //   })
                a();

            // AuthProfileAPI.loginUser(
            //   userEmail.value,
            //   userPassword.value
            // ).then((Response) => {
            //   if (Response.data.accessToken !== null) {
            //     setIsOpen(false);
            //   } else null;
            // });
          }}
          disabled={
            modalForm === "registration" &&
            userPassword.value !== userRepeatPassword.value
          }
        >
          Submit
        </button>
      </AuthContainer>
    </>,
    document.getElementById("portal")
  );
}
