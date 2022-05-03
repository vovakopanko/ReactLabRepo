import { BottomLine } from "@/pages/Product/styles";
import { ChangeEvent, useCallback, useState } from "react";
import {
  CheckBox,
  CheckBoxContainer,
  ItemName,
  SubTitleBlock,
  TitleStyle,
} from "../../styles";
import PlatformSelected from "./PlatformSelected";
import AmountCounter from "../AmountCounter";
import { useDispatch } from "react-redux";
import { toggleChecked } from "@/redux/reducers/cart";

type GameInfo = {
  name: string;
  platforms: any;
  orderDate: string;
  amount: number;
  price: number;
  checked: boolean;
};

const GameCartInfo = ({
  name,
  orderDate,
  amount,
  price,
  checked,
  platforms,
}: GameInfo) => {
  const [platform, setPlatform] = useState("PC");
  const dispatch = useDispatch();
  const handleChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
    setPlatform(event.target.value);
  };

  const onToggleCheckBox = useCallback(() => {
    dispatch(toggleChecked({ name }));
  }, []);

  return (
    <>
      <SubTitleBlock>
        <ItemName width={"35%"}>
          <TitleStyle>{name}</TitleStyle>
        </ItemName>
        <PlatformSelected
          value={platform}
          platforms={platforms}
          handleChange={handleChangeType}
        />
        <ItemName width={"15%"}>
          <TitleStyle>{orderDate}</TitleStyle>
        </ItemName>
        <AmountCounter counter={amount} name={name} />
        <ItemName width={"10%"}>
          <TitleStyle>{price} $</TitleStyle>
        </ItemName>
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            checked={checked}
            onChange={onToggleCheckBox}
          />
        </CheckBoxContainer>
      </SubTitleBlock>
      <BottomLine />
    </>
  );
};

export default GameCartInfo;
