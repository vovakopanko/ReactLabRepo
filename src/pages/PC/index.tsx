import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import { FC } from "react";

const PC: FC = () => {
  const pageInfo = "Soon there will be content for PC";
  return <PageContainerInfo pageInfo={pageInfo} />;
};

export default PC;
