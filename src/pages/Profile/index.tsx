import Button from "@/components/ui/atoms/NewButton";
import AuthRedirect from "@/hoc/withAuthRedirect";
import { setStatusChangePasswordWindow } from "@/redux/reducers/profile";
import { selectorUserName } from "@/redux/selectors/authSelector";
import { colors } from "@/styles/palette";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Profile = () => {
  const userName = useSelector(selectorUserName);
  const dispatch = useDispatch();
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
                  "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-12.jpg"
                }
                alt={"userPhoto"}
              />
            </ImageContainer>
            <Button
              title={"Change profile image"}
              color={colors.PURPURE}
              width={180}
            />
          </ContentBlock>
          <ContentBlock>
            <InputContainer>
              <InputName>UserName :</InputName>
              <InputField
                onChange={() => {}}
                onBlur={() => {}}
                autoComplete={"off"}
                autoCapitalize={"off"}
              />
              <InputName>Profile description :</InputName>
              <InputField
                type={"placeholder"}
                onChange={() => {}}
                onBlur={() => {}}
                autoComplete={"off"}
                autoCapitalize={"off"}
                style={{
                  minHeight: 100,
                }}
              />
              <InputName>Address Delivery:</InputName>
              <InputField
                onChange={() => {}}
                onBlur={() => {}}
                autoComplete={"off"}
                autoCapitalize={"off"}
              />
              <InputName>Phone Number:</InputName>
              <InputField
                type={"number"}
                onChange={() => {}}
                onBlur={() => {}}
                autoComplete={"off"}
                autoCapitalize={"off"}
              />
            </InputContainer>
          </ContentBlock>
          <ContentBlock>
            <Button title={"Save profile"} color={colors.PURPURE} width={160} />
            <Button
              title={"Change password"}
              color={colors.PURPURE}
              width={160}
              func={() => dispatch(setStatusChangePasswordWindow(true))}
            />
          </ContentBlock>
        </ProfilePageContent>
      </ProfileContainer>
    </AuthRedirect>
  );
};

// setStatusChangePasswordWindow

export const ImageContainer = styled.div`
  border-top-left-radius: 15px;
`;

export const ImagePlatform = styled.img`
  width: 180px;
  height: 220px;
`;

export const ProfileTitle = styled.h2`
  font-weight: 300;
  padding-left: 10px;
  color: ${colors.WHITE};
`;

export const ProfileContainer = styled.div`
  padding: 20px;
`;

export const BottomLine = styled.div`
  border-bottom: 1px solid ${colors.WHITE}; ;
`;

export const ContentBlock = styled.div`
  margin: 10px;
`;

export const ProfilePageContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`;

export const InputName = styled.label`
  line-height: 2;
  text-align: left;
  margin-bottom: 2px;
  margin-top: 5px;
  font-size: 14;
  font-weight: 300;
  color: ${colors.WHITE};
  justify-content: center;
  align-items: center;
`;

export const InputField = styled.input`
  width: 300px;
  border-radius: 4px;
  color: ${colors.WHITE};
  border: 1px solid white;
  padding: 10px;
  font-size: 14;
  background-color: transparent;
`;

export default Profile;
