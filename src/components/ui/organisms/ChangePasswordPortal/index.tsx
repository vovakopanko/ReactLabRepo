import ReactDOM from "react-dom";
import {
  AuthContainer,
  BackgroundContainer,
  HeaderContainer,
  HeaderName,
  ProfileForm,
  ErrorMessage,
  CloseBtnContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../form/TextInput";
import { initialFormData, FormValues, scheme } from "./scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { onStatusPasswordChange } from "@/redux/reducers/profile";
import { registerUser } from "@/api/AuthAPI";
import { selectEmailUser } from "@/redux/selectors/authSelector";
import { BtnSubmit, CloseOutlined } from "../AuthPortal/styles";
import image from "./../../../../assets/svgIcon/closeBtn.svg";

export default function ChangePasswordPortal({ title }: { title: string }) {
  const [invalidValue, setInvalidValue] = useState("");
  const dispatch = useDispatch();
  const emailUser = useSelector(selectEmailUser);

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

  const onSubmit = async (dataForm: FormValues) => {
    const { password, currentPassword } = dataForm;
    changeUserPassword({ emailUser, password, currentPassword });
    reset();
  };

  const changeUserPassword = async ({
    emailUser,
    password,
    currentPassword,
  }: {
    emailUser: string;
    password: string;
    currentPassword: string;
  }) => {
    await registerUser
      .changePassword(emailUser, password, currentPassword)
      .then(() => dispatch(onStatusPasswordChange(false)))
      .catch(() => {
        dispatch(onStatusPasswordChange(true));
        setInvalidValue("Invalid current password");
      });
  };

  const onSetStatusChangePassword = useCallback(() => {
    dispatch(onStatusPasswordChange(false));
  }, []);

  return ReactDOM.createPortal(
    <>
      <BackgroundContainer />
      <AuthContainer>
        <HeaderContainer>
          <HeaderName>{title}</HeaderName>
          <CloseBtnContainer onClick={onSetStatusChangePassword}>
            <CloseOutlined src={image} />
          </CloseBtnContainer>
        </HeaderContainer>
        <ProfileForm onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            control={control}
            name={"currentPassword"}
            title={"Current Password"}
            uniqueType={"currentPassword"}
            type="password"
            isDisplayEye={true}
          />
          <FormInput
            control={control}
            name={"password"}
            title={"Password"}
            uniqueType={"password"}
            type="password"
            isDisplayEye={true}
          />
          <FormInput
            control={control}
            name={"repeatPassword"}
            title={"Repeat password"}
            uniqueType={"repeatPassword"}
            type="password"
            isDisplayEye={true}
          />
          <BtnSubmit
            type="submit"
            value={"Submit"}
            disabled={!isValid && isSubmitting}
            styleBtn={isValid}
          />
        </ProfileForm>
        <ErrorMessage>{invalidValue}</ErrorMessage>
      </AuthContainer>
    </>,
    document.getElementById("changePassword")!
  );
}
