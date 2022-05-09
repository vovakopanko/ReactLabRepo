import Button from "@/components/ui/atoms/Button";
import AuthRedirect from "@/hoc/withAuthRedirect";
import { removeCurrentGames } from "@/redux/reducers/cart";
import { selectorCartList } from "@/redux/selectors/authSelector";
import { useCallback, useMemo } from "react";
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
  const selectedGames = useSelector(selectorCartList);

  const dispatch = useDispatch();

  const onRemoveUnSelectedCards = useCallback(() => {
    const deselectedGames = selectedGames.filter(
      (selectedGame) => selectedGame.checked === false
    );
    dispatch(removeCurrentGames(deselectedGames));
  }, [selectedGames]);

  const onBuyPress = useCallback(() => {
    onRemoveUnSelectedCards();
    alert("Wait couple minutes our specialist call with you!");
  }, [onRemoveUnSelectedCards]);

  const selectedGamesLength = selectedGames.length;
  const isEmptyCart = selectedGames.length !== 0;
  const isButtonRemoveDisabled = selectedGames.some(
    (selectedGame) => selectedGame.checked
  );

  const totalAmount = useMemo(
    () =>
      selectedGames
        .reduce((prev, cardItem) => {
          if (cardItem.checked) {
            return prev + cardItem.price * cardItem.amount;
          }
          return prev;
        }, 0)
        .toFixed(2),
    []
  );

  return (
    <AuthRedirect>
      <CartComponent data={selectedGamesLength}>
        <PageTitleBlock>
          <PageTitle>Cart page</PageTitle>
          <BottomTitleLine />
        </PageTitleBlock>
        {isEmptyCart && (
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
        {selectedGames.map((selectedGame) => (
          <GameCartInfo
            key={selectedGame.name}
            amount={selectedGame.amount}
            name={selectedGame.name}
            orderDate={selectedGame.orderDate}
            price={selectedGame.price}
            platforms={selectedGame.platforms}
            checked={selectedGame.checked}
          />
        ))}
        <RemoveBtnBlock>
          {isEmptyCart && (
            <BtnWrapper>
              <Button
                disabled={!isButtonRemoveDisabled}
                title={"Remove"}
                width={100}
                onClick={onRemoveUnSelectedCards}
                type="secondary"
              />
            </BtnWrapper>
          )}
        </RemoveBtnBlock>
        {isEmptyCart ? (
          <>
            <BottomLine />
            <TotalCoast>
              <CoastContainer>
                <TotalCoastContainer>
                  <TotalCoastTitle>Games cost:</TotalCoastTitle>
                  <TotalCoastSubTitle>{totalAmount}$</TotalCoastSubTitle>
                </TotalCoastContainer>
                <TotalCoastContainer>
                  <TotalCoastTitle>Your balance:</TotalCoastTitle>
                  <TotalCoastSubTitle> 0 $</TotalCoastSubTitle>
                </TotalCoastContainer>
              </CoastContainer>
              <ButtonBuyContainer>
                <Button
                  disabled={!isButtonRemoveDisabled}
                  title={"Buy"}
                  width={100}
                  onClick={onBuyPress}
                  type="secondary"
                />
              </ButtonBuyContainer>
            </TotalCoast>
          </>
        ) : (
          <EmptyContainer>
            <TotalCoastTitle>Your shopping cart is empty</TotalCoastTitle>
          </EmptyContainer>
        )}
      </CartComponent>
    </AuthRedirect>
  );
};

export default CartPage;
