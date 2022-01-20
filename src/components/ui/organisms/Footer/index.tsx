import { useState } from "react";
import { FC, useEffect } from "react";
import { StyleStoreGame, FooterContainer, StoreLogo } from "./style";
import { logoGamesT } from "./types";

const Footer: FC = () => {
  const [logoGames, setLogoGames] = useState<logoGamesT[]>([]);
  useEffect(() => {
    const query = async () => {
      let uri = "http://localhost:3000/logoGames";
      const res = await fetch(uri);
      const logos = await res.json();
      setLogoGames(logos);
    };
    query();
  }, []);

  return (
    <FooterContainer>
      {logoGames.map(({ link, image, alt, id }) => (
        <StyleStoreGame
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StoreLogo src={image} alt={alt} />
        </StyleStoreGame>
      ))}
    </FooterContainer>
  );
};

export default Footer;
