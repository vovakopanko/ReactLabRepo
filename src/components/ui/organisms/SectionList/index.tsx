import { ItemComponent } from "@/pages/Home/types";
import { FC } from "react";
import Blur from "../../atoms/Blur";
import SectionHeader from "../../atoms/SectionHeader";
import { Container } from "./style";

const SectionList: FC<ItemComponent> = ({ name, renderComponent }) => {
  return (
    <Container>
      <Blur>
        <SectionHeader name={name} />
        {renderComponent}
      </Blur>
    </Container>
  );
};

export default SectionList;
