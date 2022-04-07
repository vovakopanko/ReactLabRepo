import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import { FC } from "react";

const Profile: FC = () => {
  const pageInfo = "Soon there will be content for Profile";
  return (
    <div
      style={{
        justifyContent: "center",
        fontSize: 25,
      }}
    >
      <PageContainerInfo pageInfo={pageInfo} />
    </div>
  );
};

export default Profile;
