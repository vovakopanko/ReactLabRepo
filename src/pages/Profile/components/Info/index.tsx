import { profileAPI } from "@/api/ProfileAPI";
import FieldContainer from "@/components/ui/atoms/FieldContainer";
import { FieldType } from "@/components/ui/atoms/FieldContainer/types";
import OnClick from "@/components/ui/atoms/onClick";
import FormTextArea from "@/components/ui/form/TextArea";
import FormInput from "@/components/ui/form/TextInput";
import {
  ProfileForm,
  BtnSubmit,
} from "@/components/ui/organisms/AuthPortal/styles";
import { updateUserInfo } from "@/redux/reducers/auth";
import { colors } from "@/styles/palette";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { scheme } from "../../scheme";
import { ContentBlock, InfoContainer, InfoTitle } from "../../styles";
import { FormValues } from "../../types";
import { Field } from "./constants";
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

  const field: Field[] = [
    { id: 0, title: email, titleName: "Email :" },
    { id: 1, title: userName, titleName: "Nickname :" },
    { id: 2, title: description, titleName: "Profile description :" },
    { id: 3, title: address, titleName: "Address delivery :" },
    { id: 4, title: phoneNumber, titleName: "Phone number :" },
  ];

  const onPressSaveProfile = useCallback(
    async ({ userName, description, address, phoneNumber }: FormValues) => {
      await profileAPI
        .updateUserInfo(email, userName, description, address, phoneNumber)
        ?.then((response) => {
          dispatch(updateUserInfo(response.candidate));
        });
    },
    []
  );

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

  return (
    <ContentBlock>
      {isOpen ? (
        <InfoContainer>
          <InfoTitle>General: </InfoTitle>
          {field.map((data: FieldType, index: number) => (
            <FieldContainer
              key={data.id}
              title={data.title}
              titleName={data.titleName}
              index={index}
              lastIndex={field.length - 1}
            />
          ))}
        </InfoContainer>
      ) : (
        <>
          <ProfileForm onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              control={control}
              name={"userName"}
              title={"UserName"}
              type={"text"}
              uniqueType={"userName"}
              placeholder={userName}
            />
            <FormTextArea
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
              styleBtn={isValid}
            />
          </ProfileForm>
          <OnClick
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
