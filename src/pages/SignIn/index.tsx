import { PageContainerInfo } from "@/components/ui/atoms";
import { colors } from "@/styles/palette";
import { FC } from "react";
import styled from "styled-components";

const Registration: FC = () => {
  const pageInfo: string = "Soon there will be content for Registration";

  return (
    <div>
      <PageContainerInfo pageInfo={pageInfo} />
      <div>
        <Title>Login:</Title>
      </div>
      <div>
        <Title>Password:</Title>
      </div>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Title = styled.span`
  color: ${colors.WHITE};
  text-align: center;
`;

export default Registration;
