import { FC } from "react";
import { Title, LineContainer, StyleLine } from "./style";

const SectionHeader: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <Title>{name}</Title>
      <LineContainer>
        <StyleLine />
      </LineContainer>
    </>
  );
};

export default SectionHeader;
