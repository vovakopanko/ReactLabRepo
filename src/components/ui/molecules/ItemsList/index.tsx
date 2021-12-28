import { FC } from "react";
import { StyleItemsList, Item } from "./style";
import { ItemList } from "./type";

const ItemsList: FC<ItemList> = ({ id, item }) => {
  return (
    <StyleItemsList key={id}>
      <Item>{item}</Item>
    </StyleItemsList>
  );
};

export default ItemsList;
