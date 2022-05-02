import styled from "styled-components";
import iconPlusBlur from "../../../../assets/svgIcon/iconPlusBlur.svg";
import iconPlus from "../../../../assets/svgIcon/iconPlus.svg";
import iconMinus from "../../../../assets/svgIcon/iconMinus.svg";
import iconMinusBlur from "../../../../assets/svgIcon/iconMinusBlur.svg";
import { useCallback, useEffect } from "react";
import { updateAmountCard } from "@/redux/reducers/cart";
import { useDispatch } from "react-redux";

type Props = {
  counter: number;
  name: string;
  setCounter: Function;
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
        <Image src={counter >= 2 ? iconMinus : iconMinusBlur} />
      </LeftIcon>

      <AmountValue>{counter}</AmountValue>
      <RightIcon onClick={handleUp}>
        <Image src={counter >= 10 ? iconPlusBlur : iconPlus} />
      </RightIcon>
    </AmountBlock>
  );
};

const AmountValue = styled.span`
  color: white;
  font-size: 21px;
  min-width: 25px;
  width: auto;
`;

const AmountBlock = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftIcon = styled.div`
  padding-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;

const RightIcon = styled.div`
  padding-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export default AmountCounter;
