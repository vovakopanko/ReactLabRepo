import { images } from "@/constants/image";
import { colors } from "@/styles/palette";
import { FC } from "react";
import styled from "styled-components";
import { StarOutlined } from "@ant-design/icons";
import { CardItem, Category, ItemComponent } from "./types";

const categories: Category[] = [
  { id: 0, alt: "windows", title: "PC", image: images.WINDOWS },
  { id: 1, alt: "playstation", title: "Playstation 5", image: images.PS },
  { id: 2, alt: "xbox", title: "Xbox One", image: images.XBOX_LOGO },
];

const gamesCards = [
  {
    id: 0,
    title: "OverWatch",
    prise: "23.99$",
    url: images.OVERWATCH,
    alt: "OverWatch",
    amountStars: 5,
  },
  {
    id: 1,
    title: "MineCraft",
    prise: "25.99$",
    url: images.MINECRAFT,
    alt: "MineCraft",
    amountStars: 4,
  },
  {
    id: 2,
    title: "Terraria",
    prise: "4.99$",
    url: images.TERRARIA,
    alt: "Terraria",
    amountStars: 5,
  },
];

const GamePlatform = ({ alt, title, image }: Category) => {
  return (
    <GameBlock>
      <GameLogoBlock>
        <GameLogo src={image} alt={alt} />
      </GameLogoBlock>
      <Subtitle>{title}</Subtitle>
    </GameBlock>
  );
};

const Categories = () => {
  return (
    <BlockItem>
      {categories.map((item) => (
        <GamePlatform
          key={item.id}
          alt={item.alt}
          title={item.title}
          image={item.image}
        />
      ))}
    </BlockItem>
  );
};

const CardsItem = ({ title, prise, url, alt, amountStars }: CardItem) => {
  return (
    <CardBlock>
      <ImageLogo src={url} alt={alt} />
      <PriseBlock>
        <Span>{title}</Span>
        <Span>{prise}</Span>
      </PriseBlock>
      <div>
        {Array.from({ length: amountStars }, () => (
          <StarOutlined />
        ))}
      </div>
    </CardBlock>
  );
};

const NewGames = () => {
  return (
    <GamesBlock>
      {gamesCards.map((card) => (
        <CardsItem
          key={card.id}
          title={card.title}
          prise={card.prise}
          url={card.url}
          alt={card.alt}
          amountStars={card.amountStars}
        />
      ))}
    </GamesBlock>
  );
};

const homeComponent = [
  { id: 0, name: "Categories", componentName: <Categories /> },
  { id: 1, name: "New games", componentName: <NewGames /> },
];

const ItemsComponent = ({ name, componentName }: ItemComponent) => {
  return (
    <div>
      <Title>{name}</Title>
      <Line />
      {componentName}
    </div>
  );
};

const SearchBar = () => {
  return (
    <SearchBlock>
      <Input onClick={() => alert("got product")} placeholder={"Search"} />
    </SearchBlock>
  );
};

const Home: FC = () => {
  return (
    <div>
      <SearchBar />
      {homeComponent.map((component) => (
        <ItemsComponent
          key={component.id}
          name={component.name}
          componentName={component.componentName}
        />
      ))}
    </div>
  );
};

const SearchBlock = styled.div`
  padding: 20px;
  justify-content: center;
  display: flex;
`;

const GamesBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
`;

const Input = styled.input`
  width: 95%;
  height: 30px;
  background-color: ${colors.BLACK};
  opacity: 0.8;
  border-radius: 15px;
  border: 2px solid ${colors.WHITE};
  padding-left: 10px;
`;

const Line = styled.div`
  height: 2px;
  background-color: ${colors.LIGHT_GRAY};
`;

const Span = styled.span`
  font-size: 15px;
  color: ${colors.WHITE};
  padding-bottom: 5px;
`;

const PriseBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageLogo = styled.img`
  width: 100%;
  height: 80%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const CardBlock = styled.div`
  border: 5px solid ${colors.PURPURE};
  border-radius: 15px;
  background-color: ${colors.LIGHT_GRAY};
  height: 300px;
  width: 200px;
`;

const GameBlock = styled.div`
  margin: 20px;
  background-color: ${colors.BLACK};
  width: 25%;
  height: 200px;
  border-radius: 30px;
  border: 5px solid ${colors.LIGHT_GRAY};
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 18px;
  color: ${colors.LIGHT_GRAY};
`;

const Subtitle = styled.h3`
  font-size: 18px;
  text-align: center;
  color: ${colors.LIGHT_GRAY};
`;

const GameLogo = styled.img`
  width: 80px;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const GameLogoBlock = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BlockItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default Home;
