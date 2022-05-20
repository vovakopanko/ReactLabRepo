import Button from "@/components/ui/atoms/Button";
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
          <Button
            onClick={() => setPhotoLink((prevState) => !prevState)}
            width={180}
            title={"Change profile image"}
            type="secondary"
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
              onClick={onChangeAvatar}
              width={180}
              title={"Upload new avatar"}
              type="secondary"
            />
            <Button
              onClick={() => setPhotoLink(!photoLink)}
              width={180}
              title={"Close"}
              type={"primary"}
            />
          </>
        )}
      </>
    </ContentBlock>
  );
};

export default Avatar;
