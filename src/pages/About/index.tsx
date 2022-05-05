import AuthRedirect from "@/hoc/withAuthRedirect";
import styled from "styled-components";
import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";

const About = () => {
  const pageInfo = "Empty";
  return (
    <AuthRedirect>
      <PageContainer>
        <PageContainerInfo pageInfo={pageInfo} />
      </PageContainer>
    </AuthRedirect>
  );
};

export const PageContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40%;
  justify-content: center;
  font-size: 25;
`;

export const Blur = styled.div`
  padding: 10px;
  backdrop-filter: blur(2px) grayscale(0.5);
`;

export default About;
