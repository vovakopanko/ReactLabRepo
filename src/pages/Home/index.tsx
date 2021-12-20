import { images } from "@/constants/image";
import { colors } from "@/styles/palette";
import { FC } from "react";
import { CardItem, Category, ItemComponent } from "./types";

const categories: Category[] = [
  { id: 0, alt: "windows", title: "PC", image: images.WINDOWS },
  { id: 1, alt: "playstation", title: "Playstation 5", image: images.PS },
  { id: 2, alt: "xbox", title: "Xbox One", image: images.XBOX_LOGO },
];

const CategoriesItems = ({ alt, title, image }: Category) => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ width: 200, height: 200 }}>
        <img src={image} style={{ width: 130, height: 130 }} alt={alt} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

const Categories = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {categories.map((item) => (
        <CategoriesItems
          key={item.id}
          alt={item.alt}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
};

const gamesCards = [
  { id: 0, title: "Card 1" },
  { id: 1, title: "Card 2" },
  { id: 2, title: "Card 3" },
];

const CardsItem = ({ title }: CardItem) => {
  return (
    <div style={cardBlock}>
      <span>{title}</span>
    </div>
  );
};

const NewGames = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20,
      }}
    >
      {gamesCards.map((card) => (
        <CardsItem key={card.id} title={card.title} />
      ))}
    </div>
  );
};

const homeComponent = [
  { id: 0, name: "Categories", componentName: <Categories /> },
  { id: 1, name: "New games", componentName: <NewGames /> },
];

const ItemsComponent = ({ name, componentName }: ItemComponent) => {
  return (
    <div>
      <p>{name}</p>
      <div style={{ height: 2, backgroundColor: colors.LIGHT_GRAY }} />
      {componentName}
    </div>
  );
};

const Home: FC = () => {
  return (
    <div>
      <div style={{ padding: 20 }}>
        <input placeholder={"Search"}></input>
        <div />
      </div>
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

const cardBlock = {
  backgroundColor: colors.LIGHT_GRAY,
  height: 300,
  width: 250,
};

export default Home;
