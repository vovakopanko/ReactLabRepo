import { useNavigate, useParams } from "react-router-dom";
import closeImage from "@/assets/svgIcon/closeBtn.svg";
import { useEffect, useState } from "react";
import { contentAPI } from "@/api/ContentAPI";
import { TGameCard } from "../../organisms/GameList/types";
import { BackgroundContainer } from "../../portals/AuthPortal/styles";
import image from "@/assets/images/no_image.png";
import {
  Image,
  ImageContainer,
  InfoContainer,
  InfoTitle,
  Subtitle,
  SubtitleInfo,
} from "./styles";
import {
  CardInfoContainer,
  Blur,
  EditCardContainer,
  TitleContainer,
  Title,
  CloseButton,
  CloseOutlined,
} from "../styles";
import Button from "../../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuthUser,
  selectorCartList,
} from "@/redux/selectors/authSelector";
import { setCartList } from "@/redux/reducers/cart";
import { cartList } from "@/pages/Cart/types";

export function FoundCardModal() {
  const [games, setGames] = useState<TGameCard[]>([]);
  const { name } = useParams<"name">();
  const isAuth = useSelector(selectIsAuthUser);
  const cardsList = useSelector(selectorCartList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const query = async () => {
      const gamesList = await contentAPI
        .getGameCards()
        ?.then((response: TGameCard[]) => response);
      if (gamesList) {
        setGames(gamesList);
      }
    };
    query();
  }, []);

  const selectedGame = games.find((game) => game.title === name);

  const setGameCard = () => {
    const now = new Date();
    const game: cartList[] = [
      {
        name: selectedGame?.title!,
        platforms: selectedGame?.imagePlatforms!,
        orderDate:
          now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear(),
        amount: 1,
        price: selectedGame?.price!,
        checked: true,
      },
    ];
    dispatch(setCartList(game));
  };

  function onDismiss() {
    navigate(-1);
  }

  if (!selectedGame) return null;

  return (
    <EditCardContainer>
      <BackgroundContainer />
      <Blur>
        <TitleContainer>
          <Title>{selectedGame.title}</Title>
          <CloseButton>
            <CloseOutlined src={closeImage} onClick={onDismiss} />
          </CloseButton>
        </TitleContainer>
        <CardInfoContainer>
          <ImageContainer>
            <Image
              src={selectedGame.url}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = image;
              }}
            />
          </ImageContainer>
          <InfoContainer>
            <InfoTitle>Information</InfoTitle>
            <span>Game Name: </span>
            <SubtitleInfo>{selectedGame.title}</SubtitleInfo>
            <span>Description: </span>
            <SubtitleInfo>{selectedGame.description}</SubtitleInfo>
            <span>Genres: </span>
            <SubtitleInfo>{selectedGame.genres}</SubtitleInfo>
            <span>Prise: </span>
            <SubtitleInfo>{selectedGame.price}$</SubtitleInfo>
            <span>Age: </span>
            <SubtitleInfo>{selectedGame.age}+</SubtitleInfo>
            <span>Platform: </span>
            {selectedGame.imagePlatforms.map((platform) => (
              <Subtitle key={platform.id}>{platform.alt}</Subtitle>
            ))}
          </InfoContainer>
        </CardInfoContainer>
        {isAuth && (
          <Button
            title={"Add to cart"}
            width={100}
            type="secondary"
            disabled={cardsList.some(
              (cardList) => cardList.name === selectedGame.title
            )}
            onClick={setGameCard}
          />
        )}
      </Blur>
    </EditCardContainer>
  );
}
