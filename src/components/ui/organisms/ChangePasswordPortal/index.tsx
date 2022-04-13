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
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import FormInput from "../../form/TextInput";
import { getScheme, initialFormData, FormValues } from "./scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { colors } from "../../../../styles/palette";
import { setStatusChangePasswordWindow } from "@/redux/reducers/auth";

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

export default function ChangePasswordPortal({
  title,
  modalForm,
}: {
  title: string;
  fields: Props[];
  modalForm: string;
}) {
  const [invalidValue, setInvalidValue] = useState("");
  const dispatch = useDispatch();
  const isChangePassword = modalForm === "changePassword";

  const scheme = useMemo(
    () => getScheme(!isChangePassword),
    [isChangePassword]
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

  const onSubmit = async (dataForm: FormValues) => {
    const { repeatPassword, password } = dataForm;
    console.log("repeatPassword", repeatPassword, password, "password");
    await dispatch(setStatusChangePasswordWindow(false));
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
              dispatch(setStatusChangePasswordWindow(false));
            }}
          >
            <CloseOutlined style={{ color: "red" }} />
          </div>
        </HeaderContainer>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <>
            <FormInput
              control={control}
              name={"password"}
              title={"Password"}
              uniqueType={"password"}
              type={"password"}
              maxLength={30}
              minLength={5}
            />
            <FormInput
              control={control}
              name={"repeatPassword"}
              title={"Repeat password"}
              uniqueType={"repeatPassword"}
              type={"password"}
              maxLength={30}
              minLength={5}
            />
          </>

          <BtnSubmit
            type="submit"
            value={"Submit111"}
            disabled={!isValid && isChangePassword && isSubmitting}
            {...buttonStyle}
          />
        </AuthForm>
        <ErrorMessage>{invalidValue}</ErrorMessage>
      </AuthContainer>
    </>,
    document.getElementById("changePassword")!
  );
}
