import ReactDOM from "react-dom";
import {
  AuthContainer,
  BackgroundContainer,
  HeaderContainer,
  HeaderName,
  InputBlock,
  ErrorMessage,
  AuthForm,
  BtnSubmit,
} from "./styles";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { AuthProfileAPI } from "@/api/AuthAPI";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { colors } from "@/styles/palette";
import CustomInput from "./CustomInput";
import FormMessageError from "./FormMessageError";
import { useDispatch } from "react-redux";
import {
  getAuthCurrentUser,
  getStatusAuthWindow,
  getStatusRegistrationWindow,
  updateUserName,
} from "@/redux/reducers/auth";

type Props = {
  title: string;
  type: string;
  id: number;
};

export default function AuthPortal({
  title,
  modalForm,
}: {
  title: string;
  fields: Props[];
  isOpen: boolean;
  modalForm: string;
}) {
  const [invalidValue, setInvalidValue] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const isRegistrationModal = modalForm === "registration";

  useEffect(() => {
    if (email && password)
      isRegistrationModal ? onPressSignIn() : onPressSignUp();
  }, [email, password]);

  const onPressSignUp = () => {
    AuthProfileAPI.loginUser(email, password)
      .then((response) => {
        if (response?.data.accessToken !== null) {
          dispatch(updateUserName(email.split("@", 1).toString()));
          dispatch(getAuthCurrentUser(true));
          dispatch(getStatusAuthWindow(false));
        } else dispatch(getAuthCurrentUser(false));
      })
      .catch((errors) => {
        setInvalidValue(errors.message);
      });
  };

  const onSubmit: SubmitHandler<FieldValues> = (dataForm) => {
    setEmail(dataForm.email);
    setPassword(dataForm.password);
    setRepeatPassword(dataForm.duplicatePassword);
    reset();
  };

  const onPressSignIn = () => {
    AuthProfileAPI.registrationProfile(email, password)
      .then((response) => {
        if (response?.data.accessToken !== null) {
          dispatch(updateUserName(email.split("@", 1).toString()));
          dispatch(getAuthCurrentUser(true));
          dispatch(getStatusRegistrationWindow(false));
        } else dispatch(getAuthCurrentUser(false));
      })
      .catch((errors) => {
        setInvalidValue(errors.message);
      });
  };

  const AuthForms = () => {
    return (
      <InputBlock style={{ justifyContent: "flex-start" }}>
        <AuthForm
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomInput
            register={register}
            title={"Email"}
            type={"text"}
            uniqueType={"email"}
            maxLength={25}
            minLength={7}
          />
          {errors?.email && (
            <FormMessageError errorMessage={errors?.email.message} />
          )}
          <CustomInput
            register={register}
            title={"Password"}
            uniqueType={"password"}
            type={"password"}
            maxLength={30}
            minLength={5}
          />
          {errors?.password && (
            <FormMessageError errorMessage={errors?.password.message} />
          )}
          {isRegistrationModal && (
            <>
              <CustomInput
                register={register}
                title={"Repeat password"}
                uniqueType={"duplicatePassword"}
                type={"password"}
                maxLength={30}
                minLength={5}
              />
              {errors?.duplicatePassword && (
                <FormMessageError
                  errorMessage={errors?.duplicatePassword.message}
                />
              )}
            </>
          )}
          <BtnSubmit
            color={!isValid ? colors.GRAY : colors.RED}
            type="submit"
            value={isRegistrationModal ? "Sign In" : "Continue"}
            disabled={
              !isValid && isRegistrationModal && password !== repeatPassword
            }
            style={{
              backgroundColor: !isValid ? colors.GRAY : colors.RED,
              color: !isValid ? colors.BLACK : colors.WHITE,
              opacity: !isValid ? 0.3 : 1,
            }}
          />
        </AuthForm>
      </InputBlock>
    );
  };

  return ReactDOM.createPortal(
    <>
      <BackgroundContainer />
      <AuthContainer>
        <HeaderContainer>
          <HeaderName>{title}</HeaderName>
          <div
            style={{ textAlign: "center" }}
            onClick={() => {
              isRegistrationModal
                ? dispatch(getStatusRegistrationWindow(false))
                : dispatch(getStatusAuthWindow(false));
            }}
          >
            <CloseOutlined style={{ color: "red" }} />
          </div>
        </HeaderContainer>
        <AuthForms />
        <ErrorMessage>{invalidValue}</ErrorMessage>
      </AuthContainer>
    </>,
    document.getElementById("portal")!
  );
}
