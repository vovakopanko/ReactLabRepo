import { StyleItem } from "../../molecules/MenuItem/styles";
import { TitleItem } from "../../organisms/Header/style";

type Props = {
  userName: string;
};

const UserName = ({ userName }: Props) => {
  return (
    <StyleItem>
      <TitleItem>{userName}</TitleItem>
    </StyleItem>
  );
};

export default UserName;
