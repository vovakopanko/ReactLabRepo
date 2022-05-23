import { ItemComponent } from "@/pages/Home/types";
import { FC } from "react";
import Blur from "../../../../components/ui/atoms/Blur";
import SectionHeader from "../../../../components/ui/atoms/SectionHeader";
import { Container } from "./styles";

const SectionList: FC<ItemComponent> = ({ name, RenderComponent }) => {
  return (
    <Container>
      <Blur>
        <>
          <SectionHeader name={name} />
          <RenderComponent />
        </>
      </Blur>
    </Container>
  );
};

export default SectionList;
