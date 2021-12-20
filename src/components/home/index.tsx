import { FC } from "react";
import { colors, images } from "../api/constants";
import styled from "styled-components";

const Categories = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div style={{ padding: 20 }}>
        <div style={{ width: 200, height: 200 }}>
          <img
            src={images.WINDOWS}
            style={{ width: 130, height: 130 }}
            alt="windows"
          />
        </div>
        <text>PC</text>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ width: 200, height: 200 }}>
          <img
            src={images.PS}
            style={{ width: 130, height: 130 }}
            alt="playstation"
          />
        </div>
        <text>Playstation 5</text>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ width: 200, height: 200 }}>
          <img
            src={images.XBOX_LOGO}
            style={{ width: 200, height: 120 }}
            alt="xbox"
          />
        </div>
        <text>Xbox One</text>
      </div>
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
      <div
        style={{
          backgroundColor: colors.LIGHT_GRAY,
          height: 300,
          width: 250,
        }}
      >
        <text>Card 1</text>
      </div>
      <div
        style={{
          backgroundColor: colors.LIGHT_GRAY,
          height: 300,
          width: 250,
        }}
      >
        <text>Card 2</text>
      </div>
      <div
        style={{
          backgroundColor: colors.LIGHT_GRAY,
          height: 300,
          width: 250,
        }}
      >
        <text>Card 3</text>
      </div>
    </div>
  );
};
// const homeComponent = [
//   {id: 0, name: 'Categories }
// ]

const Home: FC = () => {
  return (
    <div className={"container"}>
      <div style={{ padding: 20 }}>
        <Wrapper>
          <input placeholder={"Search"}></input>
        </Wrapper>
        <div />
      </div>
      {/* {homeComponent.map(component=><div>
        <text> Categories</text>
        <div style={{ height: 2, backgroundColor: colors.LIGHT_GRAY }} />
        <Categories />
      </div>)} */}
      <div>
        <text> Categories</text>
        <div style={{ height: 2, backgroundColor: colors.LIGHT_GRAY }} />
        <Categories />
      </div>
      <div>
        <text>New games</text>
        <div style={{ height: 2, backgroundColor: colors.LIGHT_GRAY }} />
        <NewGames />
      </div>
    </div>
  );
};

const Wrapper = styled.section`
  background: papayawhip;
`;

export default Home;
