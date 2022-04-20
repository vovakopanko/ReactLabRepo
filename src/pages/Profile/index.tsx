import AuthRedirect from "@/hoc/withAuthRedirect";
import { selectUserData } from "@/redux/selectors/authSelector";
import { memo } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  BottomLine,
  ProfileContainer,
  ProfilePageContent,
  ProfileTitle,
} from "./styles";
import Info from "./components/Info";
import Avatar from "./components/Avatar";
import ChangePassword from "./components/ChagePassword";

const Profile = () => {
  const { address, description, email, phoneNumber, photoUser, userName } =
    useSelector(selectUserData);
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
          <ChangePassword isOpen={isOpen} setIsOpen={setIsOpen} />
        </ProfilePageContent>
      </ProfileContainer>
    </AuthRedirect>
  );
};

export default memo(Profile);
