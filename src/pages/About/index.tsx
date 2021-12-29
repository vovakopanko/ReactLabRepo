import { PageContainerInfo } from "@/components/ui/molecules/PageInfo";
import { FC } from "react";

const About: FC = () => {
  const pageInfo = "Soon there will be content for About";
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PageContainerInfo pageInfo={pageInfo} />
    </div>
  );
};

export default About;
