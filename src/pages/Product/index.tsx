import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import AuthRedirect from "@/hoc/withAuthRedirect";
import { PageContainer } from "./styles";

const Product = ({ pageInfo }: { pageInfo: string }) => {
  return (
    <AuthRedirect>
      <PageContainer>
        <PageContainerInfo pageInfo={pageInfo} />
      </PageContainer>
    </AuthRedirect>
  );
};

export default Product;
