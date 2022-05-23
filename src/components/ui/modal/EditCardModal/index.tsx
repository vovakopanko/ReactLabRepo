import { useNavigate, useParams } from "react-router-dom";
import closeImage from "@/assets/svgIcon/closeBtn.svg";
import { useCallback, useEffect, useState } from "react";
import { contentAPI } from "@/api/ContentAPI";
import { TGameCard } from "../../organisms/GameList/types";
import ModalForm from "./ModalForm";
import { BackgroundContainer } from "../../portals/AuthPortal/styles";
import image from "@/assets/images/no_image.png";
import {
  Image,
  ImageContainer,
  ImageTitle,
  InfoContainer,
  InfoTitle,
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

export function EditCardModal() {
  const [games, setGames] = useState<TGameCard[]>([]);
  const { name } = useParams<"name">();
  const navigate = useNavigate();

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

  const onDismiss = useCallback(() => {
    navigate(-1);
  }, []);

  const onError = useCallback(({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = image;
  }, []);

  if (!selectedGame) return null;

  return (
    <EditCardContainer>
      <BackgroundContainer />
      <Blur>
        <TitleContainer>
          <Title>Edit card</Title>
          <CloseButton>
            <CloseOutlined src={closeImage} onClick={onDismiss} />
          </CloseButton>
        </TitleContainer>
        <CardInfoContainer>
          <ImageContainer>
            <ImageTitle>Card image</ImageTitle>
            <Image src={selectedGame.url} onError={onError} />
          </ImageContainer>
          <InfoContainer>
            <InfoTitle>Information</InfoTitle>
            <ModalForm
              idCard={selectedGame.uniqueId}
              gameName={selectedGame.title}
              description={selectedGame.description}
              image={selectedGame.url}
              price={selectedGame.price}
              genres={selectedGame.genres}
              age={selectedGame.age}
              imagePlatforms={selectedGame.imagePlatforms}
            />
          </InfoContainer>
        </CardInfoContainer>
      </Blur>
    </EditCardContainer>
  );
}
