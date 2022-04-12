import ReactDOM from "react-dom";
import {
  AuthContainer,
  BackgroundContainer,
  HeaderContainer,
  HeaderName,
  ErrorMessage,
  AuthForm,
  BtnSubmit,
} from "./styles";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { registerUser } from "@/api/AuthAPI";
import { useForm } from "react-hook-form";
import { colors } from "@/styles/palette";
import { useDispatch } from "react-redux";
import {
  setAuthCurrentUser,
  setStatusAuthWindow,
  setStatusRegistrationWindow,
  updateUserName,
} from "@/redux/reducers/auth";
import FormInput from "../../form/TextInput";
import { getScheme, initialFormData, FormValues } from "./scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";

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
  modalForm: string;
}) {
  const [invalidValue, setInvalidValue] = useState("");
  const dispatch = useDispatch();

  const isRegistrationModal = modalForm === "registration";

  const scheme = useMemo(
    () => getScheme(!isRegistrationModal),
    [isRegistrationModal]
  );

  const {
    control,
    formState: { isValid, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: initialFormData,
    resolver: yupResolver(scheme),
  });

  const authenticate = (email: string) => {
    dispatch(updateUserName(email.split("@", 1).toString()));
    dispatch(setAuthCurrentUser(true));
    if (isRegistrationModal) {
      dispatch(setStatusRegistrationWindow(false));
    } else dispatch(setStatusAuthWindow(false));
  };

  const onPressSignUp = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await registerUser
      .loginUser(email, password)
      .then((response) => {
        if (response?.data.accessToken !== null) {
          authenticate(email);
        } else dispatch(setAuthCurrentUser(false));
      })
      .catch((errors) => {
        setInvalidValue(errors.message);
      });
  };

  const onPressSignUp1 = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await registerUser
      .registrationProfile(email, password)
      .then((response) => {
        if (response?.data.accessToken !== null) {
          authenticate(email);
        } else dispatch(setAuthCurrentUser(false));
      })
      .catch((errors) => {
        setInvalidValue(errors.message);
      });
  };

  const onSubmit = async (dataForm: FormValues) => {
    const { email, password } = dataForm;
    if (!isRegistrationModal) {
      await onPressSignUp({ email, password });
    } else {
      await onPressSignUp1({ email, password });
    }
    reset();
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
                ? dispatch(setStatusRegistrationWindow(false))
                : dispatch(setStatusAuthWindow(false));
            }}
          >
            <CloseOutlined style={{ color: "red" }} />
          </div>
        </HeaderContainer>
        {false ? (
          <div>
            <p style={{ color: colors.WHITE, fontSize: 25 }}>Loading....</p>
          </div>
        ) : (
          <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              control={control}
              name={"email"}
              title={"Email"}
              type={"text"}
              uniqueType={"email"}
              maxLength={25}
              minLength={7}
            />
            <FormInput
              control={control}
              name={"password"}
              title={"Password"}
              uniqueType={"password"}
              type={"password"}
              maxLength={30}
              minLength={5}
            />
            {isRegistrationModal && (
              <FormInput
                control={control}
                name={"duplicatePassword"}
                title={"Repeat password"}
                uniqueType={"duplicatePassword"}
                type={"password"}
                maxLength={30}
                minLength={5}
              />
            )}
            <BtnSubmit
              color={!isValid ? colors.GRAY : colors.RED}
              type="submit"
              value={isRegistrationModal ? "Sign In" : "Continue"}
              disabled={!isValid && isRegistrationModal && isSubmitting}
              style={{
                backgroundColor: !isValid ? colors.GRAY : colors.RED,
                color: !isValid ? colors.BLACK : colors.WHITE,
                opacity: !isValid ? 0.3 : 1,
              }}
            />
          </AuthForm>
        )}
        <ErrorMessage>{invalidValue}</ErrorMessage>
      </AuthContainer>
    </>,
    document.getElementById("portal")!
  );
}
