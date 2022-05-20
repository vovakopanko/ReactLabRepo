import AuthRedirect from "@/hoc/withAuthRedirect";
import { selectUserData } from "@/redux/selectors/authSelector";
import { memo } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ProfileContainer, ProfilePageContent } from "./styles";
import Info from "./components/Info";
import Avatar from "./components/Avatar";
import ChangePassword from "./components/ChangePassword";
import { SectionHeader } from "@/components/ui";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { address, description, email, phoneNumber, photoUser, userName } =
    useSelector(selectUserData);

  return (
    <AuthRedirect>
      <ProfileContainer>
        <SectionHeader name={`Profile Page : ${userName}`} />
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
