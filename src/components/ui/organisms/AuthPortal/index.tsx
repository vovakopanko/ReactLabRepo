import ReactDOM from "react-dom";
import {
  AuthContainer,
  BackgroundContainer,
  HeaderContainer,
  HeaderName,
  ErrorMessage,
  ProfileForm,
  BtnSubmit,
  CloseOutlined,
} from "./styles";
import image from "./../../../../assets/svgIcon/incorrect.svg";
import { useCallback, useState } from "react";
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
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowRepeatPassword, setIsShowRepeatPassword] = useState(false);
  const isRegistrationModal = modalForm === "registration";

  const scheme = useMemo(
    () => getScheme(!isRegistrationModal),
    [isRegistrationModal]
  );

  const onHandlerShowPassword = useCallback(() => {
    setIsShowPassword(!isShowPassword);
  }, [isShowPassword]);

  const onHandlerShowRepeatPassword = useCallback(() => {
    setIsShowRepeatPassword(!isShowRepeatPassword);
  }, [isShowRepeatPassword]);

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
            <CloseOutlined src={image} />
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
            type={isShowPassword ? "text" : "password"}
            maxLength={30}
            minLength={5}
            isDisplayEye={true}
          />
          {isRegistrationModal && (
            <FormInput
              control={control}
              name={"duplicatePassword"}
              title={"Repeat password"}
              uniqueType={"duplicatePassword"}
              type={isShowRepeatPassword ? "text" : "password"}
              maxLength={30}
              minLength={5}
              isDisplayEye={true}
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
