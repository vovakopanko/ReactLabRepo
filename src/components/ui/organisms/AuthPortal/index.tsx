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

const defaultButton = {
  color: colors.RED,
  style: {
    backgroundColor: colors.RED,
    color: colors.WHITE,
  },
};

const disabledButton = {
  color: colors.RED,
  style: {
    backgroundColor: colors.GRAY,
    color: colors.BLACK,
    opacity: 0.3,
  },
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

  const onPressSignIn = async ({
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
      await onPressSignIn({ email, password });
    }
    reset();
  };

  const buttonStyle = isValid ? defaultButton : disabledButton;

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
            type="submit"
            value={isRegistrationModal ? "Sign In" : "Continue"}
            disabled={!isValid && isRegistrationModal && isSubmitting}
            {...buttonStyle}
          />
        </AuthForm>
        <ErrorMessage>{invalidValue}</ErrorMessage>
      </AuthContainer>
    </>,
    document.getElementById("portal")!
  );
}
