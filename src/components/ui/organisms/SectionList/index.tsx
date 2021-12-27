import { ItemComponent } from "@/pages/Home/types";
import { FC } from "react";
import Blur from "../../atoms/Blur";
import Line from "../../molecules/DividingLine";
import { Title, Container } from "./style";

const SectionList: FC<ItemComponent> = ({ name, renderComponent }) => {
  return (
    <Container>
      <Blur>
        <Title>{name}</Title>
        <Line />
        {renderComponent}
      </Blur>
    </Container>
  );
};

export default SectionList;
