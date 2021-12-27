import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import { FC } from "react";

const About: FC = () => {
  const pageInfo = "Soon there will be content for About";
  return <PageContainerInfo pageInfo={pageInfo} />;
};

export default About;
