import styled from "styled-components";
import iconPlus from "../../../../assets/svgIcon/iconPlus.svg";
import iconMinus from "../../../../assets/svgIcon/iconMinus.svg";
import { useCallback } from "react";
import { decreaseAmount, increaseAmount } from "@/redux/reducers/cart";
import { useDispatch } from "react-redux";
import { AmountBlock, AmountValue, LeftIcon, RightIcon } from "./styles";

type Props = {
  counter: number;
  name: string;
  setCounter?: Function;
};

type Data = {
  disabled: boolean;
};

const AmountCounter = ({ counter, name }: Props) => {
  const dispatch = useDispatch();

  const handleDown = useCallback(() => {
    if (counter >= 2) {
      dispatch(decreaseAmount({ name: name }));
    }
  }, [counter]);

  const handleUp = useCallback(() => {
    if (counter <= 9) {
      dispatch(increaseAmount({ name: name }));
    }
  }, [counter]);

  return (
    <AmountBlock>
      <LeftIcon onClick={handleDown}>
        <Image disabled={counter <= 1} src={iconMinus} />
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
