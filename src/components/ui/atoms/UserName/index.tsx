import { StyleItem, TitleItem } from "./styles";

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
