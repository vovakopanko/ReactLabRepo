import ReactDOM from "react-dom";
import {
  AuthContainer,
  BackgroundContainer,
  InputContainer,
  InputTitle,
  StyledNavLink,
} from "./styles";
import useInput from "../../../../hook/userInput/index";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { AuthProfileAPI } from "@/api/AuthAPI";
import { useEffect } from "react";
import { contentAPI } from "@/api/ContentAPI";

type Props = { title: string; type: string; id: number };

export default function AuthPortal({
  title,
  fields,
  modalForm,
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
  const [invalidValue, setInvalidValue] = useState("");
  const userEmail = useInput("", "email");
  const userPassword = useInput("", "password");
  const userRepeatPassword = useInput("", "repeatPassword");

  let upperCase = (value: string) => value[0].toUpperCase() + value.slice(1);

  const onPressSignUp = () => {
    AuthProfileAPI.loginUser(userEmail.value, userPassword.value)
      .then((response) => {
        if (response?.data.accessToken !== null) {
          setNameUser(userEmail.value.split("@", 1).toString());
          setIsAuth(true);
          setIsOpen(false);
        } else setIsAuth(false);
      })
      .catch(() => {
        setInvalidValue("Invalid password or login");
      });
  };

  const onPressSignIn = () => {
    AuthProfileAPI.registrationProfile(userEmail.value, userPassword.value)
      .then((response) => {
        if (response?.data.accessToken !== null) {
          setNameUser(userEmail.value.split("@", 1).toString());
          setIsAuth(true);
          setIsOpen(false);
        } else setIsAuth(false);
      })
      .catch(() => {
        setInvalidValue("Error connection!");
      });
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
              {...userEmail}
              name={fields[0].title}
              type={fields[0].type}
              placeholder="Enter your email ..."
              autoComplete="off"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>{upperCase(fields[1].title)}</InputTitle>
            <input
              {...userPassword}
              name={fields[1].title}
              type={fields[1].type}
              placeholder="Enter your password ..."
              autoComplete="off"
            />
          </InputContainer>
          <div style={{ color: "red", padding: 10, fontSize: 14 }}>
            {userPassword.passworderror}
          </div>
          {modalForm === "registration" && (
            <>
              <InputContainer>
                <InputTitle>{upperCase(fields[2].title)}</InputTitle>
                <input
                  {...userRepeatPassword}
                  name={fields[2].title}
                  type={fields[2].type}
                  placeholder="Repeat your password ..."
                  autoComplete="off"
                />
              </InputContainer>
              <div style={{ color: "red", padding: 10, fontSize: 14 }}>
                {userRepeatPassword.repeatpassworderror}
              </div>
            </>
          )}
        </div>
        <StyledNavLink to={"/profile"}>
          <button
            type="submit"
            onClick={() => {
              return modalForm === "registration"
                ? onPressSignIn()
                : onPressSignUp();
            }}
            disabled={
              modalForm === "registration" &&
              userPassword.value !== userRepeatPassword.value
            }
          >
            Submit
          </button>
        </StyledNavLink>
        <span style={{ color: "red", fontSize: 14, paddingTop: 10 }}>
          {invalidValue}
        </span>
      </AuthContainer>
    </>,
    document.getElementById("portal")!
  );
}
