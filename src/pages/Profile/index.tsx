import { profileAPI } from "@/api/ProfileAPI";
import Button from "@/components/ui/atoms/NewButton";
import AuthRedirect from "@/hoc/withAuthRedirect";
import { updatePhotoUser } from "@/redux/reducers/auth";
import { setStatusChangePasswordWindow } from "@/redux/reducers/profile";
import { selectorUpdateUserInfo } from "@/redux/selectors/authSelector";
import { colors } from "@/styles/palette";
import { memo, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BottomLine,
  ContentBlock,
  ImageContainer,
  PhotoInput,
  PhotoInputContainer,
  ProfileContainer,
  ProfilePageContent,
  ProfileTitle,
  ImagePlatform,
} from "./styles";
import Info from "./components/Info";

const defaultPhoto =
  "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-12.jpg";

const Profile = () => {
  const { address, description, email, phoneNumber, photoUser, userName } =
    useSelector(selectorUpdateUserInfo);
  const dispatch = useDispatch();
  const [photoLink, setPhotoLink] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <AuthRedirect>
      <ProfileContainer>
        <ProfileTitle>Profile Page : {userName}</ProfileTitle>
        <BottomLine />
        <ProfilePageContent>
          <ContentBlock>
            <ImageContainer>
              <ImagePlatform
                src={photoUser || defaultPhoto}
                alt={"userPhoto"}
              />
            </ImageContainer>
            <>
              {photoLink ? (
                <Button
                  func={() => setPhotoLink(!photoLink)}
                  color={colors.PURPURE}
                  width={180}
                  title={"Change profile image"}
                />
              ) : (
                <>
                  <PhotoInputContainer>
                    <PhotoInput
                      type={"text"}
                      ref={inputRef}
                      placeholder={"add link here ..."}
                    />
                  </PhotoInputContainer>
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
          <Info
            address={address}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            userName={userName}
            description={description}
            email={email}
            phoneNumber={phoneNumber}
          />
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

export default memo(Profile);
