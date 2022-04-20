import OnClick from "@/components/ui/atoms/onClick";
import { colors } from "@/styles/palette";
import {
  ContentBlock,
  ImageContainer,
  PhotoInput,
  PhotoInputContainer,
  ImagePlatform,
} from "../../styles";
import { profileAPI } from "@/api/ProfileAPI";
import { updateUserPhoto } from "@/redux/reducers/auth";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { defaultPhoto } from "./constants";
import { Props } from "./types";

const Avatar = ({ photoUser, email }: Props) => {
  const [photoLink, setPhotoLink] = useState(true);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeAvatar = useCallback(() => {
    setPhotoLink((prevState) => !prevState);
    dispatch(updateUserPhoto(inputRef.current!.value));
    profileAPI.updateUserAvatar(email, inputRef.current!.value);
  }, [photoLink]);

  return (
    <ContentBlock>
      <ImageContainer>
        <ImagePlatform src={photoUser || defaultPhoto} alt={"userPhoto"} />
      </ImageContainer>
      <>
        {photoLink ? (
          <OnClick
            func={() => setPhotoLink((prevState) => !prevState)}
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
            <OnClick
              func={onChangeAvatar}
              color={colors.PURPURE}
              width={180}
              title={"Upload new avatar"}
            />
            <OnClick
              func={() => setPhotoLink(!photoLink)}
              color={colors.RED}
              width={180}
              title={"Close"}
            />
          </>
        )}
      </>
    </ContentBlock>
  );
};

export default Avatar;
