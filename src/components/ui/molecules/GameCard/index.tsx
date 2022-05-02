import { CardItem, GameInfo, imagesPlatforms } from "./types";
import {
  AgeRestrictions,
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
  selectIsAuthUser,
  selectorCartList,
  selectRoleUser,
} from "@/redux/selectors/authSelector";

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
  const arr = useSelector(selectorCartList);
  const isAuth = useSelector(selectIsAuthUser);
  const isRole = useSelector(selectRoleUser) === "ADMIN";
  const dispatch = useDispatch();
  let now = new Date();

  const setGameCard: GameInfo[] = [
    {
      name: title,
      platforms: imagePlatforms,
      orderDate:
        now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear(),
      amount: 1,
      prise: prise,
      checked: true,
    },
  ];

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "50%" }}>
            {isAuth && (
              <Button
                title={"Add to cart"}
                width={100}
                type="secondary"
                disabled={arr.some((a) => a.name === title)}
                onClick={() => dispatch(setCartList(setGameCard))}
              />
            )}
          </div>

          {isAuth && isRole && (
            <div style={{ width: "50%" }}>
              <Button
                title={"Edit"}
                width={100}
                type="secondary"
                onClick={() => console.log("EDIT")}
              />
            </div>
          )}
        </div>
      </CardBackBlock>
    </>
  );
};

export default GameCard;
