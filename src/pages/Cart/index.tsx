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
  const selectedGames = useSelector(selectorCartList);
  const dispatch = useDispatch();
  const unselectedPositions = selectedGames.filter((a) => a.checked === false);
  const isButtonRemoveDisabled = selectedGames
    .map((a) => a.checked)
    .includes(true);
  return (
    <AuthRedirect>
      <CartComponent data={selectedGames.length}>
        <PageTitleBlock>
          <PageTitle>Cart page</PageTitle>
          <BottomTitleLine />
        </PageTitleBlock>
        {selectedGames.length && (
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
          {selectedGames.length && (
            <BtnWrapper>
              <Button
                disabled={!isButtonRemoveDisabled}
                title={"Remove"}
                width={100}
                onClick={() =>
                  dispatch(removeCurrentGames(unselectedPositions))
                }
                type="secondary"
              />
            </BtnWrapper>
          )}
        </RemoveBtnBlock>
        {selectedGames.length && (
          <>
            <BottomLine />
            <TotalCoast>
              <CoastContainer>
                <TotalCoastContainer>
                  <TotalCoastTitle>Games cost:</TotalCoastTitle>
                  <TotalCoastSubTitle>
                    {selectedGames
                      .map(
                        (selectedGame) =>
                          selectedGame.price *
                          (selectedGame.checked ? selectedGame.amount : 0)
                      )
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
                  disabled={!isButtonRemoveDisabled}
                  title={"Buy"}
                  width={100}
                  onClick={() => {
                    dispatch(removeCurrentGames(unselectedPositions));
                    alert("Wait couple minutes our specialist call with you!");
                  }}
                  type="secondary"
                />
              </ButtonBuyContainer>
            </TotalCoast>
          </>
        )}
        {!selectedGames.length && (
          <EmptyContainer>
            <TotalCoastTitle>Your shopping cart is empty</TotalCoastTitle>
          </EmptyContainer>
        )}
      </CartComponent>
    </AuthRedirect>
  );
};

export default CartPage;
