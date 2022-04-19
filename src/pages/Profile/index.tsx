import OnClick from "@/components/ui/atoms/onClick";
import AuthRedirect from "@/hoc/withAuthRedirect";
import { setStatusChangePasswordWindow } from "@/redux/reducers/profile";
import { selectUserData } from "@/redux/selectors/authSelector";
import { colors } from "@/styles/palette";
import { memo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BottomLine,
  ContentBlock,
  ProfileContainer,
  ProfilePageContent,
  ProfileTitle,
} from "./styles";
import Info from "./components/Info";
import Avatar from "./components/Avatar";

const Profile = () => {
  const { address, description, email, phoneNumber, photoUser, userName } =
    useSelector(selectUserData);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AuthRedirect>
      <ProfileContainer>
        <ProfileTitle>Profile Page : {userName}</ProfileTitle>
        <BottomLine />
        <ProfilePageContent>
          <Avatar photoUser={photoUser} email={email} />
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
            <OnClick
              title={"Change password"}
              color={colors.PURPURE}
              width={180}
              func={() => dispatch(setStatusChangePasswordWindow(true))}
            />
            {isOpen && (
              <OnClick
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
