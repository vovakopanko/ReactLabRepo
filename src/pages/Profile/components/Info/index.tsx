import { profileAPI } from "@/api/ProfileAPI";
import FieldContainer, {
  FieldType,
} from "@/components/ui/atoms/FieldContainer";
import Button from "@/components/ui/atoms/NewButton";
import FormInput from "@/components/ui/form/TextInput";
import {
  defaultButton,
  disabledButton,
} from "@/components/ui/organisms/AuthPortal";
import {
  AuthForm,
  BtnSubmit,
} from "@/components/ui/organisms/AuthPortal/styles";
import { updateInfoUser } from "@/redux/reducers/auth";
import { colors } from "@/styles/palette";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { scheme } from "../../scheme";
import { ContentBlock, InfoContainer, InfoTitle } from "../../styles";
import { FormValues } from "../../types";
import { Props } from "./types";

const Info = ({
  setIsOpen,
  isOpen,
  address,
  description,
  email,
  phoneNumber,
  userName,
}: Props) => {
  const {
    control,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm<any>({
    mode: "onChange",
    defaultValues: {
      address,
      description,
      phoneNumber,
      userName,
    },
    resolver: yupResolver(scheme),
  });

  const dispatch = useDispatch();

  const fieldData: FieldType[] = [
    { id: 0, title: email, titleName: "Email :" },
    { id: 1, title: userName, titleName: "Nickname :" },
    { id: 2, title: description, titleName: "Profile description :" },
    { id: 3, title: address, titleName: "Address delivery :" },
    { id: 4, title: phoneNumber, titleName: "Phone number :" },
  ];

  const onPressSaveProfile = async ({
    userName,
    description,
    address,
    phoneNumber,
  }: FormValues) => {
    await profileAPI
      .updateUserInfo(email, userName, description, address, phoneNumber)
      ?.then((response) => {
        dispatch(updateInfoUser(response.candidate));
      });
  };

  const onSubmit = async (dataForm: FormValues) => {
    const { userName, description, address, phoneNumber } = dataForm;
    await onPressSaveProfile({
      email,
      userName,
      description,
      address,
      phoneNumber,
    });
    setIsOpen(!isOpen);
  };

  const buttonStyle = isValid ? defaultButton : disabledButton;
  return (
    <ContentBlock>
      {isOpen ? (
        <InfoContainer>
          <InfoTitle>General: </InfoTitle>
          {fieldData.map((data: FieldType, index: number) => (
            <FieldContainer
              key={data.id}
              title={data.title}
              titleName={data.titleName}
              index={index}
              lastIndex={fieldData.length - 1}
            />
          ))}
        </InfoContainer>
      ) : (
        <>
          <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              control={control}
              name={"userName"}
              title={"UserName"}
              type={"text"}
              uniqueType={"userName"}
              placeholder={userName}
            />
            <FormInput
              control={control}
              name={"description"}
              title={"Profile description"}
              uniqueType={"description"}
              type={"textarea"}
            />
            <FormInput
              control={control}
              name={"address"}
              title={"Address delivery"}
              uniqueType={"address"}
              defaultValue={"abdbd"}
              type={"text"}
              placeholder={address}
            />
            <FormInput
              control={control}
              name={"phoneNumber"}
              title={"Phone number"}
              uniqueType={"phoneNumber"}
              type={"number"}
              required
            />
            <BtnSubmit
              type="submit"
              value={"Save Profile"}
              disabled={!isValid && isSubmitting}
              {...buttonStyle}
            />
          </AuthForm>
          <Button
            title={"Close"}
            color={colors.RED}
            width={180}
            func={() => setIsOpen(!isOpen)}
          />
        </>
      )}
    </ContentBlock>
  );
};

export default Info;
