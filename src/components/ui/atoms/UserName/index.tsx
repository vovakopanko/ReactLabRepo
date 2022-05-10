import styled from "styled-components";

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

const StyleItem = styled.ul`
  font-size: 18px;
  color: "white";
  list-style-type: none;
  cursor: pointer;
  &:hover {
    color: "red";
  }
  padding: 0 20px;
`;

const TitleItem = styled.span`
  padding-right: 10px;
`;
