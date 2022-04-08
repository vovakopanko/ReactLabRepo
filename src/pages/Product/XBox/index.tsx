import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const XBox = ({
  isAuth,
  setIsOpenRegistration,
}: {
  isAuth: boolean;
  setIsOpenRegistration: (val: boolean) => void;
}) => {
  const pageInfo = "Soon there will be content for Playstation";

  if (!isAuth) {
    setIsOpenRegistration(true);
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <PageContainer>
      <PageContainerInfo pageInfo={pageInfo} />
    </PageContainer>
  );
};

export const PageContainer = styled.div`
  justify-content: center;
  font-size: 25;
`;

export default XBox;
