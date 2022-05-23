import AuthRedirect from "@/hoc/withAuthRedirect";
import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import { PageContainer } from "./styles";

const About = () => {
  const pageInfo = "";
  return (
    <AuthRedirect>
      <PageContainer>
        <PageContainerInfo pageInfo={pageInfo} />
      </PageContainer>
    </AuthRedirect>
  );
};

export default About;
