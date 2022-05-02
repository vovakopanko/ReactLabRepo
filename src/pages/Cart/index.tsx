import Button from "@/components/ui/atoms/Button";
import AuthRedirect from "@/hoc/withAuthRedirect";
import { removeCurrentGames } from "@/redux/reducers/cart";
import { selectorCartList } from "@/redux/selectors/authSelector";
import { useDispatch, useSelector } from "react-redux";
import { BottomLine, BottomTitleLine } from "../Product/styles";
import GameCartInfo from "./components/GameCartInfo";
import { arraySubTitle } from "./constants";
import {
  BtnWrapper,
  ButtonBuyContainer,
  CartComponent,
  CheckBoxField,
  CoastContainer,
  EmptyContainer,
  MobileBlock,
  PageTitle,
  PageTitleBlock,
  RemoveBtnBlock,
  SubTitle,
  SubTitleBlock,
  TitleStyle,
  TotalCoast,
  TotalCoastContainer,
  TotalCoastSubTitle,
  TotalCoastTitle,
} from "./styles";

type ArraySubTitle = {
  id: number;
  name: string;
  width: string;
};

const CartPage = () => {
  const cardArray = useSelector(selectorCartList);
  const dispatch = useDispatch();
  const getUnselectedPosition = cardArray.filter((a) => a.checked === false);
  const isDisabledBtnRemove = cardArray.map((a) => a.checked).includes(true);

  return (
    <AuthRedirect>
      <CartComponent data={cardArray.length}>
        <PageTitleBlock>
          <PageTitle>Cart page</PageTitle>
          <BottomTitleLine />
        </PageTitleBlock>
        {cardArray.length && (
          <MobileBlock>
            <SubTitleBlock>
              {arraySubTitle.map((subtitle: ArraySubTitle) => (
                <SubTitle width={subtitle.width} key={subtitle.id}>
                  <TitleStyle>{subtitle.name}</TitleStyle>
                </SubTitle>
              ))}
              <CheckBoxField />
            </SubTitleBlock>
            <BottomLine />
          </MobileBlock>
        )}
        {cardArray.map((a) => (
          <GameCartInfo
            key={a.name}
            amount={a.amount}
            name={a.name}
            orderDate={a.orderDate}
            prise={a.prise}
            platforms={a.platforms}
            checked={a.checked}
          />
        ))}
        <RemoveBtnBlock>
          {cardArray.length && (
            <BtnWrapper>
              <Button
                disabled={!isDisabledBtnRemove}
                title={"Remove"}
                width={100}
                onClick={() =>
                  dispatch(removeCurrentGames(getUnselectedPosition))
                }
                type="secondary"
              />
            </BtnWrapper>
          )}
        </RemoveBtnBlock>
        {cardArray.length && (
          <>
            <BottomLine />
            <TotalCoast>
              <CoastContainer>
                <TotalCoastContainer>
                  <TotalCoastTitle>Games cost:</TotalCoastTitle>
                  <TotalCoastSubTitle>
                    {cardArray
                      .map((a) => a.prise * (a.checked ? a.amount : 0))
                      .reduce(
                        (previousValue, currentValue) =>
                          previousValue + currentValue,
                        0
                      )
                      .toFixed(2)}
                    $
                  </TotalCoastSubTitle>
                </TotalCoastContainer>
                <TotalCoastContainer>
                  <TotalCoastTitle>Your balance:</TotalCoastTitle>
                  <TotalCoastSubTitle> 0 $</TotalCoastSubTitle>
                </TotalCoastContainer>
              </CoastContainer>
              <ButtonBuyContainer>
                <Button
                  disabled={!isDisabledBtnRemove}
                  title={"Buy"}
                  width={100}
                  onClick={() => {
                    dispatch(removeCurrentGames(getUnselectedPosition));
                    alert("Wait couple minutes our specialist call with you!");
                  }}
                  type="secondary"
                />
              </ButtonBuyContainer>
            </TotalCoast>
          </>
        )}
        {!cardArray.length && (
          <EmptyContainer>
            <TotalCoastTitle>Your shopping cart is empty</TotalCoastTitle>
          </EmptyContainer>
        )}
      </CartComponent>
    </AuthRedirect>
  );
};

export default CartPage;
