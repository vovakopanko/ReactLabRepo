import { useNavigate, useParams } from "react-router-dom";
import { colors } from "@/styles/palette";
import closeImage from "../../../../assets/svgIcon/closeBtn.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { contentAPI } from "@/api/ContentAPI";
import { TGameCard } from "../../organisms/GameList/types";
import ModalForm from "./ModalForm";
import { BackgroundContainer } from "../../organisms/AuthPortal/styles";

export const arrayPlatform = [
  { value: "PC", titleName: "PC" },
  { value: "Xbox", titleName: "Xbox One" },
  { value: "Playstation 5", titleName: "Playstation 5" },
];

export const arrayAge = [
  { value: "3", titleName: "3+" },
  { value: "6", titleName: "6+" },
  { value: "14", titleName: "14+" },
  { value: "16", titleName: "16+" },
];

export function Modal() {
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

  function onDismiss() {
    navigate(-1);
  }
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
            <Image src={selectedGame.url} />
          </ImageContainer>
          <InfoContainer>
            <InfoTitle>Information</InfoTitle>
            <ModalForm
              idCard={selectedGame._id}
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

const Blur = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.GRAY};
  width: 30%;
  min-width: 360px;
  box-shadow: 0px 0px 20px 0px ${colors.PURPURE};
  z-index: 11;
  border-radius: 25px;
  padding: 20px;
`;

const CloseOutlined = styled.img`
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const EditCardContainer = styled.div`
  width: 40%;
  position: fixed;
  margin: auto;
  top: 20%;
  left: 0px;
  right: 0px;
  box-shadow: 0px 0px 20px 0px ${colors.PURPURE};
  border-radius: 25px;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 29px;
  color: ${colors.BLACK};
  padding: 20px;
  width: 95%;
`;

const CloseButton = styled.div`
  width: 5%;
  justify-content: center;
  align-self: center;
`;
const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ImageTitle = styled.span`
  color: ${colors.BLACK};
  font-size: 21px;
  padding-bottom: 20px;
  padding-top: 10px;
`;

const Image = styled.img`
  width: 250px;
  height: 400px;
  border-radius: 25px;
`;

const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.div`
  color: ${colors.BLACK};
  font-size: 21px;
  padding-bottom: 10px;
  padding-top: 10px;
`;
