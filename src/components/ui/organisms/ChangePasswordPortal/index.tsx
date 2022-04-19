import ReactDOM from "react-dom";
import {
  AuthContainer,
  BackgroundContainer,
  HeaderContainer,
  HeaderName,
  ProfileForm,
  BtnSubmit,
  ErrorMessage,
} from "./styles";
import { CloseOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../form/TextInput";
import { initialFormData, FormValues, scheme } from "./scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { setStatusChangePasswordWindow } from "@/redux/reducers/profile";
import { registerUser } from "@/api/AuthAPI";
import { selectEmailUser } from "@/redux/selectors/authSelector";
import { defaultButton, disabledButton } from "../../atoms/onClick/constant";

type Props = {
  title: string;
  type: string;
  id: number;
};

export default function ChangePasswordPortal({
  title,
}: {
  title: string;
  fields: Props[];
}) {
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
    // await dispatch(setStatusChangePasswordWindow(false));
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
      .then(() => dispatch(setStatusChangePasswordWindow(false)))
      .catch(() => {
        dispatch(setStatusChangePasswordWindow(true));
        setInvalidValue("Invalid current password");
      });
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
              dispatch(setStatusChangePasswordWindow(false));
            }}
          >
            <CloseOutlined style={{ color: "red" }} />
          </div>
        </HeaderContainer>
        <ProfileForm onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            control={control}
            name={"currentPassword"}
            title={"Current Password"}
            uniqueType={"currentPassword"}
            type={"password"}
          />
          <FormInput
            control={control}
            name={"password"}
            title={"Password"}
            uniqueType={"password"}
            type={"password"}
          />
          <FormInput
            control={control}
            name={"repeatPassword"}
            title={"Repeat password"}
            uniqueType={"repeatPassword"}
            type={"password"}
          />
          <BtnSubmit
            type="submit"
            value={"Submit"}
            disabled={!isValid && isSubmitting}
            {...buttonStyle}
          />
        </ProfileForm>
        <ErrorMessage>{invalidValue}</ErrorMessage>
      </AuthContainer>
    </>,
    document.getElementById("changePassword")!
  );
}
