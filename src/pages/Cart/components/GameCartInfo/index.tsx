import { BottomLine } from "@/pages/Product/styles";
import { updateAmountCard, updateCheckBoxGame } from "@/redux/reducers/cart";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  CheckBox,
  CheckBoxContainer,
  ItemName,
  SubTitleBlock,
  TitleStyle,
} from "../../styles";
import PlatformSelected from "./PlatformSelected";
import AmountCounter from "../AmountCounter";

type GameInfo = {
  name: string;
  platforms: any;
  orderDate: string;
  amount: number;
  prise: number;
  checked: boolean;
};

const GameCartInfo = ({
  name,
  orderDate,
  amount,
  prise,
  checked,
  platforms,
}: GameInfo) => {
  const [counter, setCounter] = useState(amount);
  const [platform, setPlatform] = useState("PC");
  const [select, setSelect] = useState(checked);
  const dispatch = useDispatch();
  const handleChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
    setPlatform(event.target.value);
  };

  useEffect(() => {
    dispatch(updateAmountCard({ name: name, amount: counter }));
  }, [counter]);

  useEffect(() => {
    dispatch(updateCheckBoxGame({ name: name, checked: select }));
  }, [select]);

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
        <AmountCounter counter={counter} name={name} setCounter={setCounter} />
        <ItemName width={"10%"}>
          <TitleStyle>{prise} $</TitleStyle>
        </ItemName>
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            checked={select}
            onChange={() => setSelect(!select)}
          />
        </CheckBoxContainer>
      </SubTitleBlock>
      <BottomLine />
    </>
  );
};

export default GameCartInfo;
