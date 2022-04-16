import { profileAPI } from "@/api/ProfileAPI";
import FieldContainer, {
  FieldType,
} from "@/components/ui/atoms/FieldContainer";
import Button from "@/components/ui/atoms/NewButton";
import FormInput from "@/components/ui/form/TextInputProfile";
import {
  AuthForm,
  BtnSubmit,
} from "@/components/ui/organisms/AuthPortal/styles";
import AuthRedirect from "@/hoc/withAuthRedirect";
import {
  updateAddress,
  updateDescription,
  updateEmailUser,
  updatePhone,
  updatePhotoUser,
  updateUserName,
} from "@/redux/reducers/auth";
import { setStatusChangePasswordWindow } from "@/redux/reducers/profile";
import { selectorUpdateUserInfo } from "@/redux/selectors/authSelector";
import { colors } from "@/styles/palette";
import { useMemo, useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FormValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { getScheme, initialFormData } from "./scheme";
import {
  BottomLine,
  ContentBlock,
  ImageContainer,
  InfoContainer,
  InfoTitle,
  PhotoInput,
  PhotoInputContainer,
  ProfileContainer,
  ProfilePageContent,
  ProfileTitle,
  ImagePlatform,
} from "./styles";
import {
  defaultButton,
  disabledButton,
} from "@/components/ui/organisms/AuthPortal";

const Profile = () => {
  const { address, description, email, phoneNumber, photoUser, userName } =
    useSelector(selectorUpdateUserInfo);
  const dispatch = useDispatch();
  const [photoLink, setPhotoLink] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const scheme = useMemo(() => getScheme(), [isOpen]);

  const {
    control,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm<any>({
    mode: "onChange",
    defaultValues: initialFormData,
    resolver: yupResolver(scheme),
  });

  const fieldData: FieldType[] = [
    { id: 0, title: email, titleName: "Email :" },
    { id: 1, title: userName, titleName: "Nickname :" },
    { id: 2, title: description, titleName: "Profile description :" },
    { id: 3, title: address, titleName: "Address delivery :" },
    { id: 4, title: phoneNumber, titleName: "Phone number :" },
  ];

  const onPressSaveProfile = async ({
    email,
    userName,
    description,
    address,
    phoneNumber,
  }: FormValues) => {
    await profileAPI
      .updateUserInfo(email, userName, description, address, phoneNumber)
      ?.then((response) => {
        dispatch(updateEmailUser(response.candidate.email));
        dispatch(updateUserName(response.candidate.email));
        dispatch(updateUserName(response.candidate.userName));
        dispatch(updateAddress(response.candidate.address));
        dispatch(updatePhone(response.candidate.phoneNumber));
        dispatch(updateDescription(response.candidate.profileDescription));
      });
  };

  const onSubmit = async (dataForm: FormValues) => {
    const { email, userName, description, address, phoneNumber } = dataForm;
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
    <AuthRedirect>
      <ProfileContainer>
        <ProfileTitle>Profile Page : {userName}</ProfileTitle>
        <BottomLine />
        <ProfilePageContent>
          <ContentBlock>
            <ImageContainer>
              <ImagePlatform
                src={
                  photoUser
                    ? photoUser
                    : "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-12.jpg"
                }
                alt={"userPhoto"}
              />
            </ImageContainer>
            <>
              {!photoLink && (
                <PhotoInputContainer>
                  <PhotoInput
                    type={"text"}
                    ref={inputRef}
                    placeholder={"add link here ..."}
                  />
                </PhotoInputContainer>
              )}
              {photoLink ? (
                <Button
                  func={() => setPhotoLink(!photoLink)}
                  color={colors.PURPURE}
                  width={180}
                  title={"Change profile image"}
                />
              ) : (
                <>
                  <Button
                    func={() => {
                      setPhotoLink(!photoLink);
                      dispatch(updatePhotoUser(inputRef.current!.value));
                      profileAPI.updateUserAvatar(
                        email,
                        inputRef.current!.value
                      );
                    }}
                    color={colors.PURPURE}
                    width={180}
                    title={"Upload new avatar"}
                  />
                  <Button
                    func={() => setPhotoLink(!photoLink)}
                    color={colors.RED}
                    width={180}
                    title={"Close"}
                  />
                </>
              )}
            </>
          </ContentBlock>
          <ContentBlock>
            {isOpen ? (
              <InfoContainer>
                <InfoTitle>General: </InfoTitle>
                {fieldData.map((data: FieldType, index) => (
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
                    maxLength={25}
                    minLength={7}
                    placeholder={userName}
                  />
                  <FormInput
                    control={control}
                    name={"description"}
                    title={"Profile description"}
                    uniqueType={"description"}
                    type={"textarea"}
                    maxLength={30}
                    minLength={5}
                  />
                  <FormInput
                    control={control}
                    name={"address"}
                    title={"Address delivery"}
                    uniqueType={"address"}
                    type={"text"}
                    maxLength={30}
                    minLength={5}
                    placeholder={address}
                  />
                  <FormInput
                    control={control}
                    name={"phoneNumber"}
                    title={"Phone number"}
                    uniqueType={"phoneNumber"}
                    type={"number"}
                    required
                    maxLength={30}
                    minLength={5}
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
          <ContentBlock>
            <Button
              title={"Change password"}
              color={colors.PURPURE}
              width={180}
              func={() => dispatch(setStatusChangePasswordWindow(true))}
            />
            {isOpen && (
              <Button
                title={"Change data"}
                color={colors.PURPURE}
                width={180}
                func={() => setIsOpen(!isOpen)}
              />
            )}
          </ContentBlock>
        </ProfilePageContent>
      </ProfileContainer>
    </AuthRedirect>
  );
};

export default Profile;
