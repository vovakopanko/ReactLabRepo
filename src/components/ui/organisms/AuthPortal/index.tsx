import ReactDOM from "react-dom";
import {
  AuthContainer,
  BackgroundContainer,
  HeaderContainer,
  HeaderName,
  ErrorMessage,
  ProfileForm,
  BtnSubmit,
} from "./styles";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { registerUser } from "@/api/AuthAPI";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  setAuthCurrentUser,
  setStatusAuthWindow,
  setStatusRegistrationWindow,
  updateUserInfo,
  updateUserPhoto,
} from "@/redux/reducers/auth";
import FormInput from "../../form/TextInput";
import { getScheme, initialFormData, FormValues } from "./scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { Data } from "@/api/AuthAPI/types";

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

  const authenticate = (data: Data) => {
    dispatch(updateUserInfo(data));
    dispatch(setAuthCurrentUser(true));
    dispatch(updateUserPhoto(data.photoUser));
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
          authenticate(response?.data.user!);
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
          authenticate(response?.data.user!);
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

  return ReactDOM.createPortal(
    <>
      <BackgroundContainer />
      <AuthContainer>
        <HeaderContainer>
          <HeaderName>{title}</HeaderName>
          <div
            onClick={() => {
              isRegistrationModal
                ? dispatch(setStatusRegistrationWindow(false))
                : dispatch(setStatusAuthWindow(false));
            }}
          >
            <CloseOutlined style={{ color: "red" }} />
          </div>
        </HeaderContainer>
        <ProfileForm onSubmit={handleSubmit(onSubmit)}>
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
            styleBtn={isValid}
          />
        </ProfileForm>
        <ErrorMessage>{invalidValue}</ErrorMessage>
      </AuthContainer>
    </>,
    document.getElementById("portal")!
  );
}
