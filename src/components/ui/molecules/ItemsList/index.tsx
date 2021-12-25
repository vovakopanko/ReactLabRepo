import { StyleItemsList, Item } from "./style";
import { ItemList } from "./type";

const ItemsList = ({ id, item }: ItemList) => {
  return (
    <StyleItemsList key={id}>
      <Item>{item}</Item>
    </StyleItemsList>
  );
};

export default ItemsList;
