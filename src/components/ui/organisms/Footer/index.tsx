import { images } from "@/constants/image";
import { FC } from "react";
import { StoreGame, FooterContainer, StoreLogo } from "./style";
import { logoGamesT } from "./types";

const logoGames: logoGamesT[] = [
  {
    id: 0,
    alt: "activision",
    link: "https://www.activision.com/",
    image: images.ACTIVISION,
  },
  {
    id: 1,
    alt: "ea",
    image: images.EA,
    link: "https://www.ea.com/ru-ru",
  },
  {
    id: 2,
    alt: "epic_games",
    image: images.EPIC_GAMES,
    link: "https://www.epicgames.com/site/en-US/home",
  },
  {
    id: 3,
    alt: "game_pack",
    image: images.GAME_PACK,
    link: "https://gamepackstudio.com/",
  },
  {
    id: 4,
    alt: "playstation",
    image: images.PLAYSTATION,
    link: "https://www.playstation.com/ru-ru/",
  },
  { id: 5, alt: "sega", image: images.SEGA, link: "https://www.sega.com/" },
  {
    id: 6,
    alt: "space_game",
    image: images.SPACE_GAME,
    link: "https://www.space.com/topics/space-games",
  },
  {
    id: 7,
    alt: "xbox",
    image: images.XBOX,
    link: "https://www.xbox.com/ru-RU/",
  },
];

const Footer: FC = () => {
  return (
    <FooterContainer>
      {logoGames.map((logo) => (
        <StoreGames
          key={logo.id}
          id={logo.id}
          link={logo.link}
          image={logo.image}
          alt={logo.alt}
        />
      ))}
    </FooterContainer>
  );
};

const StoreGames = ({ link, image, alt }: logoGamesT) => {
  return (
    <StoreGame href={link} target="_blank" rel="noopener noreferrer">
      <StoreLogo src={image} alt={alt} />
    </StoreGame>
  );
};

export default Footer;
