import styled from "styled-components";
import iconPlus from "../../../../assets/svgIcon/iconPlus.svg";
import iconMinus from "../../../../assets/svgIcon/iconMinus.svg";
import { useCallback, useEffect } from "react";
import { updateAmountCard } from "@/redux/reducers/cart";
import { useDispatch } from "react-redux";
import { AmountBlock, AmountValue, LeftIcon, RightIcon } from "./styles";

type Props = {
  counter: number;
  name: string;
  setCounter: Function;
};

type Data = {
  disabled: boolean;
};

const AmountCounter = ({ counter, name, setCounter }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateAmountCard({ name: name, amount: counter }));
  }, [counter]);

  const handleDown = useCallback(() => {
    if (counter >= 2) {
      setCounter((prev: number) => prev - 1);
    }
  }, [counter]);

  const handleUp = useCallback(() => {
    if (counter <= 9) {
      setCounter((prev: number) => prev + 1);
    }
  }, [counter]);

  return (
    <AmountBlock>
      <LeftIcon onClick={handleDown}>
        <Image disabled={counter >= 2} src={iconMinus} />
      </LeftIcon>

      <AmountValue>{counter}</AmountValue>
      <RightIcon onClick={handleUp}>
        <Image disabled={counter >= 10} src={iconPlus} />
      </RightIcon>
    </AmountBlock>
  );
};

const Image = styled.img<Data>`
  width: 20px;
  height: 20px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export default AmountCounter;
