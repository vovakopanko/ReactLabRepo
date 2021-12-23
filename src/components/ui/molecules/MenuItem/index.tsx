import { MenuItem } from "@/components/ui/organisms/Header/types";
import { Title, TitleBlock, StyledNavLink } from "./styles";

const MenuItem = ({ id, link, item }: MenuItem) => {
  return (
    <StyledNavLink to={link}>
      <TitleBlock key={id}>
        <Title>{item}</Title>
      </TitleBlock>
    </StyledNavLink>
  );
};

export default MenuItem;
