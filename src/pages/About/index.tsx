import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import AuthRedirect from "@/hoc/withAuthRedirect";
import styled from "styled-components";

const pageInfo = "Soon there will be content for About";

const About = () => {
  return (
    <AuthRedirect>
      <PageContainer>
        <PageContainerInfo pageInfo={pageInfo} />
      </PageContainer>
    </AuthRedirect>
  );
};

export const PageContainer = styled.div`
  justify-content: center;
  font-size: 25;
`;

export default About;
