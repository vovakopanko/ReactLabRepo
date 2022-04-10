import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import { getStatusAuthWindow } from "@/redux/reducers/auth";
import { selectorIsAuthUser } from "@/redux/selectors/AuthSelector";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const pageInfo = "Soon there will be content for Playstation";

const Playstation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuthUser);

  if (!isAuth) {
    dispatch(getStatusAuthWindow(true));
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

export default Playstation;
