import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import { FC } from "react";

const Product: FC = () => {
  const pageInfo = "Soon there will be content for Product";
  return <PageContainerInfo pageInfo={pageInfo} />;
};

export default Product;
