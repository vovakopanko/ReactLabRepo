import { CardItem, imagesPlatforms } from "./types";
import {
  AgeRestrictions,
  ButtonPosition,
  ButtonsContainer,
  CardBackBlock,
  CardBlock,
  GameDescription,
  Image,
  ImagePlatform,
  ImagePlatformContainer,
  PriceBlock,
  Span,
  StarContainer,
  StarImage,
} from "./style";
import image from "./../../../../assets/svgIcon/star.svg";
import Button from "../../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCartList } from "@/redux/reducers/cart";
import {
  selectIsAdmin,
  selectIsAuthUser,
  selectorCartList,
} from "@/redux/selectors/authSelector";
import { useCallback } from "react";

const GamePlatform = ({ src, alt }: { src: string; alt: string }) => {
  return <ImagePlatform src={src} alt={alt} />;
};

const GameCard = ({
  imagePlatforms,
  url,
  alt,
  title,
  price,
  amountStars,
  description,
  age,
}: CardItem) => {
  const starsCount = new Array(amountStars).fill("star");
  const cardsList = useSelector(selectorCartList);
  const isAuth = useSelector(selectIsAuthUser);
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();

  const setGameCard = useCallback(() => {
    const now = new Date();
    const game = [
      {
        name: title,
        platforms: imagePlatforms,
        orderDate:
          now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear(),
        amount: 1,
        price: price,
        checked: true,
      },
    ];

    dispatch(setCartList(game));
  }, []);

  return (
    <>
      <CardBlock>
        <ImagePlatformContainer>
          {imagePlatforms.map((platform: imagesPlatforms, index: number) => (
            <GamePlatform key={index} {...platform} />
          ))}
        </ImagePlatformContainer>
        <Image src={url} alt={alt} />
        <PriceBlock>
          <Span>{title}</Span>
          <Span>{price}$</Span>
        </PriceBlock>
        <StarContainer>
          {starsCount.map((_, index) => {
            return <StarImage src={image} key={index} />;
          })}
        </StarContainer>
      </CardBlock>
      <CardBackBlock>
        <GameDescription>{description}</GameDescription>
        <AgeRestrictions>{age}+</AgeRestrictions>
        <ButtonsContainer>
          <ButtonPosition>
            {isAuth && (
              <Button
                title={"Add to cart"}
                width={100}
                type="secondary"
                disabled={cardsList.some((cardList) => cardList.name === title)}
                onClick={setGameCard}
              />
            )}
          </ButtonPosition>
          {isAuth && isAdmin && (
            <ButtonPosition>
              <Button
                title={"Edit"}
                width={100}
                type="secondary"
                onClick={() => console.log("EDIT")}
              />
            </ButtonPosition>
          )}
        </ButtonsContainer>
      </CardBackBlock>
    </>
  );
};

export default GameCard;
