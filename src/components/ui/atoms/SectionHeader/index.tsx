import { BottomLine } from "@/pages/Product/styles";
import { FC } from "react";
import { Title } from "./style";

const SectionHeader: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <Title>{name}</Title>
      <BottomLine />
    </>
  );
};

export default SectionHeader;
